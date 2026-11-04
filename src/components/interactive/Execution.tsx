"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, CheckSquare, RotateCcw, Square } from "lucide-react";
import { delivered, homework, meetingDecisions, months, roadmap, urgentHomework, type MonthKey } from "@/data/execucao";
import { usePersistentChecks } from "@/components/ui/hooks";
import CopyButton from "@/components/ui/CopyButton";

const monthColor: Record<MonthKey, string> = { nov: "#145180", dez: "#508EBA", jan: "#05192C" };

/* ---------- Tela 29: Gantt ---------- */
export function Roadmap() {
  const [month, setMonth] = useState<MonthKey | null>(null);
  const [cell, setCell] = useState<{ r: number; m: MonthKey } | null>(null);
  const detail = cell ? roadmap[cell.r].cells[cell.m] : null;

  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_300px]">
      <div className="overflow-x-auto rounded-2xl border border-line bg-white p-5">
        <div className="min-w-[640px]">
          <div className="grid grid-cols-[200px_repeat(3,1fr)_64px] items-end gap-2 border-b border-line pb-3">
            <span className="text-[11px] font-bold tracking-wider text-mute uppercase">Frente</span>
            {months.map((m) => (
              <button
                key={m.key}
                onClick={() => {
                  setMonth(month === m.key ? null : m.key);
                  setCell(null);
                }}
                aria-pressed={month === m.key}
                className={`rounded-lg px-2 py-1.5 text-left transition ${month === m.key ? "bg-navy text-white" : "hover:bg-paper"}`}
              >
                <span className="block text-xs font-bold tracking-wider uppercase">{m.label}</span>
                <span className={`block text-[10px] ${month === m.key ? "text-white/60" : "text-mute"}`}>{m.theme}</span>
              </button>
            ))}
            <span className="text-center text-[10px] leading-tight font-bold text-mute uppercase">
              Início
              <br />
              FEV
            </span>
          </div>

          {roadmap.map((row, r) => (
            <div key={row.front} className="grid grid-cols-[200px_repeat(3,1fr)_64px] items-center gap-2 border-b border-mist py-2">
              <span className="text-[13px] font-semibold">{row.front}</span>
              {months.map((m) => {
                const on = !!row.cells[m.key];
                const isSel = cell?.r === r && cell?.m === m.key;
                const dim = month && month !== m.key;
                return (
                  <button
                    key={m.key}
                    disabled={!on}
                    onClick={() => setCell(isSel ? null : { r, m: m.key })}
                    aria-label={on ? `${row.front} em ${m.label}` : `${row.front}: sem atividade em ${m.label}`}
                    className={`h-6 rounded-[5px] transition ${on ? "cursor-pointer hover:brightness-125" : "bg-mist"} ${isSel ? "ring-2 ring-sky ring-offset-2" : ""}`}
                    style={{ background: on ? monthColor[m.key] : undefined, opacity: dim ? 0.25 : 1 }}
                  />
                );
              })}
              <span className="mx-auto h-6 w-full rounded-[5px] border border-dashed border-line" title="Encerramento do ciclo" />
            </div>
          ))}
          <p className="mt-3 text-[11px] text-mute">Clique em um mês para destacá-lo ou em uma barra para ver o detalhe da frente.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="min-h-[150px] rounded-2xl bg-navy p-5 text-white">
          {cell && detail ? (
            <div key={`${cell.r}-${cell.m}`} className="fade-up">
              <p className="text-[11px] font-bold tracking-[0.14em] text-sky uppercase">
                {months.find((m) => m.key === cell.m)!.label} · {roadmap[cell.r].front}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{detail}</p>
            </div>
          ) : month ? (
            <div key={month} className="fade-up">
              <p className="text-[11px] font-bold tracking-[0.14em] text-sky uppercase">{months.find((m) => m.key === month)!.label}</p>
              <ul className="mt-2 space-y-2 text-[13px] text-white/80">
                {roadmap
                  .filter((r) => r.cells[month])
                  .map((r) => (
                    <li key={r.front}>
                      <b className="text-white">{r.front}:</b> {r.cells[month]}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p className="text-sm text-white/60">Selecione um mês ou uma barra do cronograma para ver o que acontece em cada frente.</p>
          )}
        </div>

        <div className="rounded-2xl border border-emerald-600/25 bg-emerald-50/60 p-5">
          <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-emerald-800 uppercase">
            <CheckCircle2 size={14} /> Já entregue
          </p>
          <ul className="mt-2 space-y-1.5 text-[13px] text-emerald-950/80">
            {delivered.map((d) => (
              <li key={d}>· {d}</li>
            ))}
          </ul>
          <p className="mt-3 text-[11px] text-emerald-900/60">As barras do cronograma representam o planejamento proposto.</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Tela 30: dever de casa ---------- */
export function Homework() {
  const { checked, toggle, reset } = usePersistentChecks("decorar:dever-de-casa");
  const total = homework.length + urgentHomework.length;
  const done = [...homework, ...urgentHomework].filter((h) => checked[h.id]).length;

  const text = [
    "DEVER DE CASA — DECORAR MÓVEIS",
    "",
    "URGENTE · BLACK FRIDAY",
    ...urgentHomework.map((u) => `[${checked[u.id] ? "x" : " "}] ${u.title}`),
    "",
    "INDICADORES",
    ...homework.map((h) => `[${checked[h.id] ? "x" : " "}] ${h.title} — ${h.detail} (Responsável: ${h.owner})`),
  ].join("\n");

  return (
    <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
      <div>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {homework.map((h) => {
            const on = !!checked[h.id];
            return (
              <button
                key={h.id}
                role="checkbox"
                aria-checked={on}
                onClick={() => toggle(h.id)}
                className={`flex gap-3 rounded-xl border p-4 text-left transition ${on ? "border-origem bg-sky-soft/50" : "border-line bg-white hover:border-sky"}`}
              >
                {on ? <CheckSquare size={18} className="mt-0.5 shrink-0 text-origem" /> : <Square size={18} className="mt-0.5 shrink-0 text-mute" />}
                <span className="min-w-0">
                  <span className="block text-sm font-bold">{h.title}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-mute">{h.detail}</span>
                  <span className="mt-2 inline-block rounded-full bg-paper px-2 py-0.5 text-[10px] font-semibold text-ink/70">{h.owner}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border-2 border-amber-500/70 bg-amber-50 p-5">
          <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-amber-900 uppercase">
            <AlertTriangle size={14} /> Urgente · Black Friday
          </p>
          <p className="mt-1 text-xs text-amber-900/80">Necessário antes de aprovar qualquer anúncio com oferta.</p>
          <ul className="mt-3 space-y-0.5">
            {urgentHomework.map((u) => {
              const on = !!checked[u.id];
              return (
                <li key={u.id}>
                  <button role="checkbox" aria-checked={on} onClick={() => toggle(u.id)} className="flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left hover:bg-amber-100/70">
                    {on ? <CheckSquare size={17} className="text-amber-700" /> : <Square size={17} className="text-amber-700/60" />}
                    <span className={`text-sm font-semibold text-amber-950 ${on ? "line-through opacity-60" : ""}`}>{u.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-2xl bg-navy p-5 text-white">
          <p className="text-[11px] font-bold tracking-[0.14em] text-sky uppercase">Informações disponíveis</p>
          <p className="mt-1 font-display text-3xl">
            {done} <span className="text-lg text-white/50">de {total}</span>
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/15">
            <div className="h-full rounded-full bg-sky transition-all duration-500" style={{ width: `${(done / total) * 100}%` }} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <CopyButton text={text} label="Copiar checklist" dark />
            <button onClick={reset} className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs text-white/60 hover:text-white">
              <RotateCcw size={12} /> Limpar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Tela 31: decisões da reunião ---------- */
export function MeetingDecisions() {
  const { checked, toggle } = usePersistentChecks("decorar:decisoes");
  return (
    <div className="flex flex-wrap gap-2">
      {meetingDecisions.map((d) => {
        const on = !!checked[d.id];
        return (
          <button
            key={d.id}
            role="checkbox"
            aria-checked={on}
            onClick={() => toggle(d.id)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${on ? "border-emerald-600 bg-emerald-50 text-emerald-900" : "border-line bg-white hover:border-sky"}`}
          >
            {on ? <CheckCircle2 size={16} className="text-emerald-600" /> : <Square size={16} className="text-mute" />}
            {d.label}
          </button>
        );
      })}
    </div>
  );
}
