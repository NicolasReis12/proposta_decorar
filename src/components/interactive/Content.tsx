"use client";

import { useEffect, useRef, useState } from "react";
import { CheckSquare, FolderOpen, Play, RotateCcw, Square } from "lucide-react";
import { captureGroups, pillars, selectedVideos } from "@/data/conteudo";
import { usePersistentChecks } from "@/components/ui/hooks";

/* ---------- Tela 20: pilares editoriais ---------- */
export function PillarExplorer() {
  const [sel, setSel] = useState(0);
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((p, i) => {
        const open = sel === i;
        return (
          <button
            key={p.label}
            onClick={() => setSel(i)}
            aria-expanded={open}
            className={`rounded-2xl border p-5 text-left transition ${open ? "border-navy bg-navy text-white" : "border-line bg-white hover:border-sky"}`}
          >
            <p className={`text-[11px] font-bold tracking-[0.14em] uppercase ${open ? "text-sky" : "text-origem"}`}>
              0{i + 1} · {p.label}
            </p>
            <p className="mt-2 font-display text-xl font-medium">{p.value}</p>
            <ul className={`mt-3 space-y-1.5 text-[13px] ${open ? "block" : "hidden print:block"}`}>
              {p.examples.map((e) => (
                <li key={e} className="flex gap-2 text-white/80">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-sky" />
                  {e}
                </li>
              ))}
            </ul>
            {!open && <p className="mt-3 text-xs text-mute print:hidden">Ver exemplos de conteúdo →</p>}
          </button>
        );
      })}
    </div>
  );
}

/* ---------- Tela 23: vídeos selecionados ---------- */
type Status = "loading" | "ready" | "missing";

function VideoSlot({ slot, title, src, caption }: { slot: string; title: string; src: string; caption: string }) {
  const [status, setStatus] = useState<Status>("loading");
  const [localUrl, setLocalUrl] = useState<string | null>(null);
  const [localName, setLocalName] = useState("");
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => () => {
    if (localUrl) URL.revokeObjectURL(localUrl);
  }, [localUrl]);

  // Se o arquivo já falhou antes da hidratação, o evento onError pode ter sido perdido
  useEffect(() => {
    const v = ref.current;
    if (v && v.error) setStatus("missing");
    else if (v && v.readyState >= 1) setStatus("ready");
  }, []);

  const showVideo = localUrl || status !== "missing";

  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-navy-3 to-black" style={{ aspectRatio: "9 / 16" }}>
        {showVideo && (
          <video
            ref={ref}
            key={localUrl ?? src}
            src={localUrl ?? src}
            controls
            playsInline
            preload="metadata"
            onLoadedMetadata={() => setStatus("ready")}
            onError={() => !localUrl && setStatus("missing")}
            className={`absolute inset-0 h-full w-full object-contain ${status === "ready" || localUrl ? "opacity-100" : "opacity-0"}`}
          />
        )}
        {!localUrl && status !== "ready" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 text-white/80">
              <Play size={26} className="ml-1" />
            </span>
            <p className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">{title}</p>
            {status === "missing" && (
              <p className="text-[11px] leading-relaxed text-white/50">
                Espaço reservado.
                <br />
                Adicione <code className="text-sky">public{src}</code>
              </p>
            )}
          </div>
        )}
      </div>
      <p className="mt-2 text-sm font-semibold">
        {title}
        {caption && <span className="font-normal text-mute"> · {caption}</span>}
      </p>
      <label className="no-print mt-2 inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white/85 hover:border-sky">
        <FolderOpen size={14} /> {localName ? "Trocar prévia local" : "Pré-visualizar arquivo local"}
        <input
          type="file"
          accept="video/*"
          className="sr-only"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (!f) return;
            if (localUrl) URL.revokeObjectURL(localUrl);
            setLocalUrl(URL.createObjectURL(f));
            setLocalName(f.name);
          }}
        />
      </label>
      {localName && <p className="mt-1 truncate text-[11px] text-white/50">Prévia: {localName} (não é salvo no site)</p>}
      <span className="sr-only">Slot {slot}</span>
    </div>
  );
}

export function VideoSlots() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {selectedVideos.map((v) => (
        <VideoSlot key={v.slot} {...v} />
      ))}
    </div>
  );
}

/* ---------- Tela 24: checklist de captação ---------- */
export function CaptureChecklist() {
  const { checked, toggle, reset } = usePersistentChecks("decorar:captacao");
  const all = captureGroups.flatMap((g) => g.items);
  const done = all.filter((i) => checked[i.id]).length;

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-4 rounded-2xl bg-navy p-5 text-white">
        <div className="flex-1">
          <p className="text-[11px] font-bold tracking-[0.16em] text-sky uppercase">Progresso da captação</p>
          <p className="mt-1 font-display text-2xl">
            {done} de {all.length} itens captados
          </p>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/15 sm:w-[260px]">
          <div className="h-full rounded-full bg-sky transition-all duration-500" style={{ width: `${(done / all.length) * 100}%` }} />
        </div>
        <button onClick={reset} className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-1.5 text-xs hover:bg-white/10">
          <RotateCcw size={12} /> Limpar
        </button>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {captureGroups.map((g, gi) => (
          <div key={g.priority} className={`rounded-2xl border p-5 ${gi === 0 ? "border-origem bg-white shadow-[0_0_0_3px_rgba(80,142,186,0.15)]" : "border-line bg-white"}`}>
            <p className="text-[11px] font-bold tracking-[0.14em] text-origem uppercase">{g.priority}</p>
            <p className="mt-1 text-xs text-mute">{g.note}</p>
            <ul className="mt-4 space-y-1">
              {g.items.map((it) => {
                const on = !!checked[it.id];
                return (
                  <li key={it.id}>
                    <button onClick={() => toggle(it.id)} role="checkbox" aria-checked={on} className="flex w-full gap-3 rounded-lg p-2 text-left hover:bg-paper">
                      {on ? <CheckSquare size={18} className="shrink-0 text-origem" /> : <Square size={18} className="shrink-0 text-mute" />}
                      <span>
                        <span className={`block text-sm font-semibold ${on ? "text-mute line-through" : ""}`}>{it.label}</span>
                        <span className="block text-xs text-mute">{it.detail}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
