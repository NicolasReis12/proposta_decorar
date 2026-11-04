"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Briefcase, CalendarDays, Clapperboard, Megaphone, PackageCheck, Target, Users } from "lucide-react";
import { audiences, BLACK_FRIDAY, frontPhases, fronts, phases } from "@/data/campanha";
import { traffic } from "@/data/diagnostico";
import { fmtBRL2 } from "@/lib/format";

/* ---------- Contagem regressiva (tela 14) ---------- */
export function Countdown({ target = BLACK_FRIDAY, label = "para a Black Friday" }: { target?: string; label?: string }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(t);
  }, []);
  if (now === null) return <div className="h-[86px]" />;
  const diff = new Date(target).getTime() - now;
  if (diff <= 0) {
    return <p className="font-display text-xl text-sky">A campanha já começou.</p>;
  }
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  return (
    <div className="flex items-end gap-5">
      <div>
        <p className="font-display text-6xl leading-none font-light tabular-nums md:text-7xl">{days}</p>
        <p className="mt-1 text-[11px] font-bold tracking-[0.16em] text-sky uppercase">dias</p>
      </div>
      <div>
        <p className="font-display text-6xl leading-none font-light text-white/60 tabular-nums md:text-7xl">{hours}</p>
        <p className="mt-1 text-[11px] font-bold tracking-[0.16em] text-sky uppercase">horas</p>
      </div>
      <p className="mb-1 max-w-[140px] text-sm text-white/60">{label}</p>
    </div>
  );
}

/* ---------- Linha do tempo (tela 16) ---------- */
const todayISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

export function CampaignTimeline() {
  const [today, setToday] = useState<string>("");
  useEffect(() => setToday(todayISO()), []);
  const currentIdx = useMemo(() => phases.findIndex((p) => today >= p.start && today <= p.end), [today]);
  const [sel, setSel] = useState(0);
  useEffect(() => {
    if (currentIdx >= 0) setSel(currentIdx);
  }, [currentIdx]);
  const p = phases[sel];

  const rows = [
    { icon: <Target size={15} />, t: "Objetivo", v: p.goal },
    { icon: <Clapperboard size={15} />, t: "Conteúdos previstos", v: p.content },
    { icon: <Megaphone size={15} />, t: "Ações de tráfego", v: p.traffic },
    { icon: <Briefcase size={15} />, t: "Ações comerciais", v: p.commercial },
    { icon: <PackageCheck size={15} />, t: "Entregáveis", v: p.deliverables },
    { icon: <Users size={15} />, t: "Responsáveis propostos", v: p.owners },
  ];

  return (
    <div>
      <div className="relative">
        <div className="absolute top-[22px] right-4 left-4 hidden h-[2px] bg-line md:block" />
        <ol className="no-scrollbar relative flex gap-2 overflow-x-auto pb-2 md:grid md:grid-cols-7 md:overflow-visible">
          {phases.map((ph, i) => {
            const isSel = sel === i;
            const isNow = currentIdx === i;
            const peak = ph.id === "black" || ph.id === "cyber";
            return (
              <li key={ph.id} className="min-w-[120px]">
                <button onClick={() => setSel(i)} aria-pressed={isSel} className="group flex w-full flex-col items-start text-left md:items-center md:text-center">
                  <span
                    className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 font-display text-sm transition ${
                      isSel ? "border-navy bg-navy text-white" : peak ? "border-origem bg-sky-soft text-origem" : "border-line bg-white text-mute group-hover:border-sky"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className={`mt-2 text-[11px] font-bold tracking-wider ${isSel ? "text-origem" : "text-mute"}`}>{ph.dates}</span>
                  <span className={`text-sm leading-tight font-semibold ${isSel ? "text-ink" : "text-ink/75"}`}>{ph.name}</span>
                  {isNow && <span className="mt-1 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white">Hoje</span>}
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div key={sel} className="fade-up mt-6 overflow-hidden rounded-2xl border border-line bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-navy px-6 py-4 text-white">
          <p className="flex items-center gap-3">
            <CalendarDays size={18} className="text-sky" />
            <span className="font-display text-xl font-medium">{p.name}</span>
            <span className="text-sm text-white/60">{p.dates}</span>
          </p>
          <div className="flex gap-2">
            <button onClick={() => setSel(Math.max(0, sel - 1))} disabled={sel === 0} className="rounded-lg border border-white/20 px-3 py-1 text-xs disabled:opacity-30">
              Fase anterior
            </button>
            <button
              onClick={() => setSel(Math.min(phases.length - 1, sel + 1))}
              disabled={sel === phases.length - 1}
              className="rounded-lg bg-sky px-3 py-1 text-xs font-semibold text-navy disabled:opacity-30"
            >
              Próxima fase
            </button>
          </div>
        </div>
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((r) => (
            <div key={r.t} className="bg-white p-5">
              <p className="flex items-center gap-2 text-xs font-bold text-ink">
                <span className="text-origem">{r.icon}</span>
                {r.t}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{r.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Execução por frente (tela 17) ---------- */
export function FrontEvolution() {
  const [k, setK] = useState(0);
  const f = fronts[k];
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Frentes de trabalho">
        {fronts.map((x, i) => (
          <button
            key={x.key}
            role="tab"
            aria-selected={k === i}
            onClick={() => setK(i)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${k === i ? "border-navy bg-navy text-white" : "border-line bg-white hover:border-sky"}`}
          >
            {x.label}
          </button>
        ))}
      </div>
      <div key={k} className="fade-up mt-6 grid gap-2 md:grid-cols-5">
        {f.steps.map((s, i) => (
          <div key={i} className={`relative rounded-2xl border p-5 ${i === 2 ? "border-navy bg-navy text-white" : "border-line bg-white"}`}>
            <p className={`text-[11px] font-bold tracking-wider uppercase ${i === 2 ? "text-sky" : "text-origem"}`}>{frontPhases[i]}</p>
            <p className="mt-2 text-sm leading-snug font-medium">{s}</p>
            {i < 4 && <ArrowRight size={14} className="absolute top-1/2 -right-[11px] z-10 hidden -translate-y-1/2 rounded-full bg-paper text-mute md:block" />}
          </div>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-white">
        <table className="w-full min-w-[760px] text-sm">
          <thead>
            <tr className="bg-mist text-left text-[11px] tracking-wider text-mute uppercase">
              <th className="px-4 py-3">Fase</th>
              {fronts.map((x, i) => (
                <th key={x.key} className={`px-4 py-3 ${i === k ? "text-origem" : ""}`}>
                  {x.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {frontPhases.map((ph, r) => (
              <tr key={ph} className="border-t border-line align-top">
                <td className="px-4 py-3 font-semibold">{ph}</td>
                {fronts.map((x, i) => (
                  <td key={x.key} className={`px-4 py-3 text-ink/80 ${i === k ? "bg-sky-soft/40" : ""}`}>
                    {x.steps[r]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- Remarketing (tela 19) ---------- */
export function RemarketingPanel() {
  const [sel, setSel] = useState(0);
  const [budget, setBudget] = useState(traffic.investimentoTotal.toFixed(2).replace(".", ","));
  const a = audiences[sel];
  const value = Number(budget.replace(/\./g, "").replace(",", ".")) || 0;

  return (
    <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
      <div>
        <div className="grid gap-2 sm:grid-cols-3">
          {audiences.map((x, i) => (
            <button
              key={x.id}
              onClick={() => setSel(i)}
              aria-pressed={sel === i}
              className={`rounded-2xl border p-4 text-left transition ${sel === i ? "border-navy bg-navy text-white" : "border-line bg-white hover:border-sky"}`}
            >
              <span className={`text-[11px] font-bold tracking-wider uppercase ${sel === i ? "text-sky" : "text-origem"}`}>{x.label}</span>
              <span className="mt-1 block font-display text-[17px] leading-snug font-medium">{x.name}</span>
            </button>
          ))}
        </div>

        <div key={sel} className="fade-up mt-4 rounded-2xl border border-line bg-white p-6">
          <div className="grid items-stretch gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <Flow t="Quem é" v={a.who} />
            <ArrowRight size={16} className="hidden self-center text-mute md:block" />
            <Flow t="Peça / abordagem publicitária" v={a.piece} />
            <ArrowRight size={16} className="hidden self-center text-mute md:block" />
            <Flow t="Objetivo" v={a.goal} strong />
          </div>
          <p className="mt-4 rounded-lg bg-paper px-4 py-3 text-xs leading-relaxed text-mute">
            <b className="text-ink">Fonte e condição técnica:</b> {a.source}
          </p>
          <p className="mt-3 text-xs text-mute">
            Quem não comprou na Black Friday volta a ser trabalhado na <b className="text-ink">Cyber Monday</b> e no <b className="text-ink">pós-campanha</b>.
          </p>
        </div>
      </div>

      <div className="flex flex-col rounded-2xl bg-navy p-6 text-white">
        <p className="text-[11px] font-bold tracking-[0.16em] text-sky uppercase">Reserva exploratória para remarketing</p>
        <p className="mt-2 font-display text-5xl font-light">10% a 20%</p>
        <p className="mt-2 text-sm text-white/65">Hipótese de planejamento, a validar com o gestor conforme orçamento, tamanho e saturação das audiências.</p>

        <label className="mt-6 block text-xs font-semibold text-white/80">
          Verba de referência (R$)
          <input
            inputMode="decimal"
            value={budget}
            onChange={(e) => setBudget(e.target.value.replace(/[^\d.,]/g, ""))}
            className="mt-2 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 font-display text-lg text-white outline-none focus:border-sky"
          />
        </label>
        <p className="mt-1 text-[11px] text-white/45">Pré-preenchido com o investimento do período analisado ({fmtBRL2(traffic.investimentoTotal)}). Altere livremente.</p>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white/10 p-4">
            <p className="text-[11px] text-white/60">10%</p>
            <p className="font-display text-xl tabular-nums">{fmtBRL2(value * 0.1)}</p>
          </div>
          <div className="rounded-xl bg-white/10 p-4">
            <p className="text-[11px] text-white/60">20%</p>
            <p className="font-display text-xl tabular-nums">{fmtBRL2(value * 0.2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Flow({ t, v, strong = false }: { t: string; v: string; strong?: boolean }) {
  return (
    <div className={`rounded-xl p-4 ${strong ? "bg-sky-soft" : "bg-paper"}`}>
      <p className="text-xs font-bold text-origem">{t}</p>
      <p className="mt-1 text-sm leading-relaxed text-ink/85">{v}</p>
    </div>
  );
}
