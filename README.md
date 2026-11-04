# Decorar Móveis · Estratégia 90 Dias

Apresentação executiva interativa (Caio Marketeiro · Neuromarketing) — 6 capítulos, 32 telas.
Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Lucide.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
```

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Na Vercel: **Add New → Project → Import** o repositório (framework detectado: Next.js). Nenhuma variável de ambiente é necessária.
   Ou, pela linha de comando: `npx vercel` e depois `npx vercel --prod`.

## Onde editar

| O quê | Arquivo |
|---|---|
| Capítulos, títulos das telas, atalhos | `src/data/structure.ts` |
| Dados de diagnóstico, Google, tráfego, criativos | `src/data/diagnostico.ts` |
| Perfis, objeções, princípios, jornada | `src/data/comportamento.ts` |
| Ofertas, calendário Black Friday, remarketing | `src/data/campanha.ts` |
| Pilares, 12 roteiros, vídeos, captação | `src/data/conteudo.ts` |
| Tráfego, showroom, meses, Gantt, dever de casa, responsabilidades | `src/data/execucao.ts` |
| Paleta e fontes | `src/app/globals.css` |

## Vídeos (tela 23)

Coloque os arquivos em **`public/videos/`** com os nomes `video-01.mp4`, `video-02.mp4` e `video-03.mp4`
(veja `public/videos/LEIA-ME.txt`). Arquivo ausente = espaço reservado, sem erro.

## Fontes oficiais (Tosh A / Gotham)

A identidade usa Tosh A e Gotham, que são fontes comerciais. Enquanto os arquivos não forem instalados, a página usa
Sora e Montserrat. Para ativar as oficiais, coloque os `.woff2` em `public/fonts/` e declare os `@font-face` com os nomes
`"Tosh A"` e `"Gotham"` no início de `src/app/globals.css` — elas passam a ter prioridade automaticamente.

## Atalhos durante a apresentação

`←` `→` telas · `Home`/`End` início/fim · `M` mostra/esconde o menu lateral · `Ctrl K` ou `/` busca de telas · botão de impressora gera PDF.
