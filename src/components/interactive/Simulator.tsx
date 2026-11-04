"use client";

import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import { traffic } from "@/data/diagnostico";
import { fmt2, fmtBRL, fmtBRL2, fmtInt } from "@/lib/format";

const BASE_CONVERSAS = traffic.conversas; // 619
const BASE_INVEST = traffic.midiaMensagens; // R$ 6.528,58

const DEFAULT_RATE = 5;
const DEFAULT_TICKET = 5000;

export default function Simulator() {
  const [rate, setRate] = useState(DEFAULT_RATE);
  const [ticket, setTicket] = useState(DEFAULT_TICKET);

  // Fórmulas definidas no briefing
  const vendas = (BASE_CONVERSAS * rate) / 100;
  const receita = vendas * ticket;
  const custoVenda = BASE_INVEST / vendas;

  const lit = Math.round(vendas);
  const dots = useMemo(() => Array.from({ length: BASE_CONVERSAS }), []);

  const pRate = ((rate - 1) / 19) * 100;
  const pTicket = ((ticket - 2000) / 13000) * 100;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
      <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold tracking-[0.16em] text-sky uppercase">Base histórica fixa</p>
            <p className="mt-1 text-sm text-white/75">
              {fmtInt(BASE_CONVERSAS)} conversas · {fmtBRL2(BASE_INVEST)} em anúncios de mensagens
            </p>
          </div>
          <span className="rounded-full bg-sky/20 px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-sky">SIMULAÇÃO</span>
        </div>

        <div className="mt-8 space-y-9">
          <label className="block">
            <span className="flex items-baseline justify-between">
              <span className="text-sm font-semibold">Taxa hipotética de conversão</span>
              <span className="font-display text-3xl font-medium text-white tabular-nums">{rate}%</span>
            </span>
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="range mt-4"
              style={{ ["--p" as string]: `${pRate}%` }}
              aria-valuetext={`${rate}%`}
            />
            <span className="mt-2 flex justify-between text-[11px] text-white/45">
              <span>1%</span>
              <span>20%</span>
            </span>
          </label>

          <label className="block">
            <span className="flex items-baseline justify-between">
              <span className="text-sm font-semibold">Ticket médio hipotético</span>
              <span className="font-display text-3xl font-medium text-white tabular-nums">{fmtBRL(ticket)}</span>
            </span>
            <input
              type="range"
              min={2000}
              max={15000}
              step={500}
              value={ticket}
              onChange={(e) => setTicket(Number(e.target.value))}
              className="range mt-4"
              style={{ ["--p" as string]: `${pTicket}%` }}
              aria-valuetext={fmtBRL(ticket)}
            />
            <span className="mt-2 flex justify-between text-[11px] text-white/45">
              <span>R$ 2.000</span>
              <span>R$ 15.000</span>
            </span>
          </label>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-white/50">Cenários rápidos:</span>
          {[2, 5, 10, 15].map((r) => (
            <button
              key={r}
              onClick={() => setRate(r)}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${rate === r ? "border-sky bg-sky text-navy" : "border-white/20 text-white/80 hover:border-sky"}`}
            >
              {r}%
            </button>
          ))}
          <button
            onClick={() => {
              setRate(DEFAULT_RATE);
              setTicket(DEFAULT_TICKET);
            }}
            className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs text-white/60 hover:text-white"
          >
            <RotateCcw size={12} /> Restaurar
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <Result label="Vendas equivalentes" value={fmt2(vendas)} hint={`${fmtInt(BASE_CONVERSAS)} × ${rate}%`} big />
          <Result label="Receita equivalente" value={fmtBRL(receita)} hint={`${fmt2(vendas)} × ${fmtBRL(ticket)}`} big />
          <Result label="Custo estimado de anúncios por venda" value={fmtBRL2(custoVenda)} hint={`${fmtBRL2(BASE_INVEST)} ÷ ${fmt2(vendas)}`} />
          <Result label="Investimento histórico de referência" value={fmtBRL2(BASE_INVEST)} hint="Anúncios de mensagens · fixo" />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="mb-3 flex justify-between text-[11px] text-white/60">
            <span>Cada ponto = 1 conversa histórica</span>
            <span>
              <b className="text-white">≈ {fmtInt(lit)}</b> destacadas
            </span>
          </p>
          <div className="grid grid-cols-[repeat(50,minmax(0,1fr))] gap-[2px] sm:gap-[3px]" aria-hidden>
            {dots.map((_, i) => (
              <span key={i} className="aspect-square rounded-full transition-colors duration-300" style={{ background: i < lit ? "#7FB6DD" : "rgba(255,255,255,0.13)" }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Result({ label, value, hint, big = false }: { label: string; value: string; hint: string; big?: boolean }) {
  return (
    <div className={`rounded-2xl p-5 ${big ? "bg-white text-navy" : "border border-white/10 bg-white/[0.06] text-white"}`}>
      <p className={`min-h-[30px] text-[11px] leading-tight font-semibold ${big ? "text-origem" : "text-sky"}`}>{label}</p>
      <p className="mt-2 font-display text-[22px] leading-tight font-medium tabular-nums md:text-[28px]">{value}</p>
      <p className={`mt-1 text-[11px] ${big ? "text-mute" : "text-white/50"}`}>{hint}</p>
    </div>
  );
}
