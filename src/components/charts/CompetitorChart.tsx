"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { competitors } from "@/data/diagnostico";
import { fmt1, fmtInt } from "@/lib/format";

type Metric = "reviews" | "rating";

export default function CompetitorChart() {
  const [metric, setMetric] = useState<Metric>("reviews");
  const [view, setView] = useState<"chart" | "table">("chart");
  const [hover, setHover] = useState<number | null>(null);

  const max = metric === "reviews" ? Math.max(...competitors.map((c) => c.reviews)) : 5;

  return (
    <div className="rounded-2xl border border-line bg-white p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-display text-lg font-medium">Reputação no Google, por unidade</p>
          <p className="text-xs text-mute">{metric === "reviews" ? "Quantidade de avaliações" : "Nota média (escala de 0 a 5)"}</p>
        </div>
        <div className="flex gap-2">
          <div className="flex rounded-lg bg-mist p-0.5 text-xs font-semibold" role="tablist" aria-label="Métrica">
            {(
              [
                ["reviews", "Avaliações"],
                ["rating", "Nota"],
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
          {competitors.map((c, i) => {
            const value = metric === "reviews" ? c.reviews : c.rating;
            const hl = "highlight" in c && c.highlight;
            return (
              <li key={c.name} className="relative grid grid-cols-[minmax(110px,170px)_1fr] items-center gap-3" onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
                <span className={`truncate text-[13px] ${hl ? "font-bold text-ink" : "text-ink/75"}`}>{c.name}</span>
                <div className="flex items-center gap-2">
                  <div className="relative h-7 flex-1">
                    <div
                      key={metric}
                      className="bar-grow h-full rounded-r-[4px]"
                      style={{ width: `${(value / max) * 100}%`, background: hl ? "#145180" : "#508EBA", opacity: hover === null || hover === i ? 1 : 0.45, animationDelay: `${i * 50}ms` }}
                    />
                  </div>
                  <span className={`w-[64px] text-right text-[13px] tabular-nums ${hl ? "font-bold" : "text-ink/80"}`}>
                    {metric === "reviews" ? fmtInt(c.reviews) : `${fmt1(c.rating)} ★`}
                  </span>
                </div>
                {hover === i && (
                  <div className="pointer-events-none absolute -top-11 left-[170px] z-10 rounded-lg bg-navy px-3 py-2 text-xs whitespace-nowrap text-white shadow-lg">
                    <b>{c.name}</b> · {fmt1(c.rating)} ★ · {fmtInt(c.reviews)} avaliações
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[420px] text-sm">
            <thead>
              <tr className="bg-mist text-left text-[11px] tracking-wider text-mute uppercase">
                <th className="px-3 py-2.5">Empresa / unidade</th>
                <th className="px-3 py-2.5">Nota</th>
                <th className="px-3 py-2.5">Avaliações</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c) => (
                <tr key={c.name} className="border-b border-line">
                  <td className={`px-3 py-2.5 ${"highlight" in c ? "font-bold" : ""}`}>{c.name}</td>
                  <td className="px-3 py-2.5">
                    <span className="inline-flex items-center gap-1">
                      {fmt1(c.rating)} <Star size={12} className="fill-current text-origem" />
                    </span>
                  </td>
                  <td className="px-3 py-2.5 tabular-nums">{fmtInt(c.reviews)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
