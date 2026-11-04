// Estrutura da apresentação: 6 capítulos · 32 telas.
// Os títulos aqui alimentam o menu lateral, a busca rápida e os cabeçalhos das telas.

export type ChapterId = "c1" | "c2" | "c3" | "c4" | "c5" | "c6";

export interface Chapter {
  id: ChapterId;
  num: string;
  title: string;
  short: string;
  range: [number, number];
}

export interface Screen {
  n: number;
  chapter: ChapterId;
  eyebrow: string;
  title: string;
}

export const chapters: Chapter[] = [
  { id: "c1", num: "01", title: "Diagnóstico e inteligência competitiva", short: "Diagnóstico", range: [1, 8] },
  { id: "c2", num: "02", title: "Comportamento e neuromarketing", short: "Comportamento", range: [9, 13] },
  { id: "c3", num: "03", title: "Black Friday, Cyber Monday e remarketing", short: "Campanha", range: [14, 19] },
  { id: "c4", num: "04", title: "Social media e estratégia audiovisual", short: "Conteúdo", range: [20, 24] },
  { id: "c5", num: "05", title: "Tráfego, experiência e plano de 90 dias", short: "Execução", range: [25, 29] },
  { id: "c6", num: "06", title: "Metas, responsabilidades e próximos passos", short: "Próximos passos", range: [30, 32] },
];

export const screens: Screen[] = [
  { n: 1, chapter: "c1", eyebrow: "Visão geral", title: "A Decorar e os próximos 90 dias" },
  { n: 2, chapter: "c1", eyebrow: "Contexto", title: "O novo momento da Decorar" },
  { n: 3, chapter: "c1", eyebrow: "Achados principais", title: "Diagnóstico estratégico concluído" },
  { n: 4, chapter: "c1", eyebrow: "Google · levantamento inicial", title: "Inteligência competitiva" },
  { n: 5, chapter: "c1", eyebrow: "Posicionamento", title: "Nossa oportunidade competitiva" },
  { n: 6, chapter: "c1", eyebrow: "01/09 a 03/11/2026", title: "Radiografia do tráfego atual" },
  { n: 7, chapter: "c1", eyebrow: "Análise por anúncio", title: "Criativos vencedores: o que preservar" },
  { n: 8, chapter: "c1", eyebrow: "Interativo · cenários hipotéticos", title: "Simulador de oportunidades" },
  { n: 9, chapter: "c2", eyebrow: "Perfis de compra", title: "Quem compra da Decorar?" },
  { n: 10, chapter: "c2", eyebrow: "Dúvidas e objeções", title: "O que impede o cliente de comprar?" },
  { n: 11, chapter: "c2", eyebrow: "Hipóteses comportamentais", title: "Neuromarketing aplicado — da teoria à ação" },
  { n: 12, chapter: "c2", eyebrow: "Do anúncio à indicação", title: "Jornada de compra que vamos fortalecer" },
  { n: 13, chapter: "c2", eyebrow: "Plataforma da marca", title: "Posicionamento: sofisticação que acolhe" },
  { n: 14, chapter: "c3", eyebrow: "27 de novembro de 2026", title: "Black Friday Decorar" },
  { n: 15, chapter: "c3", eyebrow: "Curadoria comercial", title: "Arquitetura de ofertas" },
  { n: 16, chapter: "c3", eyebrow: "Cronograma interativo", title: "Calendário completo da campanha" },
  { n: 17, chapter: "c3", eyebrow: "Social + vídeos + tráfego + comercial", title: "Execução por fase" },
  { n: 18, chapter: "c3", eyebrow: "30 de novembro de 2026", title: "Cyber Monday: segunda janela de conversão" },
  { n: 19, chapter: "c3", eyebrow: "Recuperação sem roteirizar o atendimento", title: "Remarketing a serviço da Priscila" },
  { n: 20, chapter: "c4", eyebrow: "Linhas editoriais", title: "Social media: seis frentes integradas" },
  { n: 21, chapter: "c4", eyebrow: "Biblioteca audiovisual · anúncios", title: "Seis vídeos para tráfego pago" },
  { n: 22, chapter: "c4", eyebrow: "Biblioteca audiovisual · marca", title: "Seis vídeos orgânicos" },
  { n: 23, chapter: "c4", eyebrow: "Ideias para o perfil", title: "3 sugestões de vídeos para o perfil" },
  { n: 24, chapter: "c4", eyebrow: "Gravação · 05/11", title: "Planejamento de captação" },
  { n: 25, chapter: "c5", eyebrow: "Aquisição + remarketing", title: "Tráfego pago: evolução da operação" },
  { n: 26, chapter: "c5", eyebrow: "Neuromarketing no ponto de venda", title: "Showroom: experiência que confirma a promessa" },
  { n: 27, chapter: "c5", eyebrow: "Mês 2", title: "Dezembro: recuperar, aprender e otimizar" },
  { n: 28, chapter: "c5", eyebrow: "Mês 3", title: "Janeiro: consolidar e crescer" },
  { n: 29, chapter: "c5", eyebrow: "Mapa de execução", title: "Plano de trabalho: 90 dias" },
  { n: 30, chapter: "c6", eyebrow: "Informações que a Decorar precisa trazer", title: "Dever de casa: metas e indicadores" },
  { n: 31, chapter: "c6", eyebrow: "Governança", title: "Decisões, responsabilidades e próxima execução" },
  { n: 32, chapter: "c6", eyebrow: "Encerramento", title: "O próximo capítulo da Decorar" },
];

export const TOTAL_SCREENS = screens.length;

export const screenId = (n: number) => `tela-${String(n).padStart(2, "0")}`;
export const pad = (n: number) => String(n).padStart(2, "0");

export const shortcuts = [
  { n: 6, label: "Tráfego" },
  { n: 8, label: "Simulador" },
  { n: 16, label: "Calendário Black" },
  { n: 21, label: "Roteiros" },
  { n: 29, label: "Plano 90 dias" },
  { n: 30, label: "Dever de casa" },
];
