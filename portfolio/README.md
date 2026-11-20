# Portfólio de Lucas Oliveira Santos

Primeira versão do site profissional, com apresentação, serviços de criação e manutenção e uma seção para o futuro canal de contato. A fachada do café é uma imagem ilustrativa gerada para o portfólio.

## Abrir no Windows

No Explorador de Arquivos, abra a pasta do projeto, entre em `portfolio` e dê dois cliques em `index.html`. Se estiver no PowerShell na raiz do projeto, use `Start-Process .\portfolio\index.html` para abrir o arquivo no navegador padrão. O site funciona localmente sem instalar pacotes.

## Onde editar

| Arquivo | Função |
| --- | --- |
| `index.html` | Textos, seções e links. Um link como `href="#servicos"` aponta para a seção com `id="servicos"`. |
| `style.css` | Cores, fontes e layout. As regras `@media` adaptam a navegação e as colunas para telas estreitas. |
| `script.js` | Abre e fecha o menu em telas estreitas. `aria-expanded` informa o estado do botão aos leitores de tela. Com JavaScript desativado, os links continuam visíveis. |
| `assets/` | Imagens locais do site. |

## Publicação no GitHub

Antes do primeiro commit, configure a autoria neste repositório. Para usar o endereço `noreply` da sua conta, confira **Settings → Emails** no GitHub. Depois de revisar o conteúdo e autorizar o envio, crie no GitHub um repositório vazio, sem README, licença ou `.gitignore` gerados. Na raiz do projeto, configure a URL real e envie a branch `main`.

```powershell
git remote add origin https://github.com/SEU-USUARIO/lucas-desenvolvimento-web.git
git push -u origin main
```

`git remote add` guarda o endereço do repositório. `git push` envia os commits locais para o GitHub. A hospedagem da página é uma etapa separada. Mantendo `index.html` em `portfolio/`, o GitHub Pages pode publicar essa pasta por meio de um fluxo do GitHub Actions.

- [Enviar um repositório local para o GitHub](https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
- [Configurar o endereço de e-mail do commit](https://docs.github.com/pt/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)
- [Configurar a origem de publicação no GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Origem da imagem

`assets/fachada-cafe.jpg` foi gerada com a ferramenta ImageGen integrada. A imagem representa um café fictício. A solicitação original foi:

> Photorealistic portrait-format architectural editorial photograph for a Brazilian freelance web developer’s portfolio hero. Show one inviting fictional independent café storefront on a quiet Brazilian neighborhood street: burnt-terracotta pilasters and wood-and-glass shopfront, pale warm stucco, a potted olive-green plant, a simple wooden chair, and a hint of a warmly lit counter inside. Eye-level, near-frontal composition, focal doorway centered, frame filled with the façade, natural afternoon daylight and gently defined shadows, refined architectural magazine photography with natural material detail and restrained grain. Warm cream and terracotta palette with dark wood. 4:5 portrait composition safe to crop at the edges. No people, lettering, logos, brand marks, or watermarks.
