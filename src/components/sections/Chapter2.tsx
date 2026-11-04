import Image from "next/image";
import Screen from "@/components/ui/Screen";
import { Callout, Kicker, Lead, Note, Subhead } from "@/components/ui/primitives";
import { DoubtExplorer, JourneyMap, PersonaTabs, PrinciplesGrid } from "@/components/interactive/Behavior";
import { brandPillars } from "@/data/comportamento";

export default function Chapter2() {
  return (
    <>
      {/* 09 — Perfis */}
      <Screen n={9} tone="white">
        <Subhead>Segmentamos pela situação de compra — não apenas por idade.</Subhead>
        <Lead className="mt-3 mb-8">Selecione um perfil para ver momento, motivação, insegurança, mensagem estratégica e o conteúdo que melhor o atende.</Lead>
        <PersonaTabs />
        <Callout title="Aplicação">
          Criativos, temas e ofertas terão abordagens diferentes conforme a necessidade, a categoria e o momento da decisão. Os perfis são hipóteses de trabalho, a
          validar com o histórico comercial — não são resultados de pesquisa demográfica.
        </Callout>
      </Screen>

      {/* 10 — Objeções */}
      <Screen n={10} tone="light">
        <Subhead>Em móveis de valor elevado, reduzir a incerteza pode ser tão importante quanto despertar desejo.</Subhead>
        <div className="mt-8">
          <DoubtExplorer />
        </div>
        <Callout title="Resposta estratégica">
          Criar conteúdos que orientem, demonstrem e comprovem. Comunicação e showroom devem fornecer evidências concretas, não apenas afirmações de qualidade.
        </Callout>
      </Screen>

      {/* 11 — Neuromarketing */}
      <Screen n={11} tone="dark">
        <Subhead dark>Psicologia do consumidor aplicada com responsabilidade: cada princípio vira uma ação e um indicador.</Subhead>
        <div className="mt-8">
          <PrinciplesGrid />
        </div>
        <Callout dark title="Método">
          Cada abordagem será uma hipótese com indicador. Não trataremos técnicas de persuasão como garantias de venda, nem faremos afirmações sobre “áreas do cérebro”
          — trabalhamos com comportamento observável.
        </Callout>
      </Screen>

      {/* 12 — Jornada */}
      <Screen n={12} tone="white">
        <Subhead>Descoberta → Consideração → Contato → Showroom → Decisão → Relacionamento.</Subhead>
        <Lead className="mt-3 mb-8">Clique em uma etapa para ver canais, ações e onde entram o conteúdo, o tráfego pago, a Priscila e a experiência presencial.</Lead>
        <JourneyMap />
        <Callout title="Objetivo">Reduzir perdas na jornada e fazer a mesma demanda sustentar mais oportunidades de venda.</Callout>
      </Screen>

      {/* 13 — Posicionamento */}
      <Screen n={13} tone="light">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-serif text-[34px] leading-[1.15] text-navy italic md:text-[44px]">“Sofisticação sem arrogância. Proximidade sem perder o valor percebido.”</p>
            <Lead className="mt-6">
              O fundador, a equipe e as histórias reais são parte da identidade. A lembrança da filha Liz se escondendo debaixo da mesa traduz o propósito: móveis fazem
              parte dos momentos importantes — da família, das conquistas e do dia a dia.
            </Lead>
            <div className="mt-6 rounded-2xl border border-line bg-white p-5">
              <Kicker>A história que sustenta a marca</Kicker>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                “Quando minha filha Liz ouvia o barulho da porta, ela corria para se esconder debaixo da mesa de jantar.” — base do roteiro <b>O01</b>, gravado pelo
                fundador.
              </p>
            </div>
          </div>
          <div className="relative min-h-[340px] overflow-hidden rounded-3xl">
            <Image src="/images/mesa-4.jpg" alt="Mesa de jantar redonda em ambiente de madeira" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-6 pt-20">
              <p className="font-serif text-2xl text-white italic">Móveis fazem parte das histórias que vivemos.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {brandPillars.map((b) => (
            <div key={b.label} className="rounded-2xl border border-line bg-white p-5">
              <Kicker>{b.label}</Kicker>
              <p className="mt-2 font-display text-lg font-medium">{b.value}</p>
            </div>
          ))}
        </div>
        <Note>Imagens pessoais do fundador e da família serão usadas somente com autorização.</Note>
      </Screen>
    </>
  );
}
