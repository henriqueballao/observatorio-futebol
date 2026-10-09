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

## M1 / 2026-10-08
- Agente 01: pesquisa primária CBF registrada em data/research/2026-10-08-g0-cbf-primary.md.
- Conferência preliminar das Séries A e B: 20/20 nominalmente, ainda sem revisão independente.
- Série C: relação nominal integral ainda não confrontada com a tabela básica.
- Agente 06: checklist de revisão criado em data/review/2026-10-08-g0-checklist.md; pendente.
- Gate G0: PENDING; nenhuma informação histórica homologada ou publicada por este marco.

## M1 — atualização documental 2026-10-08
- Série C: 20 nomes cotejados com os dez confrontos da rodada 10 divulgados pela CBF em 13/06/2026.
- Registro: data/research/2026-10-08-g0-serie-c-crosscheck.md.
- Gate G0 segue pendente de revisão independente e checagem de identidade jurídica.

## M1 — rótulos CBF complementares, 2026-10-08
- Pesquisa adicional: 13 correspondências de rótulos esportivos (7 Série B, 6 Série C) registradas em data/research/2026-10-08-g0-aliases-bc-cbf.md, com fontes CBF e encaminhamento ao conferente.
- Extração via trechos indexados de páginas dinâmicas CBF; reabertura integral indisponível na sessão. Evidência preliminar, sem homologação; identidade jurídica/SAF não inferida.
- G0/G6 continuam PENDING. Nenhum fato histórico publicado.

## M1 — 2026-10-09: três REC 2026 e confronto de origens 2025
- Branch de coleta: `research/g0-rec-serie-c-2026-10-09`. Transcrição dos REC oficiais A/B/C 2026 em `data/research/2026-10-09-g0-rec-cbf-60-denominacoes-origens.md`: 20 por série, 60 IDs distintos, sem divergência de UF/divisão entre os anexos de participantes e o catálogo preliminar. A transcrição não equivale a homologação.
- Confronto complementar com fontes CBF 2025 em `data/research/2026-10-09-g0-origens-2025-confronto-cbf.md`: quatro acessos C 2025 → B 2026 (Ponte Preta, Londrina, Náutico, São Bernardo); quatro descensos A 2025 → B 2026 (Ceará, Fortaleza, Juventude, Sport).
- Duas inconsistências dos REC permanecem registradas: Criciúma com origem A no REC B 2026 apesar de participação comprovada na B 2025; Guarani com UF SP na p.16 e SC na p.17 do REC C 2026. Não corrigir fonte original por inferência.
- Existe parecer parcial A/C em `data/review/2026-10-09-g0-review-a-c.md`; exigir confirmação documental de revisor distinto antes de contar como G6. Conferência independente da B e auditoria do universo completo ainda pendentes.
- **G0/G6: PENDING.** `web/clubs.json` permanece preliminar; `web/facts.json` vazio. M2–M6 sem importação de fatos homologados.
