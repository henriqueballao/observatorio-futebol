# Supabase → GitHub → domínio próprio

1. Criar projeto Supabase **exclusivo** para observatorio-futebol; não reutilizar o projeto do VINISWIM.
2. Aplicar db/001_schema.sql por migração versionada, conferir políticas RLS antes de expor API.
3. Homologar universo dos 60 (G0) e carregar em clubs; não inserir catálogo preliminar como verificado.
4. Apenas chave publishable/anon no web/config.js; jamais publicar service_role ou secrets.
5. Publicar diretório web/ por GitHub Pages (branch pages ou GitHub Actions) ou host estático próprio.
6. Depois apontar DNS do domínio adquirido (CNAME/A conforme provedor) e habilitar HTTPS.
7. Garantir bloqueio de escrita por perfis públicos e conferência independente antes de alterar status de fatos.
8. Para publicação contínua, criar workflow de deploy e ambiente por branch, sem dados falsos.

O projeto Supabase ainda não foi criado/aplicado. O banco somente recebe dados efetivamente coletados e revisados.
