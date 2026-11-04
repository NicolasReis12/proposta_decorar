"use client";

import { useState } from "react";
import { traffic } from "@/data/diagnostico";
import { fmtBRL2, fmtInt, fmtPct } from "@/lib/format";

const segments = [
  { key: "msg", label: "Anúncios de mensagens", value: traffic.midiaMensagens, color: "#145180", result: `${fmtInt(traffic.conversas)} conversas iniciadas` },
  { key: "vis", label: "Anúncios de visitas ao perfil", value: traffic.midiaVisitas, color: "#508EBA", result: `${fmtInt(traffic.visitasPerfil)} visitas ao perfil` },
  { key: "sem", label: "Sem resultado registrado", value: traffic.semResultado, color: "#9AA7B3", result: "Nenhum resultado atribuído" },
];

export default function TrafficDashboard() {
  const [hover, setHover] = useState<string | null>(null);
  const total = traffic.investimentoTotal;
  const custoVisita = traffic.midiaVisitas / traffic.visitasPerfil;

  const kpis = [
    { label: "Investimento total", value: fmtBRL2(total), hint: `${traffic.anuncios} anúncios analisados` },
    { label: "Conversas iniciadas", value: fmtInt(traffic.conversas), hint: "Pelo WhatsApp / Direct" },
    { label: "Custo por conversa", value: fmtBRL2(traffic.custoPorConversa), hint: "Somente verba de mensagens" },
    { label: "Visitas ao perfil", value: fmtInt(traffic.visitasPerfil), hint: `≈ ${fmtBRL2(custoVisita)} por visita (calculado)` },
    { label: "Mídia em mensagens", value: fmtBRL2(traffic.midiaMensagens), hint: fmtPct((traffic.midiaMensagens / total) * 100) + " do total" },
    { label: "Mídia em visitas", value: fmtBRL2(traffic.midiaVisitas), hint: fmtPct((traffic.midiaVisitas / total) * 100) + " do total" },
  ];

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {kpis.map((k, i) => (
          <div key={k.label} className={`rounded-2xl border p-5 ${i < 3 ? "border-navy bg-navy text-white" : "border-line bg-white"}`}>
            <p className={`text-[10px] font-bold tracking-[0.14em] uppercase ${i < 3 ? "text-sky" : "text-origem"}`}>{k.label}</p>
            <p className="mt-2 font-display text-[22px] leading-tight font-medium tabular-nums sm:text-[28px]">{k.value}</p>
            <p className={`mt-1 text-[11px] ${i < 3 ? "text-white/60" : "text-mute"}`}>{k.hint}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-line bg-white p-5 md:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="font-display text-lg font-medium">Para onde foi o investimento</p>
          <p className="text-xs text-mute">Total: {fmtBRL2(total)}</p>
        </div>
        <div className="relative mt-5 flex h-11 w-full gap-[2px] overflow-hidden rounded-[6px]" role="img" aria-label="Distribuição do investimento: mensagens 78,7%, visitas ao perfil 21,2%, sem resultado 0,1%">
          {segments.map((s) => (
            <div
              key={s.key}
              onMouseEnter={() => setHover(s.key)}
              onMouseLeave={() => setHover(null)}
              className="bar-grow h-full cursor-default transition-opacity"
              style={{ width: `${(s.value / total) * 100}%`, minWidth: s.key === "sem" ? 3 : undefined, background: s.color, opacity: hover && hover !== s.key ? 0.4 : 1 }}
            />
          ))}
        </div>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {segments.map((s) => (
            <li
              key={s.key}
              onMouseEnter={() => setHover(s.key)}
              onMouseLeave={() => setHover(null)}
              className={`rounded-xl border p-3.5 transition-colors ${hover === s.key ? "border-sky bg-paper" : "border-line"}`}
            >
              <p className="flex items-center gap-2 text-xs font-semibold">
                <span className="h-2.5 w-2.5 rounded-sm" style={{ background: s.color }} />
                {s.label}
              </p>
              <p className="mt-1.5 font-display text-xl font-medium tabular-nums">
                {fmtPct((s.value / total) * 100)} <span className="text-sm font-normal text-mute">· {fmtBRL2(s.value)}</span>
              </p>
              <p className="mt-0.5 text-xs text-mute">{s.result}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {[
          { t: "Visitas ao perfil", v: fmtInt(traffic.visitasPerfil), d: "Interesse na marca. Não é contato nem venda.", s: "Medido" },
          { t: "Conversas iniciadas", v: fmtInt(traffic.conversas), d: "Pessoas que chamaram. Ainda não deduplicadas; não são vendas.", s: "Medido" },
          { t: "Orçamentos e vendas", v: "A mensurar", d: "O fechamento comercial das conversas ainda precisa ser registrado.", s: "Pendente" },
        ].map((x) => (
          <div key={x.t} className={`rounded-2xl border p-5 ${x.s === "Pendente" ? "border-dashed border-amber-500/60 bg-amber-50/60" : "border-line bg-white"}`}>
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold tracking-wider text-mute uppercase">{x.t}</p>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${x.s === "Pendente" ? "bg-amber-100 text-amber-900" : "bg-sky-soft text-origem"}`}>{x.s}</span>
            </div>
            <p className="mt-2 font-display text-2xl font-medium">{x.v}</p>
            <p className="mt-1 text-xs leading-relaxed text-mute">{x.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
