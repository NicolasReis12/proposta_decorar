"use client";

import { useCallback, useEffect, useState } from "react";

/** Checklist persistido no navegador (localStorage), para continuar de onde parou. */
export function usePersistentChecks(key: string) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      /* armazenamento indisponível */
    }
  }, [key]);

  const toggle = useCallback(
    (id: string) =>
      setChecked((prev) => {
        const next = { ...prev, [id]: !prev[id] };
        try {
          localStorage.setItem(key, JSON.stringify(next));
        } catch {}
        return next;
      }),
    [key],
  );

  const reset = useCallback(() => {
    setChecked({});
    try {
      localStorage.removeItem(key);
    } catch {}
  }, [key]);

  return { checked, toggle, reset };
}

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }
}
