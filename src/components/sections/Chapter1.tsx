import Image from "next/image";
import { CheckCircle2, Compass } from "lucide-react";
import Screen from "@/components/ui/Screen";
import BrandSymbol, { BrandLogo } from "@/components/ui/BrandSymbol";
import { Callout, Card, Kicker, Lead, Note, Subhead } from "@/components/ui/primitives";
import CompetitorChart from "@/components/charts/CompetitorChart";
import TrafficDashboard from "@/components/charts/TrafficDashboard";
import CreativesChart from "@/components/charts/CreativesChart";
import Simulator from "@/components/interactive/Simulator";
import HeroVideo from "@/components/ui/HeroVideo";
import { assets, attributes, directions, opportunities, periodo, strengths } from "@/data/diagnostico";

export default function Chapter1() {
  return (
    <>
      {/* 01 — Abertura */}
      <Screen
        n={1}
        tone="dark"
        hideHeader
        background={<HeroVideo />}
      >
        <div className="flex min-h-[70vh] flex-col justify-between gap-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <BrandLogo variant="branco" className="w-[190px] md:w-[230px]" />
            <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-1.5 pr-4 pl-1.5 backdrop-blur">
              <span className="relative block h-9 w-9 overflow-hidden rounded-full bg-white">
                <Image src="/images/logo-decorar.jpeg" alt="Decorar Móveis" fill sizes="36px" className="scale-125 object-cover" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.18em] text-white/80 uppercase">Proposta para Decorar Móveis</span>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.3em] text-sky uppercase">01 / 32 · Visão geral</p>
            <h1 className="mt-6 font-display text-[44px] leading-[0.98] font-semibold tracking-[0.04em] sm:text-[64px] md:text-[86px]">
              DECORAR
              <span className="block font-light text-white/70">MÓVEIS</span>
            </h1>
            <p className="mt-6 max-w-[720px] font-display text-xl font-light text-white/90 md:text-2xl">Estratégia de Neuromarketing e Crescimento Comercial.</p>
            <p className="mt-8 max-w-[720px] font-serif text-[28px] leading-tight text-[#cfe1ef] italic md:text-[38px]">
              “Muito além de móveis, criamos ambientes para momentos especiais.”
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Novembro 2026 — Fevereiro 2027", "Juiz de Fora · MG", "Consultoria estratégica", "6 capítulos · 32 telas"].map((t) => (
              <span key={t} className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-white/85 backdrop-blur">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Screen>

      {/* 02 — Contexto */}
      <Screen n={2} tone="white">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Subhead>Uma empresa que já atrai clientes. Uma estratégia para crescer com mais inteligência.</Subhead>
            <Lead className="mt-5">
              A Decorar reúne produtos de médio-alto e alto padrão, experiência consultiva, reputação pública e uma operação de tráfego consolidada. O próximo passo é
              transformar essas forças em uma jornada comercial mais eficiente.
            </Lead>
            <div className="mt-6 flex flex-wrap gap-2">
              {strengths.map((s) => (
                <span key={s} className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3 py-1.5 text-xs font-semibold text-ink/80">
                  <CheckCircle2 size={13} className="text-origem" /> {s}
                </span>
              ))}
            </div>
          </div>
          <div className="relative hidden min-h-[260px] overflow-hidden rounded-3xl lg:block">
            <Image src="/images/sofa-1.jpg" alt="Sofá em ambiente de sala — produto Decorar" fill sizes="40vw" className="object-cover" />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {directions.map((d, i) => (
            <article key={d.title} className={`rounded-2xl p-6 ${i === 1 ? "bg-navy text-white" : "border border-line bg-paper"}`}>
              <Kicker dark={i === 1}>{d.tag}</Kicker>
              <p className="mt-3 font-display text-[22px] leading-snug font-medium">{d.title}</p>
              <p className={`mt-3 text-sm leading-relaxed ${i === 1 ? "text-white/70" : "text-mute"}`}>{d.text}</p>
            </article>
          ))}
        </div>

        <Callout title="Nossa atuação">
          Não propomos substituir o marketing existente. Vamos acrescentar inteligência comportamental, testes e mensuração ao que já apresenta resultados.
        </Callout>
      </Screen>

      {/* 03 — Diagnóstico */}
      <Screen n={3} tone="light">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
            <CheckCircle2 size={14} /> Etapa concluída pela consultoria
          </span>
          <span className="text-xs text-mute">Analisamos o cenário, identificamos oportunidades e definimos direcionamentos para os próximos 90 dias.</span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <Kicker>Ativos identificados</Kicker>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {assets.map((a, i) => (
                <div key={a.title} className="group rounded-xl border border-line bg-white p-4 transition hover:border-sky">
                  <p className="flex items-center gap-2 text-sm font-bold">
                    <span className="font-display text-xs text-sky">{String(i + 1).padStart(2, "0")}</span>
                    {a.title}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-mute">{a.evidence}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Kicker>Onde estão as oportunidades</Kicker>
            <ol className="mt-4 space-y-2">
              {opportunities.map((o, i) => (
                <li key={o.title} className="flex gap-4 rounded-xl bg-navy p-4 text-white">
                  <span className="font-display text-2xl font-light text-sky">{i + 1}</span>
                  <span>
                    <span className="block text-sm font-bold">{o.title}</span>
                    <span className="mt-0.5 block text-[13px] leading-relaxed text-white/70">{o.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <Callout title="Conclusão do diagnóstico">
          A maior oportunidade não está apenas na geração de mais contatos, mas em compreender e otimizar todo o caminho até a compra.
        </Callout>
      </Screen>

      {/* 04 — Inteligência competitiva */}
      <Screen n={4} tone="white">
        <Subhead>Uma reputação que pode trabalhar a favor da conversão.</Subhead>
        <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="text-[11px] font-bold tracking-[0.14em] text-sky uppercase">Decorar Móveis</p>
              <p className="mt-3 font-display text-6xl font-light">
                5,0<span className="ml-1 text-2xl text-sky">★</span>
              </p>
              <p className="mt-1 text-sm text-white/70">376 avaliações no levantamento</p>
            </div>
            <div className="rounded-2xl border border-line bg-paper p-5">
              <p className="font-display text-3xl font-medium">≈ 4,5×</p>
              <p className="mt-1 text-[13px] leading-relaxed text-mute">o volume de avaliações da unidade concorrente com mais avaliações entre as listadas (84).</p>
            </div>
          </div>
          <CompetitorChart />
        </div>
        <Callout title="Diferencial observado">
          A Decorar aparece com nota 5,0 e 376 avaliações no levantamento compartilhado — combinação favorável em relação aos concorrentes listados.
        </Callout>
        <Note>
          Dados fornecidos pelo cliente e capturas do diagnóstico, referentes ao momento do levantamento — não são atualizados em tempo real. Parma Centro e Parma
          Floriano aparecem com números idênticos: os volumes não foram somados e devem ser confirmados como fichas distintas. Não afirmamos liderança absoluta da
          cidade sem investigação completa.
        </Note>
      </Screen>

      {/* 05 — Oportunidade competitiva */}
      <Screen
        n={5}
        tone="dark"
        background={<BrandSymbol variant="branco" className="pointer-events-none absolute -right-24 -bottom-24 w-[520px] opacity-[0.04]" />}
      >
        <Subhead dark>Não competir somente por preço. Ser uma escolha desejada e confiável.</Subhead>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {attributes.map((a, i) => (
            <article key={a.label} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-sky/60 hover:bg-white/[0.07]">
              <div className="flex items-start justify-between">
                <Kicker dark>{a.label}</Kicker>
                <span className="font-display text-sm text-white/30">0{i + 1}</span>
              </div>
              <p className="mt-3 font-display text-2xl font-medium">{a.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{a.how}</p>
            </article>
          ))}
        </div>
        <Callout dark title="Direção estratégica">
          Transformar o que a Decorar já faz em motivos claros, demonstráveis e memoráveis para o consumidor escolher a marca.
        </Callout>
      </Screen>

      {/* 06 — Radiografia do tráfego */}
      <Screen n={6} tone="light">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <Subhead>O marketing já está gerando demanda.</Subhead>
          <span className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-mute">Relatório {periodo}</span>
        </div>
        <TrafficDashboard />
        <Note>
          35 anúncios analisados. R$ 5,28 do total não registraram resultado. O custo por conversa considera apenas a verba em anúncios de mensagens. O custo por visita
          ao perfil foi calculado a partir dos dados do relatório. As 619 conversas não são vendas.
        </Note>
      </Screen>

      {/* 07 — Criativos vencedores */}
      <Screen n={7} tone="white">
        <Subhead>Não vamos começar do zero.</Subhead>
        <div className="mt-8">
          <CreativesChart />
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <Card label="Preservar" value="Os criativos que já performam continuam ativos" />
          <Card label="Usar como referência" value="Cada novo teste é comparado aos vencedores atuais" />
          <Card label="Testar" value="Abordagens de desejo, autoridade, confiança e oferta" />
        </div>
        <Callout title="Decisão">
          Preservar os criativos que já performam e testar abordagens de desejo, autoridade, confiança e oferta. A qualidade comercial dos contatos deverá ser cruzada com
          os resultados dos anúncios.
        </Callout>
      </Screen>

      {/* 08 — Simulador */}
      <Screen n={8} tone="brand">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <Subhead dark>O mesmo volume de demanda. Novas possibilidades de conversão.</Subhead>
          <span className="inline-flex items-center gap-2 text-xs text-white/60">
            <Compass size={14} /> Ajuste os controles durante a conversa
          </span>
        </div>
        <Simulator />
        <Note dark>
          Exercício de sensibilidade, não previsão. As 619 conversas são tratadas hipoteticamente como oportunidades únicas, ainda sem confirmação de deduplicação e de
          fechamento, e supõe-se uma venda por conversa convertida. “Vendas equivalentes” é um valor matemático — não existe fração de venda real. O custo por venda
          considera apenas a mídia de mensagens, sem outros custos.
        </Note>
      </Screen>
    </>
  );
}
