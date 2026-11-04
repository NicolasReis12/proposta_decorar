import Image from "next/image";
import { ArrowRight, Cake } from "lucide-react";
import Screen from "@/components/ui/Screen";
import BrandSymbol, { BrandLogo } from "@/components/ui/BrandSymbol";
import { Callout, Kicker, Lead, Note, Subhead } from "@/components/ui/primitives";
import { Homework, MeetingDecisions, Roadmap } from "@/components/interactive/Execution";
import { december, january, optimization, responsibilities, showroomSteps, trafficFunctions } from "@/data/execucao";

export function Chapter5() {
  return (
    <>
      {/* 25 — Tráfego */}
      <Screen n={25} tone="white">
        <Subhead>Fortalecer uma operação que já funciona — sem desligar campanhas vencedoras.</Subhead>
        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {trafficFunctions.map((f, i) => (
            <article key={f.front} className="relative flex flex-col rounded-2xl border border-line bg-paper p-5" style={{ marginTop: `${i * 10}px` }}>
              <p className="font-display text-3xl font-light text-origem">0{i + 1}</p>
              <p className="mt-2 font-display text-xl font-medium">{f.front}</p>
              <dl className="mt-4 flex-1 space-y-3 text-[13px]">
                <div>
                  <dt className="text-[10px] font-bold tracking-wider text-mute uppercase">Conteúdo</dt>
                  <dd className="text-ink/85">{f.content}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold tracking-wider text-mute uppercase">Criativos</dt>
                  <dd className="text-ink/85">{f.creatives}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold tracking-wider text-mute uppercase">Indicador</dt>
                  <dd className="font-semibold text-origem">{f.indicator}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-2xl bg-navy px-6 py-4 text-white">
          <span className="text-[11px] font-bold tracking-[0.14em] text-sky uppercase">{optimization.front}</span>
          <span className="text-sm text-white/80">{optimization.content}</span>
          <ArrowRight size={14} className="text-white/40" />
          <span className="text-sm font-semibold">{optimization.indicator}</span>
        </div>
        <Callout title="Método">
          Manter a referência dos anúncios atuais. Testar novas peças e comparar não só o custo por conversa, mas também o avanço comercial sempre que houver dados.
        </Callout>
      </Screen>

      {/* 26 — Showroom */}
      <Screen
        n={26}
        tone="dark"
        background={
          <>
            <Image src="/images/mesa-2.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/90 to-navy" />
          </>
        }
      >
        <Subhead dark>O consumidor precisa reconhecer na loja a experiência que viu na comunicação.</Subhead>
        <ol className="mt-10 grid gap-3 md:grid-cols-5">
          {showroomSteps.map((s, i) => (
            <li key={s.verb} className="relative rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur">
              <p className="font-display text-xs text-sky">0{i + 1}</p>
              <p className="mt-1 font-display text-2xl font-semibold tracking-wide uppercase">{s.verb}</p>
              <p className="mt-2 text-sm font-semibold text-white/90">{s.value}</p>
              <p className="mt-4 text-[10px] font-bold tracking-wider text-sky uppercase">Reduz</p>
              <p className="mt-1 text-[13px] leading-relaxed text-white/65">{s.reduces}</p>
              {i < 4 && <ArrowRight size={14} className="absolute top-1/2 -right-[11px] z-10 hidden -translate-y-1/2 text-white/40 md:block" />}
            </li>
          ))}
        </ol>
        <Callout dark title="Papel da Priscila">
          A estratégia apoia a venda e o retorno de interessados sem tentar substituir a qualidade do atendimento comercial já existente. A proposta é potencializar
          diferenciais que a Decorar já tem e integrar melhor marketing e experiência presencial.
        </Callout>
      </Screen>

      {/* 27 — Dezembro */}
      <Screen n={27} tone="light">
        <Subhead>Transformar a Black Friday em aprendizado para o restante do ano.</Subhead>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {december.map((d, i) => (
            <article key={d.title} className="rounded-2xl border border-line bg-white p-5">
              <p className="font-display text-sm text-sky">0{i + 1}</p>
              <p className="mt-1 font-display text-lg font-medium">{d.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-mute">{d.text}</p>
            </article>
          ))}
        </div>
        <Callout title="Resultado buscado">
          Uma operação mais informada sobre o que acontece depois da conversa e menos dependente de datas promocionais.
        </Callout>
      </Screen>

      {/* 28 — Janeiro */}
      <Screen n={28} tone="white">
        <Subhead>Ganhar consistência, otimizar o que funcionou e fortalecer a marca.</Subhead>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {january.map((j, i) => (
            <article key={j.label} className={`rounded-2xl p-6 ${i === 0 ? "bg-navy text-white" : "border border-line bg-paper"}`}>
              <Kicker dark={i === 0}>{j.label}</Kicker>
              <p className="mt-2 font-display text-xl leading-snug font-medium">{j.value}</p>
              <ul className="mt-4 space-y-1.5">
                {j.items.map((it) => (
                  <li key={it} className={`flex gap-2 text-sm ${i === 0 ? "text-white/75" : "text-ink/75"}`}>
                    <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-sky" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-4 rounded-2xl border border-origem/30 bg-sky-soft/50 p-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-origem text-white">
            <Cake size={20} />
          </span>
          <div>
            <p className="text-sm font-bold">Próximo marco · Aniversário da Decorar em 6 de fevereiro</p>
            <p className="text-sm text-ink/70">Planejar com antecedência: o ciclo de 90 dias deverá deixar essa campanha encaminhada.</p>
          </div>
        </div>
      </Screen>

      {/* 29 — Plano 90 dias */}
      <Screen n={29} tone="light">
        <Subhead>Uma estratégia com continuidade, não um conjunto de ações isoladas.</Subhead>
        <div className="mt-8">
          <Roadmap />
        </div>
        <Callout title="Acompanhamento">
          Revisões semanais de prioridades e acompanhamento mensal dos indicadores; avaliação consolidada ao final do período, no início de fevereiro.
        </Callout>
      </Screen>
    </>
  );
}

export function Chapter6() {
  return (
    <>
      {/* 30 — Dever de casa */}
      <Screen n={30} tone="white">
        <Subhead>Não vamos inventar metas. Vamos construí-las sobre resultados reais.</Subhead>
        <Lead className="mt-3 mb-8">
          Responsabilidade da gestão da Decorar. Marque as informações já disponíveis — o checklist fica salvo neste navegador e pode ser copiado para enviar à equipe.
        </Lead>
        <Homework />
        <Callout title="Como as metas serão definidas">
          As metas comerciais serão definidas somente após o recebimento dos dados reais. Prioridade imediata: a direção deve definir produtos participantes da Black
          Friday, estoque, preços, condições e capacidade de entrega antes de aprovar anúncios.
        </Callout>
      </Screen>

      {/* 31 — Responsabilidades */}
      <Screen n={31} tone="light">
        <div className="overflow-x-auto rounded-2xl border border-line bg-white">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-mist text-left text-[11px] tracking-wider text-mute uppercase">
                <th className="px-5 py-3">Frente</th>
                <th className="px-5 py-3">Responsável proposto</th>
                <th className="px-5 py-3">Atribuições</th>
              </tr>
            </thead>
            <tbody>
              {responsibilities.map((r) => (
                <tr key={r.front} className="border-t border-line">
                  <td className="px-5 py-3.5 font-semibold">{r.front}</td>
                  <td className="px-5 py-3.5">
                    <span className="rounded-full bg-navy px-2.5 py-1 text-xs font-semibold text-white">{r.owner}</span>
                  </td>
                  <td className="px-5 py-3.5 text-ink/75">{r.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>Atribuições apresentadas como proposta, sujeitas a validação operacional.</Note>
        <div className="mt-8 rounded-2xl border border-line bg-white p-6">
          <p className="text-sm font-bold">Decisões desta reunião</p>
          <p className="mt-1 mb-4 text-xs text-mute">Marque conforme forem tomadas.</p>
          <MeetingDecisions />
        </div>
      </Screen>

      {/* 32 — Encerramento */}
      <Screen
        n={32}
        tone="dark"
        background={
          <>
            <video
              src="/videos/video-lp1.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
              className="absolute inset-x-0 top-[7.5%] h-[85%] w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
            <BrandSymbol variant="branco" className="pointer-events-none absolute -right-32 -bottom-40 w-[620px] opacity-[0.05]" />
          </>
        }
      >
        <div className="flex min-h-[60vh] flex-col justify-center">
          <p className="text-[11px] font-bold tracking-[0.2em] text-sky uppercase">Próximos 90 dias</p>
          <p className="mt-6 max-w-[920px] font-display text-[32px] leading-[1.15] font-light md:text-[52px]">
            A Decorar já possui motivos para ser escolhida.{" "}
            <span className="text-gradient font-normal">Agora vamos transformar esses motivos em uma vantagem cada vez mais evidente.</span>
          </p>
          <p className="mt-8 max-w-[760px] text-lg leading-relaxed text-white/75">
            Nos próximos 90 dias, vamos conectar comunicação, reputação, comportamento do consumidor, experiência e vendas para fortalecer o que já funciona e desenvolver
            novas oportunidades comerciais.
          </p>
          <p className="mt-12 font-serif text-3xl text-[#cfe1ef] italic md:text-4xl">“Muito além de móveis, criamos ambientes para momentos especiais.”</p>
          <div className="mt-14 flex flex-wrap items-center gap-6">
            <BrandLogo variant="branco" className="w-[200px]" />
            <span className="h-8 w-px bg-white/20" />
            <span className="font-display text-sm font-semibold tracking-[0.3em] text-white/80">
              DECORAR <span className="font-light">MÓVEIS</span>
            </span>
          </div>
        </div>
      </Screen>
    </>
  );
}
