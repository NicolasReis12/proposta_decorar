// Capítulo 03 — Black Friday, Cyber Monday e remarketing.
// Nenhum desconto, preço ou estoque é informado aqui: dependem de aprovação da Direção.

export const BLACK_FRIDAY = "2026-11-27T00:00:00-03:00";
export const CYBER_MONDAY = "2026-11-30T00:00:00-03:00";

export const offers = [
  { fn: "Atração", title: "Sofás de atração", application: "Sofá selecionado", goal: "Atrair compradores para a conversa e para o showroom." },
  { fn: "Estratégica", title: "Mesas estratégicas", application: "Mesa ou conjunto de jantar", goal: "Faturamento prioritário da campanha." },
  { fn: "Composição", title: "Composição de ambientes", application: "Complementos ao ambiente", goal: "Estimular a venda complementar." },
  { fn: "Benefício", title: "Benefícios especiais", application: "Pagamento ou serviço viável", goal: "Reforçar o valor percebido sem depender só de desconto." },
  { fn: "Recuperação", title: "Recuperação de interessados", application: "Produtos disponíveis", goal: "Retomar orçamentos que ficaram em aberto." },
];

export interface Phase {
  id: string;
  dates: string;
  start: string; // ISO date
  end: string;
  name: string;
  goal: string;
  content: string;
  traffic: string;
  commercial: string;
  deliverables: string;
  owners: string;
}

export const phases: Phase[] = [
  {
    id: "prep",
    dates: "04–08 NOV",
    start: "2026-11-04",
    end: "2026-11-08",
    name: "Preparação",
    goal: "Definir o que será ofertado e produzir a base de conteúdo da campanha.",
    content: "Gravação no showroom em 05/11: sofás, mesas, detalhes, fundador e demonstrações.",
    traffic: "Manter os criativos vencedores ativos e preparar os públicos de remarketing.",
    commercial: "Direção define produtos participantes, estoque, preços, condições, limites e logística.",
    deliverables: "Lista de produtos aprovada · roteiros T01–T06 validados · material bruto gravado.",
    owners: "Direção · Consultoria · Equipe de produção · Gestor de tráfego",
  },
  {
    id: "aquec",
    dates: "09–15 NOV",
    start: "2026-11-09",
    end: "2026-11-15",
    name: "Aquecimento",
    goal: "Despertar desejo e reforçar a reputação antes de qualquer oferta.",
    content: "Desejo, fundador e showroom — O01, O04, O05 e peças de ambientes.",
    traffic: "Manter vencedores; captar interessados e formar audiências de engajamento.",
    commercial: "Priscila conhece previamente os produtos e benefícios que serão divulgados.",
    deliverables: "Publicações de aquecimento no ar · anúncios de reputação ativos.",
    owners: "Equipe de conteúdo · Gestor de tráfego · Consultoria",
  },
  {
    id: "pre",
    dates: "16–22 NOV",
    start: "2026-11-16",
    end: "2026-11-22",
    name: "Pré-Black",
    goal: "Ajudar o cliente a decidir antes do dia, reduzindo dúvidas.",
    content: "Produtos, comparativos, dúvidas e prova social — T03, T04, T05 e O03.",
    traffic: "Campanhas de consideração e remarketing para quem engajou.",
    commercial: "Registrar interessados e as dúvidas mais recorrentes.",
    deliverables: "Peças de consideração · lista de interessados · mapa de objeções.",
    owners: "Equipe de conteúdo · Gestor de tráfego · Priscila",
  },
  {
    id: "contagem",
    dates: "23–26 NOV",
    start: "2026-11-23",
    end: "2026-11-26",
    name: "Contagem regressiva",
    goal: "Revisar tudo e deixar a conversão pronta.",
    content: "Anúncio da data e prévia das categorias — apenas condições aprovadas.",
    traffic: "Revisão de criativos, orçamento e públicos de remarketing.",
    commercial: "Revisão comercial final: condições, estoque e prazos de entrega.",
    deliverables: "T01 e T02 finalizados com as condições aprovadas.",
    owners: "Direção · Consultoria · Gestor de tráfego",
  },
  {
    id: "black",
    dates: "27–29 NOV",
    start: "2026-11-27",
    end: "2026-11-29",
    name: "Black Friday",
    goal: "Converter o interesse acumulado em visitas, orçamentos e vendas.",
    content: "Ofertas, demonstrações e Stories ao longo do fim de semana.",
    traffic: "Campanhas de conversão com monitoramento diário.",
    commercial: "Atendimento e acompanhamento; registro da origem de cada contato.",
    deliverables: "Acompanhamento diário de conversas e orçamentos.",
    owners: "Gestor de tráfego · Priscila · Equipe de conteúdo",
  },
  {
    id: "cyber",
    dates: "30 NOV",
    start: "2026-11-30",
    end: "2026-11-30",
    name: "Cyber Monday",
    goal: "Abrir a segunda janela de conversão para quem ainda está decidindo.",
    content: "Condições disponíveis e vídeo T06.",
    traffic: "Remarketing para interessados e orçamentos pendentes.",
    commercial: "Retomar os orçamentos que ficaram em aberto.",
    deliverables: "Campanha T06 no ar com as condições válidas na data.",
    owners: "Gestor de tráfego · Priscila · Direção",
  },
  {
    id: "pos",
    dates: "01–07 DEZ",
    start: "2026-12-01",
    end: "2026-12-07",
    name: "Pós-campanha",
    goal: "Recuperar oportunidades e transformar a campanha em aprendizado.",
    content: "Entregas, bastidores e experiência — O02 e O04.",
    traffic: "Remarketing de orçamentos pendentes e análise dos anúncios.",
    commercial: "Lista de orçamentos pendentes e vendas da campanha informadas.",
    deliverables: "Relatório da campanha: conversas, orçamentos e vendas informadas.",
    owners: "Consultoria · Gestor de tráfego · Gestão",
  },
];

export const fronts = [
  {
    key: "social",
    label: "Social media",
    steps: [
      "Desejo, fundador, showroom",
      "Produtos, avaliações, orientações",
      "Ofertas, demonstrações, Stories",
      "Condições disponíveis, vídeos",
      "Entregas, bastidores e experiência",
    ],
  },
  {
    key: "videos",
    label: "Vídeos",
    steps: [
      "O01 · O04 · O05 — marca e familiaridade",
      "T03 · T04 · T05 · O03 — confiança e consideração",
      "T01 · T02 — conversão",
      "T06 — recuperação",
      "O02 · O06 — prova social e engajamento",
    ],
  },
  {
    key: "trafego",
    label: "Tráfego pago",
    steps: [
      "Manter vencedores; captar interessados",
      "Consideração e remarketing",
      "Conversão e monitoramento",
      "Recuperação de oportunidades",
      "Orçamentos pendentes e análise",
    ],
  },
  {
    key: "comercial",
    label: "Acompanhamento comercial",
    steps: [
      "Conhecer produtos e benefícios divulgados",
      "Registrar interessados e dúvidas",
      "Atendimento, acompanhamento e origem do contato",
      "Retomar orçamentos em aberto",
      "Consolidar vendas e pendências",
    ],
  },
];

export const frontPhases = ["Aquecimento", "Pré-Black", "Black Friday", "Cyber Monday", "Pós-Black"];

export const cyberGoals = [
  { label: "Orçamentos pendentes", title: "Recuperar orçamentos", text: "Reativar decisões não concluídas durante a Black Friday." },
  { label: "Interessados", title: "Reativar interessados", text: "Trazer de volta quem demonstrou intenção e ainda não chamou." },
  { label: "Complementares", title: "Oportunidades complementares", text: "Apresentar oportunidades válidas na data, inclusive para compor ambientes." },
];

export const audiences = [
  {
    id: "p1",
    label: "Público 1",
    name: "Engajamento digital",
    who: "Pessoas que interagiram com conteúdos e anúncios, mas ainda não chamaram.",
    piece: "Vídeos de reputação e produto (T03, O01, O02).",
    goal: "Primeiro contato com a Priscila.",
    source: "Audiências de engajamento do Instagram e de visualização de vídeo.",
  },
  {
    id: "p2",
    label: "Público 2",
    name: "Contatos comerciais",
    who: "Pessoas que chamaram e não avançaram, cujos dados podem ser usados legitimamente para audiências.",
    piece: "Demonstração e diferenciais (T04, T05).",
    goal: "Retomar o interesse e voltar à conversa.",
    source: "Audiências de quem enviou mensagem; listas comerciais somente com base legal e consentimento.",
  },
  {
    id: "p3",
    label: "Público 3",
    name: "Orçamentos pendentes",
    who: "Interessados que receberam orçamento e ainda não fecharam.",
    piece: "Produto de interesse e condições vigentes; na Cyber Monday, T06.",
    goal: "Recuperar a oportunidade.",
    source: "Somente quando tecnicamente disponível e em conformidade com as regras de privacidade e de publicidade.",
  },
];
