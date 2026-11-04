// Capítulo 04 — social media, os 12 roteiros completos, vídeos e captação.
// Roteiros transcritos integralmente da apresentação original.

export const pillars = [
  {
    label: "Desejo e inspiração",
    value: "Ambientes e composições",
    examples: ["Ambientes completos do showroom", "Detalhes de luz, textura e composição", "“Dois ambientes, uma escolha” (O06)"],
  },
  {
    label: "Autoridade",
    value: "Tecidos, medidas e materiais",
    examples: ["Como escolher o tecido certo para a rotina", "“Três erros ao escolher uma mesa” (O03)", "Medidas e circulação explicadas"],
  },
  {
    label: "Humanização",
    value: "Fundador, equipe e rotina",
    examples: ["“A história da mesa e da Liz” (O01)", "“Um dia dentro da Decorar” (O04)", "Equipe apresentando peças favoritas"],
  },
  {
    label: "Prova social",
    value: "Avaliações, entregas e clientes",
    examples: ["Avaliações reais do Google em Stories", "“Da Decorar para sua casa” (O02)", "Montagem e resultado final autorizados"],
  },
  {
    label: "Conversão",
    value: "Produtos e campanhas",
    examples: ["Black Friday de sofás e mesas (T01, T02)", "Cyber Monday (T06)", "Condições vigentes — somente após aprovação"],
  },
  {
    label: "Arquitetos",
    value: "Projetos e parcerias",
    examples: ["Projetos especificados com peças da Decorar", "Bastidores de uma especificação", "Relacionamento e eventos, quando viável"],
  },
];

export const rhythm = [
  "Três publicações semanais",
  "Stories nos dias de funcionamento",
  "Conteúdos adicionais em campanhas",
  "Presença recorrente do fundador",
  "Material comercial aproveitado no orgânico e vice-versa",
];

export interface Script {
  id: string;
  title: string;
  category: string;
  objective: string;
  hook: string;
  body: string;
  scenes: string;
  cta: string;
  application?: string;
  principle: string;
  dependsOnOffer?: boolean;
}

export const trafficScripts: Script[] = [
  {
    id: "T01",
    title: "Black Friday de Sofás",
    category: "Conversão",
    objective: "Conversão",
    hook: "“Se você está pensando em trocar seu sofá, presta atenção nisso.”",
    body: "A Black Friday da Decorar está chegando, e essa pode ser uma ótima oportunidade para renovar sua sala. Estamos preparando uma seleção especial de sofás para diferentes ambientes e estilos. Aqui, você pode conhecer os modelos, experimentar o conforto e receber orientação para escolher o que realmente combina com sua casa. Quer saber quais modelos estão participando? Fale com a nossa equipe.",
    scenes: "Apresentador ao lado de sofá; planos abertos, tecido, conforto e ambientes.",
    cta: "Fale com nossa equipe e conheça os modelos participantes.",
    application: "Campanha de mensagens da Black Friday (27–29/11) — oferta de atração em sofás.",
    principle: "Oportunidade real e redução de incerteza.",
    dependsOnOffer: true,
  },
  {
    id: "T02",
    title: "Novas histórias começam à mesa",
    category: "Conversão",
    objective: "Desejo e conversão",
    hook: "“Quantos momentos importantes da sua família já aconteceram ao redor de uma mesa?”",
    body: "Uma mesa de jantar é muito mais do que uma peça de mobiliário. É onde você recebe amigos, reúne a família e cria novas memórias. E na Black Friday da Decorar, vamos apresentar oportunidades especiais para quem deseja transformar esse espaço da casa. Temos diferentes modelos e composições para você conhecer. Entre em contato e descubra as condições da campanha.",
    scenes: "Mesa ambientada, acabamentos, cadeiras e planos abertos.",
    cta: "Descubra as condições da campanha.",
    application: "Campanha de mensagens da Black Friday — mesas e conjuntos de jantar (oferta estratégica).",
    principle: "Identificação emocional e visualização do uso.",
    dependsOnOffer: true,
  },
  {
    id: "T03",
    title: "Por que tantos clientes escolhem a Decorar?",
    category: "Confiança",
    objective: "Prova social",
    hook: "“Antes de escolher onde comprar seus móveis, vale observar uma coisa.”",
    body: "Na hora de comprar um sofá ou uma mesa de jantar, o produto é importante. Mas saber com quem você está comprando também faz diferença. Na Decorar, valorizamos cada etapa da experiência, desde o atendimento e a escolha até a entrega e o pós-venda. E temos muito orgulho das avaliações que nossos clientes compartilham. Venha conhecer nossa loja e descobrir por que tantas pessoas confiam na Decorar.",
    scenes: "Avaliações reais, atendimento, equipe, showroom e montagem.",
    cta: "Venha conhecer nossa loja.",
    application: "Aquecimento e pré-Black; remarketing para quem engajou e ainda não chamou.",
    principle: "Prova social e redução do risco percebido.",
  },
  {
    id: "T04",
    title: "O erro de escolher um sofá só pela aparência",
    category: "Consideração",
    objective: "Consideração e autoridade",
    hook: "“Um sofá pode ser lindo e ainda assim não ser a melhor escolha para sua casa.”",
    body: "Antes de escolher um sofá, você precisa considerar muito mais do que a aparência. Pense no espaço disponível, na rotina da sua família, no tipo de tecido e no conforto que você procura. Um modelo ideal para uma sala pode não funcionar tão bem em outra. Por isso, aqui na Decorar, ajudamos você a avaliar essas diferenças. Venha experimentar e encontre o sofá adequado para o seu ambiente.",
    scenes: "Comparação de sofás, medidas, tecidos e teste de conforto.",
    cta: "Venha experimentar o modelo ideal.",
    application: "Pré-Black e remarketing de quem chamou e não avançou.",
    principle: "Autoridade e simplificação da escolha.",
  },
  {
    id: "T05",
    title: "O segredo de um ambiente bem planejado",
    category: "Valor percebido",
    objective: "Percepção de valor e venda complementar",
    hook: "“O segredo de uma sala bonita não está em uma peça isolada.”",
    body: "Quando você pensa em uma sala bonita, talvez imagine um sofá incrível. Mas o resultado de um ambiente depende da combinação entre os móveis, das proporções e dos detalhes. Aqui na Decorar, você encontra opções para compor diferentes estilos, do sofá à mesa de centro, da poltrona aos complementos. Venha conhecer nossas composições e descubra possibilidades para a sua casa.",
    scenes: "Ambiente completo, apresentação de peças e composição final.",
    cta: "Conheça nossas composições.",
    application: "Pré-Black e oferta de composição — estimular a venda complementar.",
    principle: "Contextualização e venda complementar.",
  },
  {
    id: "T06",
    title: "Ainda está escolhendo?",
    category: "Cyber Monday",
    objective: "Remarketing",
    hook: "“Você viu as oportunidades da Decorar, mas ainda está escolhendo seu sofá ou sua mesa?”",
    body: "Se você acompanhou nossa Black Friday e ainda não tomou sua decisão, temos um convite. Nesta Cyber Monday, vamos apresentar as oportunidades que continuam disponíveis e condições selecionadas para quem deseja renovar a casa. Nossa equipe pode ajudar você a comparar modelos e encontrar a opção adequada. Entre em contato e confira as condições válidas hoje.",
    scenes: "Apresentador, produtos disponíveis e showroom.",
    cta: "Confira as condições vigentes.",
    application: "Cyber Monday (30/11) — remarketing de interessados e orçamentos pendentes.",
    principle: "Recuperação de interesse e oportunidade legítima.",
    dependsOnOffer: true,
  },
];

export const organicScripts: Script[] = [
  {
    id: "O01",
    title: "A história da mesa e da Liz",
    category: "Storytelling",
    objective: "Identificação e lembrança de marca",
    hook: "“Teve um dia em que eu percebi que uma mesa não era só uma mesa.”",
    body: "Antes de abrir a Decorar, eu trabalhava no banco. Chegava em casa depois de dias mentalmente cansativos. E tinha uma coisa que marcava muito esse momento: quando minha filha Liz ouvia o barulho da porta, ela corria para se esconder debaixo da mesa de jantar. Aquela mesa fazia parte de um momento simples, mas muito especial para mim. Foi assim que comecei a olhar os móveis de outra maneira. Porque, no fim das contas, eles fazem parte das histórias que vivemos. E esse sentimento está na essência da Decorar.",
    scenes: "Fundador à mesa, conversa natural e imagens pessoais autorizadas.",
    cta: "Qual móvel da sua casa guarda uma lembrança especial?",
    principle: "Identificação, propósito e lembrança de marca.",
  },
  {
    id: "O02",
    title: "Da Decorar para sua casa",
    category: "Prova social",
    objective: "Confiança na entrega",
    hook: "“Olha como esse ambiente ficou depois da chegada dos móveis.”",
    body: "Hoje a gente vai mostrar mais uma transformação que tivemos o prazer de acompanhar. Tudo começou com a escolha dos móveis aqui na Decorar. Depois veio a preparação, a entrega e a montagem. E agora você pode conferir o resultado final. É muito especial ver como cada peça encontra seu lugar e passa a fazer parte da casa de alguém.",
    scenes: "Preparação, transporte, montagem, ambiente e cliente autorizado.",
    cta: "Qual detalhe mais chamou sua atenção?",
    principle: "Confiança pela demonstração real.",
  },
  {
    id: "O03",
    title: "Três erros ao escolher uma mesa",
    category: "Autoridade",
    objective: "Educar e orientar a escolha",
    hook: "“Esses três erros podem comprometer a sua sala de jantar.”",
    body: "O primeiro erro é escolher uma mesa sem considerar o espaço de circulação. O segundo é pensar apenas na aparência e esquecer como ela será utilizada no dia a dia. E o terceiro é não avaliar a combinação com as cadeiras e com os outros elementos do ambiente. Aqui na Decorar, a gente ajuda você a observar esses detalhes antes de escolher. Assim, sua mesa fica bonita e faz sentido para a sua rotina.",
    scenes: "Mesa, cadeiras, circulação, proporções e acabamentos.",
    cta: "Salve para consultar antes de comprar.",
    principle: "Autoridade e clareza da escolha.",
  },
  {
    id: "O04",
    title: "Um dia dentro da Decorar",
    category: "Bastidores",
    objective: "Humanização",
    hook: "“Você já imaginou o que acontece aqui antes de um cliente escolher seu móvel?”",
    body: "Por trás de cada ambiente que você vê na Decorar, existe muita coisa acontecendo. Tem a organização do showroom, a chegada dos produtos, a preparação dos espaços e uma equipe cuidando de cada detalhe. Tudo isso faz parte da experiência que queremos oferecer para quem visita nossa loja. Hoje você vai acompanhar um pouquinho dessa rotina com a gente.",
    scenes: "Abertura, organização, recebimento, equipe e atendimento.",
    cta: "Acompanhe mais dos nossos bastidores.",
    principle: "Familiaridade e humanização.",
  },
  {
    id: "O05",
    title: "Por que cada detalhe importa?",
    category: "Experiência",
    objective: "Hospitalidade e diferenciação",
    hook: "“Aqui, a experiência de comprar um móvel começa muito antes de você escolher o produto.”",
    body: "Quando alguém visita a Decorar, queremos que se sinta bem recebido. Por isso, pensamos no ambiente, no atendimento e nos pequenos detalhes que fazem parte da experiência. Nosso objetivo é entender o que cada pessoa procura e ajudar na construção de um espaço que realmente faça sentido para ela. Porque vender um móvel é importante, mas cuidar de quem confia na gente também é.",
    scenes: "Recepção, café, showroom, conversa e detalhes da hospitalidade.",
    cta: "Venha viver a experiência pessoalmente.",
    principle: "Cuidado e diferenciação.",
  },
  {
    id: "O06",
    title: "Dois ambientes, uma escolha",
    category: "Engajamento",
    objective: "Participação e identificação",
    hook: "“Eu vou te mostrar dois ambientes completamente diferentes. Quero saber qual combina mais com você.”",
    body: "Esse primeiro ambiente tem uma proposta mais acolhedora, com cores e elementos que valorizam o conforto. Já o segundo tem uma composição diferente, com destaque para o design e os acabamentos. Os dois podem funcionar muito bem, dependendo do estilo de quem vai utilizar o espaço. Agora me conta: você escolheria o ambiente um ou o ambiente dois?",
    scenes: "Duas composições reais, planos gerais, detalhes e apresentador.",
    cta: "Comenta 1 ou 2.",
    principle: "Identificação e participação.",
  },
];

// ---------------------------------------------------------------------------
// VÍDEO DE FUNDO DA ABERTURA (Tela 01)
// Vídeo de banco de imagens (Pexels, licença gratuita para uso comercial):
// https://www.pexels.com/video/a-couple-making-a-decision-4824110/
// Para trocar por um vídeo real da Decorar, substitua public/videos/hero-loja.mp4.
// ---------------------------------------------------------------------------
export const heroVideo = {
  src: "/videos/hero-loja.mp4",
  fallbackImage: "/images/sala-jantar-premium.jpg",
};

// ---------------------------------------------------------------------------
// VÍDEOS SELECIONADOS (Tela 23)
// Para inserir/substituir: coloque o arquivo em /public/videos/ com o nome
// indicado em `src`. Se o arquivo não existir, a tela mostra um espaço reservado.
// ---------------------------------------------------------------------------
export const selectedVideos = [
  { slot: "01", title: "Vídeo 01", src: "/videos/video-01.mp4", caption: "" },
  { slot: "02", title: "Vídeo 02", src: "/videos/video-02.mp4", caption: "" },
  { slot: "03", title: "Vídeo 03", src: "/videos/video-03.mp4", caption: "" },
];

export const captureGroups = [
  {
    priority: "Prioridade 1 · Black Friday",
    note: "Gravar primeiro — alimenta T01, T02, T03 e T06.",
    items: [
      { id: "cap-bf", label: "Produtos participantes da Black Friday", detail: "Somente após a definição da Direção." },
      { id: "cap-sofas", label: "Sofás", detail: "Planos abertos, apresentador ao lado, teste de conforto." },
      { id: "cap-mesas", label: "Mesas", detail: "Mesa ambientada, cadeiras, planos abertos." },
      { id: "cap-comp", label: "Composição de ambientes", detail: "Ambiente completo e composição final (T05)." },
    ],
  },
  {
    priority: "Prioridade 2 · Fundador",
    note: "História pessoal, autoridade e falas institucionais.",
    items: [{ id: "cap-fund", label: "Fundador", detail: "História da mesa e da Liz (O01) e falas institucionais." }],
  },
  {
    priority: "Prioridade 3 · Produto e experiência",
    note: "Conteúdos institucionais e de autoridade.",
    items: [
      { id: "cap-tecidos", label: "Detalhes dos tecidos", detail: "Close de texturas para T04 e O03." },
      { id: "cap-acab", label: "Acabamentos", detail: "Madeira, pedra, metais e costuras." },
      { id: "cap-show", label: "Showroom", detail: "Ambientes, circulação e luz." },
      { id: "cap-fachada", label: "Fachada", detail: "Fachada e entrada da loja." },
      { id: "cap-equipe", label: "Equipe", detail: "Rotina, preparação e montagem (O04)." },
      { id: "cap-atend", label: "Atendimento", detail: "Somente com autorização dos envolvidos." },
      { id: "cap-hosp", label: "Hospitalidade", detail: "Recepção, café e detalhes (O05)." },
    ],
  },
];
