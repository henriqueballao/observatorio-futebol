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
- GitHub Pages: confirmar ativação em Settings → Pages; publicação externa não verificada. Em repositório privado depende de elegibilidade do plano.
- Decisão D009: operar temporariamente com arquivos JSON versionados no GitHub; Supabase adiado por limite de projetos gratuitos. Não usar VINISWIM, Financeiro ou PCQO.
- Banco: aplicar DDL por migração e validar RLS antes do primeiro dado.
- Pesquisa histórica: nenhum resultado publicado/homologado.
- Instalar fluxo de ingestão e provas independentes antes de publicar fatos.

## Próximo marco
Homologar G0; pesquisar e validar lotes; gerar web/facts.json apenas de registros verificados. Ativar hospedagem GitHub Pages se elegível, ou alternativa gratuita compatível com repositório privado. Supabase permanece previsto, não ativo.
