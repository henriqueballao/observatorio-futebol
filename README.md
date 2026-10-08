# Observatório do Futebol Brasileiro

Pesquisa histórica comparativa dos **60 clubes integrantes das Séries A, B e C em 2026**, acompanhados entre **1971 e 2026**.

## Dimensões
Torcida, receitas, títulos regionais, títulos nacionais, desempenho nas divisões, patrimônio e endividamento.

## Invariantes
- O conjunto de referência é fixado pela temporada de 2026 e deverá ser homologado contra as tabelas oficiais da CBF.
- Falta de dado não é zero.
- Cada registro anual deve apontar para evidência, fonte, data e metodologia.
- Estimativas e observações diretas nunca são apresentadas como equivalentes.
- Valores monetários devem distinguir nominal, moeda de origem e série corrigida.
- Nenhum agente publica dados sem conferência independente.
- SAF e associação são unidades contábeis distintas: consolidação só com perímetro declarado.

## Organização
`canonical/`: contratos, protocolo, decisões, gates e estado.
`agents/`: instruções de pesquisa, revisão e publicação.
`docs/`: arquitetura e plano de entregas.
`data/`: dados brutos, evidências, estágio e registros homologados.
`db/`: esquema de armazenamento.
`web/`: aplicação web, construída na fase de implementação.

**Situação:** estrutura e governança iniciadas. Nenhuma estatística histórica está homologada por este commit.
