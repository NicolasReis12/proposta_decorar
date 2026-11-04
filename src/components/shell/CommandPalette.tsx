"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CornerDownLeft, Search } from "lucide-react";
import { chapters, pad, screens } from "@/data/structure";

const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function CommandPalette({ onClose, onGo, active }: { onClose: () => void; onGo: (n: number) => void; active: number }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => input.current?.focus(), []);

  const results = useMemo(() => {
    const term = norm(q.trim());
    if (!term) return screens;
    return screens.filter((s) => {
      const ch = chapters.find((c) => c.id === s.chapter)!;
      return norm(`${pad(s.n)} ${s.n} ${s.title} ${s.eyebrow} ${ch.title}`).includes(term);
    });
  }, [q]);

  useEffect(() => setSel(0), [q]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(results.length - 1, s + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(0, s - 1));
    } else if (e.key === "Enter" && results[sel]) onGo(results[sel].n);
  };

  return (
    <div className="no-print fixed inset-0 z-[60] flex items-start justify-center bg-navy/50 p-4 pt-[12vh] backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Ir para uma tela"
        className="fade-up w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onKey}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search size={17} className="text-mute" />
          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar tela: simulador, roteiros, 16…"
            className="h-14 flex-1 bg-transparent text-[15px] outline-none placeholder:text-mute/70"
          />
          <kbd className="rounded border border-line px-1.5 py-0.5 text-[10px] text-mute">Esc</kbd>
        </div>
        <ul className="max-h-[56vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-mute">Nenhuma tela encontrada.</li>}
          {results.map((s, i) => {
            const ch = chapters.find((c) => c.id === s.chapter)!;
            return (
              <li key={s.n}>
                <button
                  onMouseEnter={() => setSel(i)}
                  onClick={() => onGo(s.n)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left ${i === sel ? "bg-mist" : ""}`}
                >
                  <span className={`w-7 font-display text-xs tabular-nums ${s.n === active ? "text-origem" : "text-mute"}`}>{pad(s.n)}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-ink">{s.title}</span>
                    <span className="block truncate text-[11px] text-mute">
                      Cap. {ch.num} · {ch.short}
                    </span>
                  </span>
                  {i === sel && <CornerDownLeft size={14} className="text-mute" />}
                </button>
              </li>
            );
          })}
        </ul>
        <p className="border-t border-line px-4 py-2.5 text-[11px] text-mute">
          Atalhos: <b>←</b> <b>→</b> navegam entre telas · <b>Home</b> volta ao início · <b>M</b> esconde o menu · <b>/</b> ou <b>Ctrl K</b> abre esta busca
        </p>
      </div>
    </div>
  );
}
