# Contratos de dados — versão 0.1

## Universo e tempo
`club_id`: identificador estável, nunca derivado do nome vigente.
`club_name`, `state`, `aliases`, `federation_id`, `membership_2026`: entidade clube e seus nomes históricos.
`season`: ano civil de referência, inteiro de 1971 até o ano corrente.
Uma linha ausente não significa participação ou resultado zero.

## Registro genérico
Cada observação carrega `record_id`, `club_id`, `season`, `metric`, `value` (numérico ou nulo), `unit`, `observation_status` (verified|estimated|disputed|missing|pending), `source_id`, `source_page`, `accessed_at`, `methodology`, `reviewer_id`, `reviewed_at`, `revision`.

## Classificações
Chave: competição + edição + clube. Campos: competition_id, season, tier, final_rank, points, played, wins, draws, losses, regulation_system, participation_status. Classificações e séries históricas devem respeitar mudanças de regulamento. Não criar colocação nacional conjunta arbitrária entre divisões.

## Títulos
Chave: clube + competição + edição + conquista; category = estadual|regional|nacional|internacional. Modalidade masculina profissional como padrão documentado. Diferenciar campeonato e torneio, primeiro e segundo níveis, títulos reconhecidos retrospectivamente, e evitar duplicações por mudanças de nomenclatura. Contagem acumulada é derivada apenas de títulos verificados.

## Torcida
survey_id, fieldwork_start, fieldwork_end, published_at, institute, methodology, sampling_frame, geography, population, sample_size, margin_of_error, club_id, percentage, estimated_supporters. Data é da pesquisa, não de uma suposta série anual. Sem interpolação automática.

## Finanças
statement_id, entity_id, club_id, fiscal_year, period_start, period_end, reporting_standard, audit_status, consolidation_scope, currency, unit_scale, revenue_gross, revenue_net, net_assets_book, total_liabilities, gross_debt, net_debt, financial_debt, tax_debt, cash_equivalents. Receita, faturamento e patrimônio líquido têm definições próprias. Dívida total e passivo total não são sinônimos. SAF e associação não devem ser somadas sem eliminar operações intragrupo.

## Inflação e unidades
Guardar valor nominal, moeda, escala, exercício, data-base do índice e série do índice (ex.: IPCA) com versão. Conversão histórica de moedas brasileiras requer regras específicas antes de aplicar IPCA.

## Fonte
source_id, title, publisher, source_type, original_url, archive_url, publication_date, accessed_at, page_or_table, file_checksum, usage_rights, retrieval_notes.

## Histórico
Toda alteração guarda autor, timestamp, antes/depois, justificativa e revisão. Dados contestados não são apagados: tornam-se versões substituídas.
