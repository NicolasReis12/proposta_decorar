import { CalendarCheck } from "lucide-react";
import Screen from "@/components/ui/Screen";
import { Callout, Lead, Note, Subhead } from "@/components/ui/primitives";
import { CaptureChecklist, PillarExplorer, VideoSlots } from "@/components/interactive/Content";
import ScriptLibrary from "@/components/interactive/ScriptLibrary";
import { organicScripts, rhythm, trafficScripts } from "@/data/conteudo";

export default function Chapter4() {
  return (
    <>
      {/* 20 — Social media */}
      <Screen n={20} tone="white">
        <Subhead>Instagram não é apenas catálogo. É construção de desejo e preferência.</Subhead>
        <div className="mt-8">
          <PillarExplorer />
        </div>
        <div className="mt-8 rounded-2xl bg-paper p-6">
          <p className="flex items-center gap-2 text-sm font-bold">
            <CalendarCheck size={16} className="text-origem" /> Proposta editorial inicial
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {rhythm.map((r) => (
              <span key={r} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink/80">
                {r}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-mute">Frequência proposta — não é obrigação contratual. Validar capacidade da equipe e escopo de produção.</p>
        </div>
      </Screen>

      {/* 21 — Vídeos para tráfego */}
      <Screen n={21} tone="light">
        <Lead className="mb-8">
          Peças de conversão, confiança, consideração, composição de ambientes e remarketing. Selecione um vídeo para abrir o roteiro integral; use{" "}
          <b className="text-ink">Modo leitura</b> durante a gravação.
        </Lead>
        <ScriptLibrary scripts={trafficScripts} note="T01, T02 e T06 dependem da validação das ofertas. Ajustar falas às condições efetivamente disponíveis." />
      </Screen>

      {/* 22 — Vídeos orgânicos */}
      <Screen n={22} tone="white">
        <Lead className="mb-8">Conteúdos feitos para criar familiaridade, autoridade e desejo mesmo quando a pessoa ainda não está pronta para comprar.</Lead>
        <ScriptLibrary
          scripts={organicScripts}
          note="A naturalidade das pessoas em cena deve prevalecer sobre a leitura literal dos roteiros. Captações com clientes exigem autorização apropriada."
        />
      </Screen>

      {/* 23 — Três vídeos */}
      <Screen n={23} tone="dark">
        <Subhead dark>Três materiais selecionados, prontos para serem exibidos na reunião.</Subhead>
        <Lead dark className="mt-3 mb-10">
          Os vídeos são carregados da pasta <code className="text-sky">public/videos</code>. Se um arquivo ainda não estiver lá, o espaço aparece reservado — sem quebrar a
          apresentação.
        </Lead>
        <div className="mx-auto w-full max-w-[920px]">
          <VideoSlots />
        </div>
        <Note dark>
          Para substituir: salve o arquivo como video-01.mp4, video-02.mp4 ou video-03.mp4 em public/videos. A prévia local serve apenas para testar um arquivo no
          navegador e não é incorporada ao site.
        </Note>
      </Screen>

      {/* 24 — Captação */}
      <Screen n={24} tone="light">
        <Subhead>Transformar uma visita ao showroom em uma biblioteca de conteúdo.</Subhead>
        <Lead className="mt-3 mb-8">Marque os itens durante a gravação — o progresso fica salvo neste navegador.</Lead>
        <CaptureChecklist />
        <Callout title="Ordem sugerida">
          Priorizar T01, T02, T03, T06 e as cenas comerciais; em seguida, os conteúdos institucionais. Falas com preços e descontos somente após aprovação.
        </Callout>
      </Screen>
    </>
  );
}
