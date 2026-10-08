# Operação sem Supabase — decisão D009

## Arquitetura atual
GitHub privado guarda código e dados. A interface estática lê `web/clubs.json` e `web/facts.json`. Nenhum projeto Supabase é usado. Workflow Pages prepara a publicação de `web/`, mas a ativação do host é separada.

## Entrada de dados
1. Pesquisador registra fonte e observações em `data/research/`.
2. Conferente independente verifica contra o original e registra parecer em `data/review/`.
3. Auditor executa G0–G7.
4. Publicador aprova somente status verified; `web/facts.json` é uma visão derivada, não repositório primário.
5. Toda alteração exige commit/PR e verificação de gate.

## Hospedagem e domínio
Primeira opção: GitHub Pages em Settings → Pages → GitHub Actions, **se permitido no plano com repositório privado**. Caso contrário, hospedar o diretório web em provedor estático gratuito que suporte repositórios privados, sem expor arquivos de pesquisa.
Depois configurar CNAME e HTTPS no domínio adquirido.

## Migração posterior
Preservar `db/001_schema.sql`; importar fontes, clubes e fatos revisados em projeto exclusivo Supabase. Sem reutilizar VINISWIM.
