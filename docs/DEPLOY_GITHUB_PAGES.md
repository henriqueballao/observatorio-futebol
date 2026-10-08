# Publicação Github Pages

1. O workflow .github/workflows/pages.yml faz o deploy de web/ por push na main.
2. Em Settings → Pages → Build and deployment, selecionar **GitHub Actions**.
3. Repositório privado pode exigir suporte da modalidade da conta para GitHub Pages; confirmar na interface do GitHub.
4. Quando o domínio estiver comprado, configurar **Custom domain** e DNS conforme orientações do provedor e habilitar HTTPS.
5. Para um domínio com tráfego público e GitHub Pages indisponível para repositório privado, usar hospedagem externa conectada ao GitHub, mantendo o código privado.
6. Supabase é backend separado: API exige projeto exclusivo e URL/chave publicável em web/config.js.
7. Catálogo local é provisório, não habilita estatísticas até homologação.
