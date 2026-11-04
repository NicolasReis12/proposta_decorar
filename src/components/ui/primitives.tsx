import type { ReactNode } from "react";

export function Lead({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return <p className={`max-w-[820px] text-[17px] leading-relaxed md:text-lg ${dark ? "text-white/75" : "text-mute"} ${className}`}>{children}</p>;
}

export function Subhead({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <p className={`max-w-[820px] font-display text-xl leading-snug font-medium tracking-[-0.01em] md:text-2xl ${dark ? "text-white" : "text-ink"} ${className}`}>
      {children}
    </p>
  );
}

export function Kicker({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return <p className={`text-[11px] font-bold tracking-[0.16em] uppercase ${dark ? "text-sky" : "text-origem"} ${className}`}>{children}</p>;
}

export function Callout({ title, children, dark = false, className = "" }: { title: string; children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <aside
      className={`mt-8 rounded-r-xl border-l-[3px] px-6 py-5 ${dark ? "border-sky bg-white/[0.06]" : "border-origem bg-sky-soft/60"} ${className}`}
    >
      <p className={`text-[13px] font-bold ${dark ? "text-white" : "text-ink"}`}>{title}</p>
      <div className={`mt-1.5 text-sm leading-relaxed ${dark ? "text-white/75" : "text-ink/75"}`}>{children}</div>
    </aside>
  );
}

export function Note({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return <p className={`mt-5 text-xs leading-relaxed ${dark ? "text-white/50" : "text-mute"} ${className}`}>{children}</p>;
}

export function Card({ label, value, children, dark = false, className = "" }: { label?: string; value?: ReactNode; children?: ReactNode; dark?: boolean; className?: string }) {
  return (
    <article
      className={`rounded-2xl border p-6 transition-colors ${dark ? "border-white/10 bg-white/[0.04] hover:border-sky/50" : "border-line bg-white hover:border-sky"} ${className}`}
    >
      {label && <p className={`text-[11px] font-bold tracking-[0.14em] uppercase ${dark ? "text-sky" : "text-origem"}`}>{label}</p>}
      {value && <p className={`mt-3 font-display text-xl leading-snug font-medium md:text-[22px] ${dark ? "text-white" : "text-ink"}`}>{value}</p>}
      {children}
    </article>
  );
}

export function Pill({ children, dark = false, tone = "default" }: { children: ReactNode; dark?: boolean; tone?: "default" | "pending" | "done" }) {
  const styles =
    tone === "pending"
      ? "border-amber-400/60 bg-amber-50 text-amber-900"
      : tone === "done"
        ? "border-emerald-600/30 bg-emerald-50 text-emerald-800"
        : dark
          ? "border-white/20 text-white/80"
          : "border-line bg-white text-ink/80";
  return <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${styles}`}>{children}</span>;
}

export function ScriptTag({ id }: { id: string }) {
  return <span className="inline-flex rounded-md bg-navy px-1.5 py-0.5 font-display text-[10px] font-semibold text-white">{id}</span>;
}
