// Capítulos 05 e 06 — tráfego, showroom, meses, roadmap, dever de casa e governança.

export const trafficFunctions = [
  {
    front: "Reconhecimento",
    content: "Fundador, ambientes, história",
    creatives: "O01, O05 e peças de ambientes",
    indicator: "Alcance qualificado / interesse",
  },
  {
    front: "Consideração",
    content: "Demonstração, educação, avaliações",
    creatives: "T03, T04, T05 e O03",
    indicator: "Engajamento / contatos",
  },
  {
    front: "Conversão",
    content: "Sofás, mesas e ofertas",
    creatives: "Vencedores atuais + T01 e T02",
    indicator: "Leads qualificados / vendas",
  },
  {
    front: "Remarketing",
    content: "Objeções e oportunidades vigentes",
    creatives: "T04, T06 e prova social",
    indicator: "Recuperações e custo por venda",
  },
];

export const optimization = {
  front: "Otimização (contínua)",
  content: "Testes de criativos e públicos",
  indicator: "Resultado comercial incremental",
};

export const showroomSteps = [
  { verb: "Receber", value: "Hospitalidade real", reduces: "Sensação de ser “só mais um cliente”." },
  { verb: "Entender", value: "Necessidade e ambiente", reduces: "Medo de a peça não servir no espaço." },
  { verb: "Orientar", value: "Curadoria objetiva", reduces: "Excesso de opções e dúvida entre modelos." },
  { verb: "Demonstrar", value: "Conforto e acabamentos", reduces: "Dúvida sobre qualidade e valor." },
  { verb: "Acompanhar", value: "Prazos, entrega e pós-venda", reduces: "Receio sobre entrega, montagem e suporte." },
];

export const december = [
  { title: "Remarketing pós-Black Friday", text: "Trabalhar remarketing com públicos elegíveis e ofertas vigentes." },
  { title: "Recuperação de oportunidades", text: "Recuperar orçamentos que permaneceram em aberto." },
  { title: "Conteúdos de experiência", text: "Publicar entregas, experiências e clientes reais." },
  { title: "Avaliação dos anúncios", text: "Avaliar campanhas e produtos que geraram oportunidades reais." },
  { title: "Melhoria de processos", text: "Testar mensagens, conteúdos e fricções no processo comercial." },
  { title: "Relacionamento", text: "Iniciar relacionamento estruturado com arquitetos quando viável." },
];

export const january = [
  { label: "Marca", value: "Fundador, prova social e autoridade", items: ["Marca e posicionamento", "Presença do fundador", "Conteúdos educativos"] },
  { label: "Comercial", value: "Criativos, qualificação e recuperação", items: ["Testes de conversão", "Experiência no showroom"] },
  { label: "Relacionamento", value: "Arquitetos, clientes e Decorar Experience", items: ["Arquitetos", "Preparação do aniversário da Decorar"] },
];

export type MonthKey = "nov" | "dez" | "jan";

export const months: { key: MonthKey; label: string; theme: string }[] = [
  { key: "nov", label: "Novembro", theme: "Black Friday e Cyber Monday" },
  { key: "dez", label: "Dezembro", theme: "Recuperar, aprender e otimizar" },
  { key: "jan", label: "Janeiro", theme: "Consolidar e crescer" },
];

export const roadmap: { front: string; cells: Partial<Record<MonthKey, string>> }[] = [
  { front: "Black Friday", cells: { nov: "Preparação, aquecimento, campanha, Cyber Monday e pós-campanha até 07/12." } },
  {
    front: "Social media",
    cells: {
      nov: "Aquecimento, pré-Black e campanha com intensificação de Stories.",
      dez: "Entregas, bastidores, experiência e clientes reais.",
      jan: "Fundador, prova social e conteúdo educativo.",
    },
  },
  {
    front: "Vídeos e criativos",
    cells: {
      nov: "Gravação 05/11; T01–T06 e primeiros orgânicos.",
      dez: "O02, O04 e O06; novas variações dos vencedores.",
      jan: "Novos roteiros a partir do que performou.",
    },
  },
  {
    front: "Tráfego e testes",
    cells: {
      nov: "Manter vencedores; consideração e conversão da campanha.",
      dez: "Análise dos anúncios e testes de mensagens.",
      jan: "Testes de conversão e qualificação de públicos.",
    },
  },
  {
    front: "Remarketing",
    cells: {
      nov: "Engajados, contatos e orçamentos pendentes.",
      dez: "Recuperação pós-Black com ofertas vigentes.",
      jan: "Remarketing contínuo de oportunidades.",
    },
  },
  {
    front: "Experiência no showroom",
    cells: {
      dez: "Mapear fricções e alinhar comunicação e visita.",
      jan: "Consolidar a experiência e a Decorar Experience.",
    },
  },
  {
    front: "Indicadores e mensuração",
    cells: {
      nov: "Coleta dos dados de base e origem dos contatos.",
      dez: "Relatório da campanha e primeiros cruzamentos.",
      jan: "Metas definidas sobre dados reais; avaliação do ciclo.",
    },
  },
  {
    front: "Arquitetos e relacionamento",
    cells: {
      dez: "Início do relacionamento estruturado, quando viável.",
      jan: "Projetos, parcerias e aniversário de 6 de fevereiro.",
    },
  },
];

export const delivered = [
  "Diagnóstico estratégico e inteligência competitiva",
  "Radiografia do tráfego e análise por anúncio",
  "Plataforma de posicionamento e perfis de compra",
  "Estratégia de Black Friday, Cyber Monday e remarketing",
  "12 roteiros completos de vídeo",
];

export const homework = [
  { id: "hw-fat", title: "Faturamento", detail: "Vendas e faturamento mensal; vendas por categoria.", owner: "Gestão" },
  { id: "hw-conv", title: "Conversão", detail: "Leads únicos, orçamentos e fechamentos.", owner: "Priscila / Gestão" },
  { id: "hw-vis", title: "Visitas", detail: "Quantidade de visitas ao showroom e a origem de cada uma.", owner: "Priscila" },
  { id: "hw-efi", title: "Eficiência", detail: "Investimento, vendas atribuídas, custo por aquisição e origem.", owner: "Gestão + tráfego" },
  { id: "hw-tkt", title: "Ticket médio", detail: "Valor médio dos pedidos e itens complementares.", owner: "Gestão" },
  { id: "hw-rec", title: "Recuperação", detail: "Orçamentos pendentes e vendas recuperadas.", owner: "Priscila" },
  { id: "hw-rel", title: "Relacionamento", detail: "Recompras, indicações e satisfação.", owner: "Gestão" },
  { id: "hw-exp", title: "Experiência", detail: "Satisfação, reclamações e objeções recorrentes.", owner: "Priscila / Gestão" },
];

export const urgentHomework = [
  { id: "bf-prod", title: "Produtos da Black Friday" },
  { id: "bf-est", title: "Estoque" },
  { id: "bf-preco", title: "Preços" },
  { id: "bf-desc", title: "Limites de desconto" },
  { id: "bf-pag", title: "Condições de pagamento" },
  { id: "bf-ent", title: "Capacidade de entrega" },
];

export const responsibilities = [
  { front: "Neuromarketing e diagnóstico", owner: "Consultoria estratégica", scope: "Estratégia, hipóteses, direcionamentos e avaliação." },
  { front: "Roteiros e direcionamento criativo", owner: "Consultoria + equipe de produção", scope: "Captação e edição conforme escopo aprovado." },
  { front: "Publicação e social media", owner: "Equipe de conteúdo", scope: "Publicação e gestão editorial." },
  { front: "Campanhas e remarketing", owner: "Gestor de tráfego", scope: "Campanhas, otimização e remarketing." },
  { front: "Atendimento e fechamento", owner: "Priscila / comercial", scope: "Atendimento, orçamento e fechamento." },
  { front: "Ofertas e preços", owner: "Direção da Decorar", scope: "Aprovação de ofertas e decisões comerciais." },
  { front: "Indicadores e acompanhamento", owner: "Gestão + consultoria", scope: "Dados comerciais e leitura dos indicadores." },
];

export const meetingDecisions = [
  { id: "dec-ofertas", label: "Aprovar ofertas" },
  { id: "dec-videos", label: "Escolher vídeos prioritários" },
  { id: "dec-resp", label: "Confirmar responsáveis" },
  { id: "dec-prazos", label: "Confirmar prazos de entrega" },
  { id: "dec-ind", label: "Combinar a coleta de indicadores" },
];
