import { chapters, pad, screenId, screens, TOTAL_SCREENS } from "@/data/structure";

type Tone = "light" | "white" | "dark" | "brand";

const tones: Record<Tone, string> = {
  light: "bg-paper text-ink",
  white: "bg-white text-ink",
  dark: "bg-navy text-white grain",
  brand: "brand-gradient text-white grain",
};

export default function Screen({
  n,
  tone = "white",
  children,
  hideHeader = false,
  background,
  className = "",
}: {
  n: number;
  tone?: Tone;
  children: React.ReactNode;
  hideHeader?: boolean;
  background?: React.ReactNode;
  className?: string;
}) {
  const s = screens[n - 1];
  const ch = chapters.find((c) => c.id === s.chapter)!;
  const isChapterStart = ch.range[0] === n && n !== 1;
  const dark = tone === "dark" || tone === "brand";

  return (
    <section id={screenId(n)} data-screen={n} aria-labelledby={`${screenId(n)}-title`} className={`screen relative overflow-hidden ${tones[tone]} ${className}`}>
      {background}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-56px)] max-w-[1180px] flex-col px-5 py-14 sm:px-8 md:px-12 lg:py-20">
        {isChapterStart && (
          <div className={`mb-10 flex items-center gap-4 ${dark ? "text-white/60" : "text-mute"}`}>
            <span className={`font-display text-5xl font-light md:text-6xl ${dark ? "text-sky" : "text-origem"}`}>{ch.num}</span>
            <span className={`h-px flex-1 ${dark ? "bg-white/15" : "bg-line"}`} />
            <span className="max-w-[60%] text-right text-[11px] font-semibold tracking-[0.2em] uppercase">Capítulo {ch.num} · {ch.title}</span>
          </div>
        )}
        {!hideHeader && (
          <header className="mb-8 md:mb-10">
            <div className="flex items-center justify-between gap-4">
              <span className={`text-[11px] font-bold tracking-[0.2em] uppercase ${dark ? "text-sky" : "text-origem"}`}>{s.eyebrow}</span>
              <span className={`shrink-0 font-display text-xs whitespace-nowrap tabular-nums ${dark ? "text-white/45" : "text-mute"}`}>
                {pad(n)} / {TOTAL_SCREENS}
              </span>
            </div>
            <h2 id={`${screenId(n)}-title`} className="mt-4 max-w-[900px] font-display text-[30px] leading-[1.1] font-light tracking-[-0.02em] sm:text-[38px] md:text-[46px]">
              {s.title}
            </h2>
          </header>
        )}
        {hideHeader && <h2 id={`${screenId(n)}-title`} className="sr-only">{s.title}</h2>}
        <div className="flex-1">{children}</div>
        <footer className={`mt-14 flex flex-wrap justify-between gap-2 border-t pt-4 text-[10px] font-semibold tracking-[0.16em] uppercase ${dark ? "border-white/10 text-white/40" : "border-line text-mute/80"}`}>
          <span>Decorar Móveis · Estratégia 90 dias</span>
          <span>Caio Marketeiro · Neuromarketing</span>
        </footer>
      </div>
    </section>
  );
}
