"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, Lightbulb, MessageSquareQuote, ShieldQuestion, Target } from "lucide-react";
import { doubtGroups, journey, lanes, personas, principles } from "@/data/comportamento";
import { ScriptTag } from "@/components/ui/primitives";

/* ---------- Tela 09: perfis de compra ---------- */
export function PersonaTabs() {
  const [i, setI] = useState(0);
  const p = personas[i];
  return (
    <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
      <div className="flex gap-2 overflow-x-auto lg:flex-col" role="tablist" aria-label="Perfis de compra">
        {personas.map((x, k) => (
          <button
            key={x.name}
            role="tab"
            aria-selected={i === k}
            onClick={() => setI(k)}
            className={`flex min-w-[200px] items-center gap-3 rounded-xl border p-4 text-left transition lg:min-w-0 ${
              i === k ? "border-navy bg-navy text-white" : "border-line bg-white hover:border-sky"
            }`}
          >
            <span className={`font-display text-xl font-light ${i === k ? "text-sky" : "text-origem"}`}>0{k + 1}</span>
            <span className="text-sm leading-snug font-semibold">{x.name}</span>
          </button>
        ))}
      </div>
      <div key={i} className="fade-up rounded-2xl border border-line bg-white p-6 md:p-8" role="tabpanel">
        <p className="text-[11px] font-bold tracking-[0.16em] text-origem uppercase">Perfil 0{i + 1}</p>
        <p className="mt-2 font-display text-2xl font-medium md:text-3xl">{p.name}</p>
        <p className="mt-4 font-serif text-2xl leading-snug text-origem italic">{p.message}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { icon: <Target size={15} />, t: "Momento de compra", v: p.moment },
            { icon: <Lightbulb size={15} />, t: "Motivação", v: p.motivation },
            { icon: <ShieldQuestion size={15} />, t: "Principal insegurança", v: p.insecurity },
            { icon: <MessageSquareQuote size={15} />, t: "Conteúdo adequado", v: p.content },
          ].map((r) => (
            <div key={r.t} className="rounded-xl bg-paper p-4">
              <p className="flex items-center gap-2 text-xs font-bold text-ink">
                <span className="text-origem">{r.icon}</span>
                {r.t}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/75">{r.v}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 flex flex-wrap items-center gap-2 text-xs text-mute">
          Roteiros relacionados: {p.scripts.map((s) => <ScriptTag key={s} id={s} />)}
        </p>
      </div>
    </div>
  );
}

/* ---------- Tela 10: dúvidas e objeções ---------- */
export function DoubtExplorer() {
  const flat = doubtGroups.flatMap((g) => g.items.map((it) => ({ ...it, group: g.group, question: g.question })));
  const [sel, setSel] = useState(0);
  const d = flat[sel];
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.15fr]">
      <div className="grid gap-3 sm:grid-cols-2">
        {doubtGroups.map((g) => (
          <div key={g.group} className="rounded-2xl border border-line bg-white p-4">
            <p className="text-[11px] font-bold tracking-[0.14em] text-origem uppercase">{g.group}</p>
            <p className="mt-1 font-display text-[15px] leading-snug font-medium">{g.question}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map((it) => {
                const idx = flat.findIndex((f) => f.doubt === it.doubt);
                return (
                  <button
                    key={it.doubt}
                    onClick={() => setSel(idx)}
                    aria-pressed={sel === idx}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${sel === idx ? "border-navy bg-navy text-white" : "border-line text-ink/80 hover:border-sky"}`}
                  >
                    {it.doubt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div key={sel} className="fade-up flex flex-col rounded-2xl bg-navy p-6 text-white md:p-8">
        <p className="text-[11px] font-bold tracking-[0.16em] text-sky uppercase">
          {d.group} · {d.doubt}
        </p>
        <p className="mt-2 font-serif text-[26px] leading-snug italic">“{d.question}”</p>
        <div className="mt-6 grid flex-1 gap-3">
          <div className="rounded-xl bg-white/[0.06] p-4">
            <p className="text-xs font-bold text-sky">Como respondemos na comunicação</p>
            <p className="mt-1 text-sm leading-relaxed text-white/80">{d.communication}</p>
          </div>
          <div className="rounded-xl bg-white/[0.06] p-4">
            <p className="text-xs font-bold text-sky">Como respondemos no showroom</p>
            <p className="mt-1 text-sm leading-relaxed text-white/80">{d.showroom}</p>
          </div>
        </div>
        <p className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/60">
          Roteiros que respondem:{" "}
          {d.scripts.map((s) => (
            <span key={s} className="rounded-md bg-sky px-1.5 py-0.5 font-display text-[10px] font-semibold text-navy">
              {s}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

/* ---------- Tela 11: princípios ---------- */
export function PrinciplesGrid() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
      {principles.map((p, i) => {
        const isOpen = open === i;
        return (
          <div key={p.name} className={isOpen ? "bg-white/[0.06]" : ""}>
            <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="flex w-full items-center gap-4 px-5 py-4 text-left md:px-6">
              <span className="font-display text-sm text-sky tabular-nums">0{i + 1}</span>
              <span className="flex-1 font-display text-lg font-medium">{p.name}</span>
              <span className="hidden flex-1 text-sm text-white/55 md:block">{p.application}</span>
              <ChevronDown size={16} className={`text-white/50 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div data-print-hidden className={`${isOpen ? "grid" : "hidden"} gap-3 px-5 pb-5 md:grid-cols-3 md:px-6`}>
              {[
                ["O que significa para a Decorar", p.meaning],
                ["Como será aplicado", p.application],
                ["O que vamos observar", p.indicator],
              ].map(([t, v]) => (
                <div key={t} className="rounded-xl bg-navy/60 p-4">
                  <p className="text-xs font-bold text-sky">{t}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/80">{v}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Tela 12: jornada ---------- */
export function JourneyMap() {
  const [sel, setSel] = useState(2);
  const s = journey[sel];
  return (
    <div>
      <div className="no-scrollbar -mx-1 flex items-stretch gap-1 overflow-x-auto px-1 pb-2">
        {journey.map((j, i) => (
          <div key={j.step} className="flex items-center gap-1">
            <button
              onClick={() => setSel(i)}
              aria-pressed={sel === i}
              className={`min-w-[132px] rounded-xl border px-4 py-3 text-left transition ${sel === i ? "border-navy bg-navy text-white" : "border-line bg-white hover:border-sky"}`}
            >
              <span className={`block font-display text-xs ${sel === i ? "text-sky" : "text-origem"}`}>0{i + 1}</span>
              <span className="block text-sm font-bold">{j.step}</span>
            </button>
            {i < journey.length - 1 && <ArrowRight size={14} className="shrink-0 text-mute" />}
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1.4fr]">
        <div key={sel} className="fade-up rounded-2xl border border-line bg-white p-6">
          <p className="text-[11px] font-bold tracking-[0.16em] text-origem uppercase">Etapa 0{sel + 1}</p>
          <p className="mt-1 font-display text-2xl font-medium">{s.step}</p>
          <p className="mt-4 text-xs font-bold text-ink">Canais e pontos de contato</p>
          <p className="mt-1 text-sm text-ink/75">{s.channels}</p>
          <p className="mt-4 text-xs font-bold text-ink">O que fazemos aqui</p>
          <p className="mt-1 text-sm leading-relaxed text-ink/75">{s.actions}</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-line bg-white p-5">
          <p className="mb-3 text-xs font-bold text-ink">Quem atua em cada etapa</p>
          <table className="w-full min-w-[520px] text-xs">
            <thead>
              <tr>
                <th className="w-[150px]" />
                {journey.map((j, i) => (
                  <th key={j.step} className={`px-1 pb-2 text-center font-semibold ${i === sel ? "text-origem" : "text-mute"}`}>
                    {j.step}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lanes.map((l) => (
                <tr key={l.key} className="border-t border-line">
                  <td className="py-2.5 pr-2 font-semibold text-ink/85">{l.label}</td>
                  {journey.map((j, i) => (
                    <td key={j.step} className={`py-2.5 text-center ${i === sel ? "bg-sky-soft/50" : ""}`}>
                      {j.lanes[l.key] ? (
                        <span className="mx-auto block h-3 w-3 rounded-full bg-origem" aria-label="atua" />
                      ) : (
                        <span className="mx-auto block h-3 w-3 rounded-full border border-line" aria-label="não atua" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
