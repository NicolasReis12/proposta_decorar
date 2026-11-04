"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { copyText } from "./hooks";

export default function CopyButton({ text, label = "Copiar", dark = false }: { text: string; label?: string; dark?: boolean }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        if (await copyText(text)) {
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        }
      }}
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
        dark ? "border-white/20 text-white hover:bg-white/10" : "border-line bg-white text-ink hover:border-sky"
      }`}
    >
      {done ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
      {done ? "Copiado!" : label}
    </button>
  );
}
