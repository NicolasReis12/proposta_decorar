"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, BookOpen, Minus, Plus, X } from "lucide-react";
import type { Script } from "@/data/conteudo";
import CopyButton from "@/components/ui/CopyButton";

export const scriptToText = (s: Script) =>
  [
    `${s.id} — ${s.title} (${s.category})`,
    `Objetivo: ${s.objective}`,
    `Gancho sugerido: ${s.hook}`,
    `Roteiro-base: ${s.body}`,
    `Cenas / captação: ${s.scenes}`,
    `CTA: ${s.cta}`,
    s.application ? `Aplicação comercial: ${s.application}` : "",
    `Princípio comportamental: ${s.principle}`,
  ]
    .filter(Boolean)
    .join("\n");

export default function ScriptLibrary({ scripts, note }: { scripts: Script[]; note?: string }) {
  const [sel, setSel] = useState(0);
  const [reading, setReading] = useState(false);
  const s = scripts[sel];

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
        <div className="flex flex-col gap-2">
          {scripts.map((x, i) => (
            <button
              key={x.id}
              onClick={() => setSel(i)}
              aria-pressed={sel === i}
              className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${sel === i ? "border-navy bg-navy text-white" : "border-line bg-white hover:border-sky"}`}
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg font-display text-xs font-semibold ${sel === i ? "bg-sky text-navy" : "bg-navy text-white"}`}>
                {x.id}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">{x.title}</span>
                <span className={`block text-xs ${sel === i ? "text-white/60" : "text-mute"}`}>{x.category}</span>
              </span>
            </button>
          ))}
          <div className="mt-2">
            <CopyButton text={scripts.map(scriptToText).join("\n\n————————\n\n")} label="Copiar os 6 roteiros" />
          </div>
        </div>

        <article key={s.id} className="fade-up rounded-2xl border border-line bg-white">
          <header className="flex flex-wrap items-start justify-between gap-3 border-b border-line p-6">
            <div>
              <p className="text-[11px] font-bold tracking-[0.16em] text-origem uppercase">
                {s.id} · {s.category}
              </p>
              <h3 className="mt-1 font-display text-2xl font-medium">{s.title}</h3>
              <p className="mt-1 text-sm text-mute">Objetivo: {s.objective}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <CopyButton text={scriptToText(s)} label="Copiar roteiro" />
              <button
                onClick={() => setReading(true)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-white hover:bg-origem"
              >
                <BookOpen size={14} /> Modo leitura
              </button>
            </div>
          </header>
          <div className="space-y-5 p-6">
            {s.dependsOnOffer && (
              <p className="flex items-start gap-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-900">
                <AlertTriangle size={14} className="mt-0.5 shrink-0" /> Depende da validação das ofertas. Ajustar falas às condições efetivamente disponíveis.
              </p>
            )}
            <Field t="Gancho sugerido">
              <p className="font-serif text-2xl leading-snug text-navy italic">{s.hook}</p>
            </Field>
            <Field t="Roteiro-base">
              <blockquote className="border-l-[3px] border-sky bg-paper px-5 py-4 text-[15px] leading-[1.8] text-ink/90">{s.body}</blockquote>
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field t="Cenas / captação">
                <p className="text-sm leading-relaxed text-ink/80">{s.scenes}</p>
              </Field>
              <Field t="CTA">
                <p className="text-sm leading-relaxed text-ink/80">{s.cta}</p>
              </Field>
              {s.application && (
                <Field t="Aplicação comercial">
                  <p className="text-sm leading-relaxed text-ink/80">{s.application}</p>
                </Field>
              )}
              <Field t="Princípio comportamental">
                <p className="text-sm leading-relaxed text-ink/80">{s.principle}</p>
              </Field>
            </div>
          </div>
        </article>
      </div>
      {note && <p className="mt-4 text-xs text-mute">{note}</p>}

      {/* Versão de impressão: todos os roteiros por extenso */}
      <div className="mt-6 hidden space-y-4 print:block">
        {scripts.map((x) => (
          <div key={x.id} className="break-inside-avoid rounded-xl border border-line p-4 text-sm whitespace-pre-line">
            {scriptToText(x)}
          </div>
        ))}
      </div>

      {reading && <ReadingMode script={s} onClose={() => setReading(false)} />}
    </>
  );
}

function Field({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 text-[10px] font-bold tracking-[0.14em] text-origem uppercase">{t}</p>
      {children}
    </div>
  );
}

function ReadingMode({ script, onClose }: { script: Script; onClose: () => void }) {
  const [size, setSize] = useState(34);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div role="dialog" aria-modal="true" aria-label={`Modo leitura — ${script.id}`} className="no-print fixed inset-0 z-[70] overflow-y-auto bg-navy text-white">
      <div className="sticky top-0 flex items-center justify-between border-b border-white/10 bg-navy/95 px-6 py-3 backdrop-blur">
        <p className="font-display text-sm">
          <span className="text-sky">{script.id}</span> · {script.title}
        </p>
        <div className="flex items-center gap-2">
          <button onClick={() => setSize((v) => Math.max(22, v - 4))} className="rounded-md border border-white/20 p-1.5" aria-label="Diminuir texto">
            <Minus size={14} />
          </button>
          <button onClick={() => setSize((v) => Math.min(64, v + 4))} className="rounded-md border border-white/20 p-1.5" aria-label="Aumentar texto">
            <Plus size={14} />
          </button>
          <button onClick={onClose} className="ml-2 rounded-md bg-white/10 p-1.5" aria-label="Fechar modo leitura">
            <X size={16} />
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 py-14">
        <p className="text-[11px] font-bold tracking-[0.2em] text-sky uppercase">Gancho</p>
        <p className="mt-3 font-display font-medium" style={{ fontSize: size * 1.05, lineHeight: 1.3 }}>
          {script.hook}
        </p>
        <p className="mt-12 text-[11px] font-bold tracking-[0.2em] text-sky uppercase">Roteiro</p>
        <p className="mt-3 font-display font-light text-white/90" style={{ fontSize: size, lineHeight: 1.5 }}>
          {script.body}
        </p>
        <p className="mt-12 text-[11px] font-bold tracking-[0.2em] text-sky uppercase">CTA</p>
        <p className="mt-3 font-display font-medium" style={{ fontSize: size * 0.9, lineHeight: 1.4 }}>
          {script.cta}
        </p>
        <p className="mt-12 text-sm text-white/50">Cenas: {script.scenes}</p>
      </div>
    </div>
  );
}
