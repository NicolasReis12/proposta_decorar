"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUp, ChevronDown, ChevronLeft, ChevronRight, Menu, PanelLeftClose, PanelLeftOpen, Printer, Search, X, Zap } from "lucide-react";
import { chapters, pad, screenId, screens, shortcuts, TOTAL_SCREENS } from "@/data/structure";
import CommandPalette from "./CommandPalette";
import BrandSymbol from "@/components/ui/BrandSymbol";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(1);
  const [drawer, setDrawer] = useState(false);
  // Menu lateral recolhido no desktop (preferência salva no navegador)
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      setCollapsed(localStorage.getItem("decorar:menu-recolhido") === "1");
    } catch {}
  }, []);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((c) => {
      try {
        localStorage.setItem("decorar:menu-recolhido", c ? "0" : "1");
      } catch {}
      return !c;
    });
  }, []);
  const [palette, setPalette] = useState(false);
  const [expanded, setExpanded] = useState<string | null>("c1");
  const manualExpand = useRef(false);

  const current = screens[active - 1];
  const chapter = chapters.find((c) => c.id === current.chapter)!;

  // Detecta a tela ativa conforme a rolagem
  useEffect(() => {
    let raf = 0;
    const els = () => Array.from(document.querySelectorAll<HTMLElement>("[data-screen]"));
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const line = window.innerHeight * 0.35;
        let n = 1;
        for (const el of els()) {
          if (el.getBoundingClientRect().top <= line) n = Number(el.dataset.screen);
        }
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) n = TOTAL_SCREENS;
        setActive(n);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Mantém o capítulo ativo expandido no menu
  useEffect(() => {
    if (!manualExpand.current) setExpanded(current.chapter);
  }, [current.chapter]);

  const goTo = useCallback((n: number) => {
    const target = Math.min(TOTAL_SCREENS, Math.max(1, n));
    manualExpand.current = false;
    document.getElementById(screenId(target))?.scrollIntoView({ behavior: "smooth", block: "start" });
    setDrawer(false);
    setPalette(false);
  }, []);

  // Navegação por teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((p) => !p);
        return;
      }
      const t = e.target as HTMLElement;
      const typing = t.closest("input, textarea, select, [contenteditable='true'], [role='slider'], [role='dialog']");
      if (typing) return;
      if (e.key === "/") {
        e.preventDefault();
        setPalette(true);
      } else if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goTo(active + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goTo(active - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(1);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(TOTAL_SCREENS);
      } else if ((e.key === "m" || e.key === "M") && !e.ctrlKey && !e.metaKey && !e.altKey) {
        if (window.innerWidth >= 1024) toggleCollapsed();
        else setDrawer((d) => !d);
      } else if (e.key === "Escape") {
        setDrawer(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo, toggleCollapsed]);

  // Impressão: abre todos os painéis recolhidos
  useEffect(() => {
    const before = () => document.body.classList.add("print-open");
    const after = () => document.body.classList.remove("print-open");
    window.addEventListener("beforeprint", before);
    window.addEventListener("afterprint", after);
    return () => {
      window.removeEventListener("beforeprint", before);
      window.removeEventListener("afterprint", after);
    };
  }, []);

  const progress = useMemo(() => (active / TOTAL_SCREENS) * 100, [active]);

  return (
    <>
      {/* Menu lateral */}
      <aside
        className={`no-print fixed inset-y-0 left-0 z-50 flex w-[284px] flex-col bg-navy text-white transition-transform duration-300 ${collapsed ? "lg:-translate-x-full" : "lg:translate-x-0"} ${
          drawer ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
        aria-label="Navegação da apresentação"
        inert={collapsed && !drawer ? true : undefined}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <button onClick={() => goTo(1)} className="block" aria-label="Voltar ao início">
            <Image src="/brand/caio-branco.png" alt="Caio Marketeiro Neuromarketing" width={1803} height={513} className="h-auto w-[168px]" priority />
          </button>
          <button className="rounded-md p-1.5 text-white/70 hover:bg-white/10 lg:hidden" onClick={() => setDrawer(false)} aria-label="Fechar menu">
            <X size={18} />
          </button>
          <button
            className="hidden rounded-md p-1.5 text-white/60 hover:bg-white/10 hover:text-white lg:block"
            onClick={toggleCollapsed}
            aria-label="Esconder menu lateral"
            title="Esconder menu (M)"
          >
            <PanelLeftClose size={18} />
          </button>
        </div>

        <div className="px-6 pt-5 pb-3">
          <p className="text-[10px] font-semibold tracking-[0.22em] text-sky uppercase">Decorar Móveis</p>
          <p className="mt-1 font-display text-[15px] leading-snug text-white/90">Estratégia de Neuromarketing · 90 dias</p>
        </div>

        <nav className="no-scrollbar flex-1 overflow-y-auto px-3 pb-4">
          {chapters.map((c) => {
            const isActive = c.id === current.chapter;
            const open = expanded === c.id;
            return (
              <div key={c.id} className="mb-1">
                <div className={`flex items-center rounded-lg ${isActive ? "bg-white/[0.07]" : ""}`}>
                  <button
                    onClick={() => goTo(c.range[0])}
                    className="flex flex-1 items-center gap-3 px-3 py-2.5 text-left"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className={`font-display text-xs ${isActive ? "text-sky" : "text-white/40"}`}>{c.num}</span>
                    <span className={`text-[13px] font-semibold ${isActive ? "text-white" : "text-white/70"}`}>{c.short}</span>
                  </button>
                  <button
                    onClick={() => {
                      manualExpand.current = true;
                      setExpanded(open ? null : c.id);
                    }}
                    className="mr-1 rounded-md p-2 text-white/50 hover:bg-white/10 hover:text-white"
                    aria-label={`${open ? "Recolher" : "Expandir"} telas de ${c.short}`}
                    aria-expanded={open}
                  >
                    <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {open && (
                  <ul className="mt-1 mb-2 ml-[22px] border-l border-white/10">
                    {screens
                      .filter((s) => s.chapter === c.id)
                      .map((s) => (
                        <li key={s.n}>
                          <button
                            onClick={() => goTo(s.n)}
                            className={`-ml-px flex w-full gap-2.5 border-l py-1.5 pr-2 pl-3 text-left text-[12px] leading-snug transition-colors ${
                              s.n === active ? "border-sky text-white" : "border-transparent text-white/55 hover:text-white"
                            }`}
                          >
                            <span className="w-5 shrink-0 tabular-nums text-white/35">{pad(s.n)}</span>
                            <span>{s.title}</span>
                          </button>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-5 py-4">
          <p className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] text-white/50 uppercase">
            <Zap size={11} /> Acesso rápido
          </p>
          <div className="flex flex-wrap gap-1.5">
            {shortcuts.map((s) => (
              <button
                key={s.n}
                onClick={() => goTo(s.n)}
                className={`rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  active === s.n ? "border-sky bg-sky text-navy" : "border-white/15 text-white/75 hover:border-sky hover:text-white"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {drawer && <div className="no-print fixed inset-0 z-40 bg-navy/60 backdrop-blur-sm lg:hidden" onClick={() => setDrawer(false)} />}

      {/* Barra superior */}
      <header className={`no-print fixed top-0 right-0 left-0 z-30 h-14 border-b border-line bg-white/90 backdrop-blur-md transition-[left] duration-300 ${collapsed ? "lg:left-0" : "lg:left-[284px]"}`}>
        <div className="flex h-full items-center gap-3 px-3 sm:px-5">
          <button className="rounded-md p-2 hover:bg-mist lg:hidden" onClick={() => setDrawer(true)} aria-label="Abrir menu">
            <Menu size={18} />
          </button>
          {collapsed && (
            <button
              className="hidden items-center gap-2 rounded-lg border border-line bg-white px-2.5 py-1.5 text-xs font-semibold text-ink hover:border-sky lg:flex"
              onClick={toggleCollapsed}
              aria-label="Mostrar menu lateral"
              title="Mostrar menu (M)"
            >
              <PanelLeftOpen size={16} /> Menu
            </button>
          )}
          {/* Logo sempre visível quando o menu lateral não está na tela */}
          <button
            onClick={() => goTo(1)}
            className={`shrink-0 items-center gap-3 border-r border-line pr-3 ${collapsed ? "flex" : "flex lg:hidden"}`}
            aria-label="Caio Marketeiro — voltar ao início"
            title="Voltar ao início"
          >
            <BrandSymbol variant="gradiente" className="h-7 sm:hidden" />
            <Image src="/brand/caio-gradiente.png" alt="Caio Marketeiro Neuromarketing" width={1803} height={513} className="hidden h-8 w-auto sm:block" />
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-semibold tracking-[0.18em] text-origem uppercase">
              Capítulo {chapter.num} · {chapter.short}
            </p>
            <p className="truncate font-display text-[13px] text-ink sm:text-sm">{current.title}</p>
          </div>

          <button
            onClick={() => setPalette(true)}
            className="hidden items-center gap-2 rounded-lg border border-line bg-paper px-3 py-1.5 text-xs text-mute hover:border-sky md:flex"
          >
            <Search size={14} /> Ir para tela…
            <kbd className="rounded border border-line bg-white px-1.5 text-[10px]">Ctrl K</kbd>
          </button>
          <button onClick={() => setPalette(true)} className="rounded-md p-2 hover:bg-mist md:hidden" aria-label="Buscar tela">
            <Search size={17} />
          </button>
          <button onClick={() => window.print()} className="hidden rounded-md p-2 text-mute hover:bg-mist sm:block" aria-label="Imprimir ou salvar em PDF" title="Imprimir / salvar PDF">
            <Printer size={17} />
          </button>

          <div className="flex items-center gap-1 rounded-lg border border-line bg-white p-0.5">
            <button onClick={() => goTo(active - 1)} disabled={active === 1} className="rounded-md p-1.5 hover:bg-mist disabled:opacity-30" aria-label="Tela anterior">
              <ChevronLeft size={17} />
            </button>
            <span className="min-w-[52px] text-center font-display text-xs tabular-nums">
              {pad(active)} <span className="text-mute">/ {TOTAL_SCREENS}</span>
            </span>
            <button onClick={() => goTo(active + 1)} disabled={active === TOTAL_SCREENS} className="rounded-md p-1.5 hover:bg-mist disabled:opacity-30" aria-label="Próxima tela">
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Progresso por capítulo */}
        <div className="absolute right-0 bottom-0 left-0 flex h-[3px] gap-[2px]">
          {chapters.map((c) => {
            const size = c.range[1] - c.range[0] + 1;
            const done = Math.min(size, Math.max(0, active - c.range[0] + 1));
            return (
              <button key={c.id} onClick={() => goTo(c.range[0])} className="relative h-full bg-mist" style={{ flex: size }} aria-label={`Ir para o capítulo ${c.num}`}>
                <span className="absolute inset-y-0 left-0 bg-sky transition-all duration-300" style={{ width: `${(done / size) * 100}%` }} />
              </button>
            );
          })}
        </div>
        <span className="sr-only" aria-live="polite">{`Tela ${active} de ${TOTAL_SCREENS}: ${current.title}. Progresso ${Math.round(progress)}%.`}</span>
      </header>

      <main className={`print-shift pt-14 transition-[margin] duration-300 ${collapsed ? "lg:ml-0" : "lg:ml-[284px]"}`}>{children}</main>

      {active > 2 && (
        <button
          onClick={() => goTo(1)}
          className="no-print fixed right-5 bottom-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow-xl transition hover:bg-origem"
          aria-label="Voltar ao início"
          title="Voltar ao início"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {palette && <CommandPalette onClose={() => setPalette(false)} onGo={goTo} active={active} />}
    </>
  );
}
