# Decisões arquiteturais — 2026-10-08

D001: universo inicial fixo dos participantes A/B/C em 2026; composição pendente de homologação oficial.
D002: histórico do clube segue identidade estável mesmo em anos fora das três divisões.
D003: fonte, evidência e método são obrigatórios por valor publicado.
D004: estados verified, estimated, disputed, pending e missing são distintos.
D005: dados contábeis preservam associação e SAF separadas até haver perímetro de consolidação explícito.
D006: valores corrigidos derivados de séries identificadas, nunca substituindo o nominal.
D007: painéis comparativos não fundem classificação de A, B e C em posição única.
D008: desenvolvimento em fases: governança → homologação → importação → gráficos → publicação.

D009 (2026-10-08): operação inicial sem Supabase; GitHub guarda dados versionados e web/facts.json publica apenas registros homologados. Migração SQL preservada para uso futuro. Não reutilizar bancos de outros projetos.
