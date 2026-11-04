// Capítulo 02 — perfis, objeções, princípios e jornada.
// Perfis e princípios são HIPÓTESES de trabalho, a validar com o histórico comercial.

export const personas = [
  {
    name: "Casal mobiliando um imóvel",
    moment: "Mudança, primeiro imóvel ou novo endereço — várias peças escolhidas em sequência.",
    motivation: "Conquista e realização.",
    insecurity: "Adequação dos móveis ao novo espaço: medidas, proporções e combinação.",
    message: "“Seu novo lar merece ser pensado por inteiro.”",
    content: "Composição de ambientes, medidas e proporções, antes e depois.",
    scripts: ["T05", "O06", "O02"],
  },
  {
    name: "Família renovando a casa",
    moment: "Troca de peças após anos de uso ou mudança na rotina da família.",
    motivation: "Conforto e funcionalidade.",
    insecurity: "Durabilidade e custo-benefício.",
    message: "“Conforto pensado para a rotina real da sua família.”",
    content: "Tecidos, uso diário, conforto demonstrado e prova social.",
    scripts: ["T04", "O03", "T03"],
  },
  {
    name: "Consumidor de maior poder aquisitivo",
    moment: "Busca por uma peça de design, com acabamento e curadoria superiores.",
    motivation: "Design e qualidade.",
    insecurity: "Compatibilidade entre preço e valor percebido.",
    message: "“Curadoria, acabamento e atendimento à altura da sua escolha.”",
    content: "Detalhes de acabamento, curadoria, experiência no showroom e fundador.",
    scripts: ["O05", "O01", "T05"],
  },
  {
    name: "Arquitetos e designers de interiores",
    moment: "Especificação de peças para projetos de clientes.",
    motivation: "Segurança na especificação.",
    insecurity: "Prazos, acabamento e execução.",
    message: "“Um parceiro confiável para especificar.”",
    content: "Projetos, materiais, prazos, entrega e relacionamento.",
    scripts: ["O02", "O04"],
  },
];

export const doubtGroups = [
  {
    group: "Adequação",
    question: "Vai funcionar no meu ambiente?",
    items: [
      {
        doubt: "Dimensões",
        communication: "Vídeos que mostram medidas, circulação e proporção em ambientes reais.",
        showroom: "Orientação com base nas medidas do cliente e comparação lado a lado.",
        scripts: ["T04", "O03"],
      },
      {
        doubt: "Compatibilidade com o ambiente",
        communication: "Composições completas e comparação entre estilos.",
        showroom: "Curadoria objetiva: montar a combinação antes da decisão.",
        scripts: ["T05", "O06"],
      },
    ],
  },
  {
    group: "Qualidade",
    question: "O material e o conforto justificam o valor?",
    items: [
      {
        doubt: "Qualidade",
        communication: "Close de tecidos, estrutura e acabamentos — evidência, não adjetivo.",
        showroom: "Demonstração tátil de materiais e acabamentos.",
        scripts: ["T04", "O05"],
      },
      {
        doubt: "Conforto",
        communication: "Teste de conforto filmado; pessoas reais usando as peças.",
        showroom: "Convite a experimentar com calma, sem pressa de fechamento.",
        scripts: ["T01", "T04"],
      },
      {
        doubt: "Durabilidade",
        communication: "Explicação de tecidos e materiais adequados à rotina da família.",
        showroom: "Recomendação de tecido conforme uso, crianças e animais.",
        scripts: ["T04"],
      },
      {
        doubt: "Preço",
        communication: "Ancoragem transparente: comparar opções e condições reais.",
        showroom: "Apresentar alternativas dentro do mesmo estilo e justificar diferenças.",
        scripts: ["T01", "T02", "T06"],
      },
    ],
  },
  {
    group: "Confiança",
    question: "Posso contar com a loja depois da compra?",
    items: [
      {
        doubt: "Suporte após a compra",
        communication: "Avaliações reais e bastidores do pós-venda.",
        showroom: "Explicar com clareza o acompanhamento depois da entrega.",
        scripts: ["T03", "O04"],
      },
    ],
  },
  {
    group: "Entrega",
    question: "O pedido chegará e será montado corretamente?",
    items: [
      {
        doubt: "Entrega e montagem",
        communication: "Mostrar preparação, transporte, montagem e resultado final.",
        showroom: "Prazos reais informados antes do fechamento.",
        scripts: ["O02", "T03"],
      },
    ],
  },
];

export const principles = [
  {
    name: "Prova social",
    meaning: "Diante de uma compra de valor elevado, as pessoas usam a experiência de outros clientes para reduzir a incerteza.",
    application: "Avaliações, depoimentos, casas e clientes reais — com autorização.",
    indicator: "Contatos e engajamento das peças de prova social comparados à média dos anúncios.",
  },
  {
    name: "Identificação emocional",
    meaning: "O cliente decide melhor quando se enxerga na situação: a mesa da família, a sala do novo apartamento.",
    application: "Histórias de vida, lar e conquistas; a história do fundador e da Liz.",
    indicator: "Retenção dos vídeos, comentários e salvamentos.",
  },
  {
    name: "Redução do risco percebido",
    meaning: "Quanto maior o valor, maior o medo de errar. Informação concreta diminui esse risco.",
    application: "Entrega, montagem, especificações e suporte mostrados com transparência.",
    indicator: "Objeções recorrentes registradas pelo comercial e avanço dos orçamentos.",
  },
  {
    name: "Ancoragem transparente",
    meaning: "A comparação entre opções ajuda a perceber valor — desde que os referenciais sejam reais.",
    application: "Comparar opções e condições reais, sem preço de referência artificial.",
    indicator: "Avanço de orçamentos com comparação e ticket médio informado.",
  },
  {
    name: "Fluência cognitiva",
    meaning: "O que é fácil de entender parece mais seguro. Excesso de opções trava a decisão.",
    application: "Simplificar informação e escolha: menos jargão, mais orientação.",
    indicator: "Perguntas repetidas no atendimento e tempo até o orçamento.",
  },
  {
    name: "Familiaridade",
    meaning: "Rostos e vozes recorrentes geram reconhecimento e confiança ao longo do tempo.",
    application: "Fundador e equipe recorrentes nos vídeos.",
    indicator: "Clientes que citam os vídeos no atendimento; crescimento de buscas pela marca.",
  },
  {
    name: "Antecipação",
    meaning: "Preparar a decisão antes da data reduz a pressa e qualifica o interesse.",
    application: "Aquecimento e prazos reais na Black Friday — sem falso prazo ou falsa escassez.",
    indicator: "Interessados captados antes da campanha e conversas no período.",
  },
];

export const journey = [
  {
    step: "Descoberta",
    channels: "Instagram, anúncios, Google e indicações",
    actions: "Vídeos de desejo e reputação; anúncios de reconhecimento; ficha do Google cuidada.",
    lanes: { conteudo: true, trafego: true, priscila: false, experiencia: false },
  },
  {
    step: "Consideração",
    channels: "Produtos, avaliações, comparações e dúvidas",
    actions: "Conteúdo educativo (T04, O03), prova social (T03) e remarketing de engajados.",
    lanes: { conteudo: true, trafego: true, priscila: false, experiencia: false },
  },
  {
    step: "Primeiro contato",
    channels: "WhatsApp, Priscila e orçamento",
    actions: "Anúncios de mensagem levam à Priscila; registro da origem do contato.",
    lanes: { conteudo: false, trafego: true, priscila: true, experiencia: false },
  },
  {
    step: "Showroom",
    channels: "Experimentação e curadoria",
    actions: "Receber, entender, orientar e demonstrar — a promessa da comunicação confirmada.",
    lanes: { conteudo: false, trafego: false, priscila: true, experiencia: true },
  },
  {
    step: "Decisão",
    channels: "Proposta e fechamento",
    actions: "Proposta clara; remarketing de orçamento pendente traz o cliente de volta.",
    lanes: { conteudo: false, trafego: true, priscila: true, experiencia: true },
  },
  {
    step: "Relacionamento",
    channels: "Entrega, avaliação, indicação e recompra",
    actions: "Entregas filmadas (O02), pedido de avaliação, indicação e recompra.",
    lanes: { conteudo: true, trafego: false, priscila: true, experiencia: true },
  },
];

export const lanes = [
  { key: "conteudo", label: "Conteúdo" },
  { key: "trafego", label: "Tráfego pago" },
  { key: "priscila", label: "Priscila / comercial" },
  { key: "experiencia", label: "Experiência presencial" },
] as const;

export const brandPillars = [
  { label: "Histórias", value: "Propósito e identificação" },
  { label: "Pessoas", value: "Confiança e proximidade" },
  { label: "Produtos", value: "Beleza e funcionalidade" },
  { label: "Experiência", value: "Acolhimento em cada etapa" },
];
