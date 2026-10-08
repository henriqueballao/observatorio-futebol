# Estado factual — 2026-10-08

## Publicado em GitHub (branch main)
- Governança: README, AGENTS, 8 agentes, contratos e decisões.
- Banco: db/001_schema.sql (migração proposta; **não aplicada** no Supabase).
- Web: index.html, app.js, config.js, clubs.json.
- Catálogo: 60 clubes (20 por série), **preliminar, não homologado**.
- CI: validação mínima e testes de contrato; workflow de GitHub Pages incluído.
- Documentação: docs/SUPABASE_DEPLOY.md e docs/DEPLOY_GITHUB_PAGES.md.

## Pendências / gates
- G0: homologar oficialmente o universo 2026.
- GitHub Pages: confirmar ativação em Settings → Pages; publicação externa não verificada.
- Supabase: conexão e projeto exclusivo pendentes. Não usar VINISWIM.
- Banco: aplicar DDL por migração e validar RLS antes do primeiro dado.
- Pesquisa histórica: nenhum resultado publicado/homologado.
- Instalar fluxo de ingestão e provas independentes antes de publicar fatos.

## Próximo marco
Configurar projeto Supabase exclusivo; aplicar migração, aprovar RLS, carregar somente clubes após G0, conectar web/config.js usando apenas chave publicável, testar hospedagem e domínio.
