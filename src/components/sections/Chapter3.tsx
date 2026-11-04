import Image from "next/image";
import { AlertTriangle, ArrowRight } from "lucide-react";
import Screen from "@/components/ui/Screen";
import { Callout, Kicker, Lead, Note, Pill, Subhead } from "@/components/ui/primitives";
import { CampaignTimeline, Countdown, FrontEvolution, RemarketingPanel } from "@/components/interactive/Campaign";
import { cyberGoals, offers } from "@/data/campanha";

const categories = [
  { label: "Sofás", img: "/images/sofa-4.jpg" },
  { label: "Mesas de jantar", img: "/images/sala-jantar-premium.jpg" },
  { label: "Ambientes completos", img: "/images/mesa-2.jpg" },
];

export default function Chapter3() {
  return (
    <>
      {/* 14 — Black Friday */}
      <Screen n={14} tone="dark">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-navy-3 to-navy p-8 md:p-10">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-sky uppercase">Campanha especial · Novembro 2026</p>
              <p className="mt-6 font-display text-[52px] leading-[0.95] font-semibold tracking-tight md:text-[76px]">
                BLACK
                <br />
                FRIDAY
              </p>
              <p className="mt-2 font-display text-3xl font-light tracking-[0.3em] text-sky md:text-4xl">DECORAR</p>
              <p className="mt-6 font-serif text-2xl text-white/85 italic">Uma oportunidade especial para transformar sua casa.</p>
            </div>
            <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
              <Countdown />
              <div className="text-right text-xs text-white/60">
                <p>
                  <b className="text-white">27/11</b> Black Friday
                </p>
                <p>
                  <b className="text-white">30/11</b> Cyber Monday
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 gap-3">
            {categories.map((c) => (
              <div key={c.label} className="group relative min-h-[130px] overflow-hidden rounded-2xl">
                <Image src={c.img} alt={c.label} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/40 to-transparent" />
                <p className="absolute bottom-4 left-5 font-display text-xl font-medium tracking-wide">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
        <Callout dark title="Objetivo">
          Gerar oportunidades de compra e estimular visitas, preservando o posicionamento premium — elegante e comercial, sem cara de liquidação. Ofertas só serão
          divulgadas após validação de preços, margens e estoque.
        </Callout>
      </Screen>

      {/* 15 — Ofertas */}
      <Screen n={15} tone="white">
        <Subhead>Cada grupo de produtos cumpre uma função diferente na campanha.</Subhead>
        <div className="mt-8 grid gap-3 md:grid-cols-5">
          {offers.map((o, i) => (
            <article key={o.title} className={`flex flex-col rounded-2xl border p-5 ${i === 1 ? "border-navy bg-navy text-white" : "border-line bg-paper"}`}>
              <Kicker dark={i === 1}>
                0{i + 1} · {o.fn}
              </Kicker>
              <p className="mt-3 font-display text-lg leading-snug font-medium">{o.title}</p>
              <p className={`mt-2 text-xs font-semibold ${i === 1 ? "text-white/60" : "text-mute"}`}>{o.application}</p>
              <p className={`mt-3 flex-1 text-sm leading-relaxed ${i === 1 ? "text-white/80" : "text-ink/75"}`}>{o.goal}</p>
              <div className="mt-4">
                <Pill tone="pending">
                  <AlertTriangle size={11} /> Produtos e condições a definir
                </Pill>
              </div>
            </article>
          ))}
        </div>
        <Callout title="Cuidados">
          Sem preço de referência artificial, falso prazo, falsa escassez ou condição não aprovada. Percentuais de desconto, preços e estoque dependem exclusivamente da
          aprovação da Direção da Decorar.
        </Callout>
      </Screen>

      {/* 16 — Calendário */}
      <Screen n={16} tone="light">
        <Subhead>Uma campanha construída em etapas, não apenas no dia 27.</Subhead>
        <Lead className="mt-3 mb-8">Clique em cada fase para ver objetivo, conteúdos, tráfego, ações comerciais, entregáveis e responsáveis.</Lead>
        <CampaignTimeline />
      </Screen>

      {/* 17 — Execução por fase */}
      <Screen n={17} tone="white">
        <Subhead>Social media, vídeos, tráfego e comercial evoluindo juntos.</Subhead>
        <Lead className="mt-3 mb-8">Selecione uma frente para ver como ela evolui ao longo da campanha.</Lead>
        <FrontEvolution />
        <Callout title="Integração">
          A Priscila e a direção precisam conhecer previamente os produtos e benefícios divulgados. O marketing não pode prometer algo que o comercial não consegue
          atender.
        </Callout>
      </Screen>

      {/* 18 — Cyber Monday */}
      <Screen n={18} tone="brand">
        <Subhead dark>A Black Friday termina. Nossa estratégia de recuperação continua.</Subhead>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
          {["Black Friday · 27–29/11", "Cyber Monday · 30/11", "Pós-campanha · 01–07/12"].map((s, i) => (
            <span key={s} className="flex items-center gap-3">
              <span className={`rounded-full px-4 py-2 font-semibold ${i === 1 ? "bg-white text-navy" : "border border-white/25 text-white/80"}`}>{s}</span>
              {i < 2 && <ArrowRight size={16} className="text-white/50" />}
            </span>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cyberGoals.map((g, i) => (
            <article key={g.title} className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur">
              <p className="font-display text-4xl font-light text-sky">0{i + 1}</p>
              <Kicker dark className="mt-4">
                {g.label}
              </Kicker>
              <p className="mt-2 font-display text-xl font-medium">{g.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{g.text}</p>
            </article>
          ))}
        </div>
        <Callout dark title="Mensagem da campanha">
          “Ainda está escolhendo seu sofá ou sua mesa? Confira as oportunidades disponíveis nesta Cyber Monday Decorar.” A Cyber Monday é continuidade estratégica, não
          repetição da Black Friday. Validade e disponibilidade precisam ser confirmadas antes de divulgar.
        </Callout>
      </Screen>

      {/* 19 — Remarketing */}
      <Screen n={19} tone="light">
        <Subhead>Não precisamos ensinar a vendedora a vender. Precisamos trazer mais interessados de volta para ela.</Subhead>
        <div className="mt-8">
          <RemarketingPanel />
        </div>
        <Note>
          Foco em mídia, públicos, criativos e retorno ao contato comercial — o atendimento continua com a Priscila. Audiências personalizadas e dados comerciais serão
          utilizados somente quando tecnicamente disponíveis e em conformidade com as regras de privacidade (LGPD) e de publicidade das plataformas.
        </Note>
      </Screen>
    </>
  );
}
