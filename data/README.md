# Dados versionados — operação sem Supabase

- `web/clubs.json`: universo preliminar da interface; não significa homologação.
- `data/research/`: registros coletados e evidências, não publicados.
- `data/review/`: conferência independente.
- `web/facts.json`: **somente** registros verificados e com source_id, researcher_id, reviewer_id distintos.
- Ausência permanece ausência; não se usa valor zero como lacuna.
- Toda alteração entra via GitHub e fica auditável pelo histórico de commits.
- A futura migração ao Supabase deverá importar exatamente os dados homologados, mantendo IDs, fontes e revisões.
