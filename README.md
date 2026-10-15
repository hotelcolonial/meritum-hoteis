# Méritum Hotéis (site)

Site institucional da Méritum Hotéis em Next.js 16 (App Router), gerado a partir do design feito no Claude Design.

## Rodar no computador

```bash
npm install
cp .env.example .env.local   # preencher as variáveis
npm run dev                  # http://localhost:3000
```

## Estrutura

- `src/app` rotas, metadados, `sitemap.xml`, `robots.txt`, `llms.txt` e a API do formulário (`/api/contato`)
- `src/content` o conteúdo de cada página (HTML estático renderizado no servidor)
- `src/components` cabeçalho, herói da home, barra de reservas, rodapé e comportamentos (galeria, formulário, animações)
- `src/lib/site.ts` dados da empresa, rotas e URLs dos motores de reserva
- `src/lib/seo.ts` títulos, descrições e dados estruturados (schema.org)

## SEO e IA

Cada página tem título, descrição, URL canônica e Open Graph próprios. O site publica dados estruturados
(Organization, Hotel, Restaurant, ParkingFacility, FAQPage, BreadcrumbList), `sitemap.xml`, `robots.txt`
com os robôs de IA liberados (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended e outros)
e um resumo em `/llms.txt`.

## Pendências

- URLs dos motores de reserva (`NEXT_PUBLIC_BOOKING_*`)
- E-mail que recebe o formulário e conta no Resend
- Links oficiais das redes sociais (`src/lib/site.ts`, hoje ocultos no rodapé)
- Páginas de Política de Privacidade e Termos de Uso
- Foto do herói do Hotel Colonial em resolução maior (a atual tem 1024 px)
