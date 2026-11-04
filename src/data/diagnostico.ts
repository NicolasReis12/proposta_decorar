// Capítulo 01 — dados factuais extraídos da apresentação original.
// NÃO alterar os números históricos sem nova fonte.

export const periodo = "01/09/2026 a 03/11/2026";

export const competitors = [
  { name: "Decorar Móveis", rating: 5.0, reviews: 376, highlight: true },
  { name: "Parma — Centro", rating: 4.6, reviews: 84 },
  { name: "Parma — Floriano", rating: 4.6, reviews: 84 },
  { name: "Parma — outra unidade", rating: 4.1, reviews: 15 },
  { name: "Parma — Outlet", rating: 3.2, reviews: 10 },
  { name: "Dubambu", rating: 4.5, reviews: 44 },
  { name: "Casa Moderna", rating: 4.1, reviews: 26 },
] as const;

export const traffic = {
  investimentoTotal: 8291.94,
  conversas: 619,
  visitasPerfil: 5268,
  custoPorConversa: 10.55,
  midiaMensagens: 6528.58,
  midiaVisitas: 1758.08,
  semResultado: 5.28,
  anuncios: 35,
};

export const creatives = [
  { name: "Sofá Brasil NOVO", conversas: 132, custo: 10.59 },
  { name: "ADI04 — Esquenta Black", conversas: 117, custo: 7.8 },
  { name: "Carrossel Bélgica", conversas: 49, custo: 5.21 },
  { name: "Festival de Sofás 03", conversas: 40, custo: 15.2 },
  { name: "Festival de Sofás 02", conversas: 38, custo: 10.92 },
  { name: "Sofá Alemanha 2", conversas: 35, custo: 10.92 },
  { name: "Vídeo Mesas", conversas: 32, custo: 5.27 },
];

export const directions = [
  {
    tag: "01 · Marca",
    title: "Fortalecer a marca",
    text: "Construir desejo e lembrança a partir do que a Decorar já é: curadoria, reputação, fundador e acolhimento.",
  },
  {
    tag: "02 · Demanda e conversão",
    title: "Melhorar a eficiência comercial",
    text: "Preservar e qualificar a aquisição que já funciona e reduzir perdas entre o primeiro contato e a compra.",
  },
  {
    tag: "03 · Integração",
    title: "Integrar marketing, comportamento e experiência",
    text: "Conectar anúncios, conteúdo, atendimento e showroom em uma única jornada, com hipóteses e indicadores.",
  },
];

export const strengths = [
  "Produtos de médio-alto e alto padrão",
  "Experiência consultiva",
  "Reputação pública",
  "Operação de tráfego consolidada",
];

export const assets = [
  { title: "Reputação digital", evidence: "Nota 5,0 com 376 avaliações no levantamento do Google." },
  { title: "Atendimento consultivo", evidence: "Orientação na escolha, conduzida pela Priscila e pela equipe comercial." },
  { title: "Hospitalidade", evidence: "Recepção, café e acolhimento no showroom como parte da experiência." },
  { title: "Participação do fundador", evidence: "História autêntica — a mesa e a filha Liz — e disponibilidade para vídeos." },
  { title: "Produtos estratégicos", evidence: "Sofás e mesas de jantar concentram a prioridade comercial." },
  { title: "Tráfego consolidado", evidence: "619 conversas iniciadas no período analisado, com criativos que já performam." },
  { title: "Humanização e storytelling", evidence: "Equipe, bastidores, entregas e clientes reais ainda pouco explorados." },
];

export const opportunities = [
  { title: "Mensurar o fechamento", text: "O tráfego gera centenas de conversas; o fechamento comercial ainda precisa ser mensurado." },
  { title: "Conectar a comunicação", text: "A comunicação pode conectar melhor desejo, confiança, showroom e vendas." },
  { title: "Reputação como argumento", text: "Transformar as avaliações em prova concreta durante a decisão de compra." },
  { title: "Recuperar interessados", text: "Trazer de volta quem conversou, pediu orçamento e não concluiu." },
  { title: "Menos dependência de datas", text: "Usar a Black Friday como aprendizado para o restante do ano." },
];

export const attributes = [
  {
    label: "Confiança",
    value: "Avaliações, suporte e experiência",
    how: "A nota 5,0 e as 376 avaliações viram evidência em anúncios, Stories e no atendimento — não apenas um selo no perfil.",
  },
  {
    label: "Sofisticação",
    value: "Curadoria, acabamento e design",
    how: "Mostrar tecidos, acabamentos e composições com o mesmo cuidado com que o showroom é montado.",
  },
  {
    label: "Hospitalidade",
    value: "Atenção e acolhimento",
    how: "Tornar visível o que acontece na visita: recepção, café, orientação e acompanhamento.",
  },
  {
    label: "Pertencimento",
    value: "Ambientes com significado",
    how: "Conectar móveis a famílias, conquistas e momentos — a essência da história do fundador.",
  },
];
