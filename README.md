# DigitalQuintino — Leituras para viver melhor

React / Express / tRPC / Drizzle starter, adapted from the Sandbox web-db-user template.

- `pnpm dev`: development server; honors `PORT` (default 3000).
- `pnpm build` / `pnpm start`: build and serve `dist/index.js` and `dist/public/`.
- `pnpm db:migrate`: apply checked-in migrations. `pnpm db:push`: generate and apply new schema changes.
- `pnpm check` / `pnpm test`: types and application tests.

Start with the Webdev skill's default-template guide. Platform login, storage, payments and service contracts live in its shared references; read the relevant capability before extending its helper.

`server/_core/publicConfig.ts` exposes only named public runtime values. Private keys stay server-side. The platform serves managed `/manus-storage/` assets; the application does not register a second proxy.

## Novos modelos da vitrine

Foram adicionadas três páginas de apresentação ao catálogo principal, todas com capas locais em `client/public/assets/`, páginas internas responsivas e checkout pela Kiwify:

- `/como-fazer-amigos-e-influenciar-pessoas` — **Como Fazer Amigos e Influenciar Pessoas**, de Dale Carnegie.
- `/triade-do-tempo` — **A Tríade do Tempo**, de Christian Barbosa.
- `/101-sucos-detox` — **101 Sucos Detox**, de Danielle Pereira.

Os cards estão cadastrados em `client/src/pages/Home.tsx`, e as rotas públicas também foram declaradas em `client/public/manus-routes.json`.

Platform configuration is readable and editable through `webdev.config`. Default settings are initial values, not enforced constraints. The agent may modify the files, commands and configuration or follow the flexible guide for another stack.
