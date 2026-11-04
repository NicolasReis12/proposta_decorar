"use client";

import { useState } from "react";
import { creatives, traffic } from "@/data/diagnostico";
import { fmtBRL2, fmtInt, fmtPct } from "@/lib/format";

type Metric = "conversas" | "custo";

export default function CreativesChart() {
  const [metric, setMetric] = useState<Metric>("conversas");
  const [view, setView] = useState<"chart" | "table">("chart");
  const [hover, setHover] = useState<number | null>(null);

  const max = Math.max(...creatives.map((c) => c[metric]));
  const sum = creatives.reduce((a, c) => a + c.conversas, 0);

  return (
    <div className="rounded-2xl border border-line bg-white p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-display text-lg font-medium">{metric === "conversas" ? "Conversas por criativo" : "Custo por conversa, por criativo"}</p>
          <p className="text-xs text-mute">
            Os 7 criativos somam {fmtInt(sum)} das {fmtInt(traffic.conversas)} conversas ({fmtPct((sum / traffic.conversas) * 100)}).
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex rounded-lg bg-mist p-0.5 text-xs font-semibold" role="tablist" aria-label="Métrica">
            {(
              [
                ["conversas", "Conversas"],
                ["custo", "Custo/conversa"],
              ] as const
            ).map(([k, l]) => (
              <button key={k} role="tab" aria-selected={metric === k} onClick={() => setMetric(k)} className={`rounded-md px-3 py-1.5 ${metric === k ? "bg-white text-ink shadow-sm" : "text-mute"}`}>
                {l}
              </button>
            ))}
          </div>
          <button onClick={() => setView(view === "chart" ? "table" : "chart")} className="rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-mute hover:border-sky hover:text-ink">
            {view === "chart" ? "Ver tabela" : "Ver gráfico"}
          </button>
        </div>
      </div>

      {view === "chart" ? (
        <ul className="mt-6 space-y-2.5">
          {creatives.map((c, i) => (
            <li key={c.name} className="relative grid grid-cols-[minmax(120px,190px)_1fr] items-center gap-3" onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <span className="truncate text-[13px] text-ink/85">{c.name}</span>
              <div className="flex items-center gap-2">
                <div className="h-7 flex-1">
                  <div
                    key={metric}
                    className="bar-grow h-full rounded-r-[4px]"
                    style={{
                      width: `${(c[metric] / max) * 100}%`,
                      background: metric === "conversas" ? "#145180" : "#508EBA",
                      opacity: hover === null || hover === i ? 1 : 0.45,
                      animationDelay: `${i * 50}ms`,
                    }}
                  />
                </div>
                <span className="w-[74px] text-right text-[13px] tabular-nums">{metric === "conversas" ? fmtInt(c.conversas) : fmtBRL2(c.custo)}</span>
              </div>
              {hover === i && (
                <div className="pointer-events-none absolute -top-11 left-[190px] z-10 rounded-lg bg-navy px-3 py-2 text-xs whitespace-nowrap text-white shadow-lg">
                  <b>{c.name}</b> · {fmtInt(c.conversas)} conversas · {fmtBRL2(c.custo)}/conversa
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[460px] text-sm">
            <thead>
              <tr className="bg-mist text-left text-[11px] tracking-wider text-mute uppercase">
                <th className="px-3 py-2.5">Criativo</th>
                <th className="px-3 py-2.5">Conversas</th>
                <th className="px-3 py-2.5">Custo/conversa</th>
              </tr>
            </thead>
            <tbody>
              {creatives.map((c) => (
                <tr key={c.name} className="border-b border-line">
                  <td className="px-3 py-2.5">{c.name}</td>
                  <td className="px-3 py-2.5 tabular-nums">{fmtInt(c.conversas)}</td>
                  <td className="px-3 py-2.5 tabular-nums">{fmtBRL2(c.custo)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="mt-5 text-xs text-mute">
        Menor custo por conversa não significa, necessariamente, maior retorno financeiro: a qualidade comercial de cada contato ainda será cruzada com os anúncios.
      </p>
    </div>
  );
}
