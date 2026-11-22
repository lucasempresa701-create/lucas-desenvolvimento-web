# Portfólio de Lucas Oliveira Santos

Site profissional com apresentação, serviços de criação e manutenção, telefone e e-mail clicáveis. A fachada do café é uma imagem ilustrativa gerada para o portfólio.

## Abrir no Windows

No Explorador de Arquivos, abra a pasta do projeto, entre em `portfolio` e dê dois cliques em `index.html`. Se estiver no PowerShell na raiz do projeto, use `Start-Process .\portfolio\index.html` para abrir o arquivo no navegador padrão. O site funciona localmente sem instalar pacotes.

## Onde editar

| Arquivo | Função |
| --- | --- |
| `index.html` | Textos, seções e links. Um link como `href="#servicos"` aponta para a seção com `id="servicos"`. |
| `style.css` | Cores, fontes e layout. As regras `@media` adaptam a navegação e as colunas para telas estreitas. |
| `script.js` | Abre e fecha o menu em telas estreitas. `aria-expanded` informa o estado do botão aos leitores de tela. Com JavaScript desativado, os links continuam visíveis. |
| `assets/` | Imagens locais do site. |
| `projetos/` | Páginas de demonstração acessíveis pela seção Projetos. |

## Demonstração da barbearia

A [Barbearia Fio de Rua](projetos/barbearia/index.html) é fictícia. A identidade escura com verde e dourado diferencia a demonstração do portfólio editorial claro.

O HTML apresenta serviços com fotografias, durações e horários. O campo Data permite digitar uma data ou selecioná-la no calendário do navegador. Após a escolha do serviço e da data, o formulário apresenta os horários em opções clicáveis, de 30 em 30 minutos, desde que o serviço caiba antes do fechamento. O resumo aparece no navegador, sem coleta de dados ou criação de reservas.

A [fotografia ilustrativa](projetos/barbearia/assets/interior-barbearia.jpg) foi gerada com a ferramenta ImageGen integrada. A solicitação original foi a seguinte.

> Create one horizontal 3:2 photorealistic editorial photograph for the hero of Fio de Rua, a fictional Brazilian neighborhood barbershop website. View from the entrance into a compact, authentic and well-kept barbershop: one black leather vintage barber chair with patina in the right-center foreground, a large rectangular wall mirror with an old walnut frame, an oiled wood counter, neatly arranged combs and tools, and a single warm brass wall lamp. Mid-century detail, limewashed gray-green walls, charcoal and dark olive shadows, amber highlights and soft natural side light, restrained film grain, clean architectural composition. Enough detail and contrast to read at small sizes. No people, no words, no logos, no sign, no watermark.

As três imagens dos serviços também foram geradas com ImageGen. Foi usado o seguinte trecho comum, seguido da descrição correspondente a cada foto.

> A horizontal 3:2 photorealistic editorial photograph for the service cards of a fictional Brazilian neighborhood barbershop. Authentic, contemporary barbershop mood with charcoal and olive backdrop, warm amber side light, and natural skin and hair texture. Strong readable composition designed for a small website card, with the service centered and safe to crop. No text, no logos, no watermark.

- [Corte](projetos/barbearia/assets/servico-corte.jpg) — Show the back and three-quarter side of an adult male customer's head. Focus tightly on a well-defined low fade from the nape to short textured dark hair, with a barber's comb and hand subtly in frame. Make the haircut the clear subject, with the lower face outside the frame.
- [Barba](projetos/barbearia/assets/servico-barba.jpg) — Show a mid-close side profile of an adult with a short, dense dark beard, giving priority to the sharply defined cheek and neckline. A barber's hand gently holds a comb near the beard; the top of the head is out of frame. The sculpted beard must be unmistakably the subject.
- [Corte e barba](projetos/barbearia/assets/servico-corte-e-barba.jpg) — Show a chest-up three-quarter portrait of a different adult male customer with a crisp dark textured fade and a neatly shaped medium-length beard. Frame the full top of his head and jaw together so both the haircut and the beard are equally obvious, with a plain dark cape over his shoulders.

## Publicação no GitHub

A autoria local já usa o endereço `noreply` do GitHub. Para configurar um repositório remoto pela primeira vez, crie um repositório vazio no GitHub, sem README, licença ou `.gitignore` gerados. Na raiz do projeto, configure a URL real e envie a branch `main`.

```powershell
git remote add origin https://github.com/SEU-USUARIO/lucas-desenvolvimento-web.git
git push -u origin main
```

`git remote add` guarda o endereço do repositório. `git push` envia os commits locais para o GitHub. Para hospedar a página, selecione **GitHub Actions** em **Settings → Pages** no repositório. O fluxo [Publicar portfólio](../.github/workflows/pages.yml) publica a pasta `portfolio/` quando ela muda na branch `main` ou quando é executado manualmente na aba **Actions**.

- [Enviar um repositório local para o GitHub](https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
- [Configurar o endereço de e-mail do commit](https://docs.github.com/pt/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)
- [Configurar a origem de publicação no GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Origem da imagem

`assets/fachada-cafe.jpg` foi gerada com a ferramenta ImageGen integrada. A imagem representa um café fictício. A solicitação original foi:

> Photorealistic portrait-format architectural editorial photograph for a Brazilian freelance web developer’s portfolio hero. Show one inviting fictional independent café storefront on a quiet Brazilian neighborhood street: burnt-terracotta pilasters and wood-and-glass shopfront, pale warm stucco, a potted olive-green plant, a simple wooden chair, and a hint of a warmly lit counter inside. Eye-level, near-frontal composition, focal doorway centered, frame filled with the façade, natural afternoon daylight and gently defined shadows, refined architectural magazine photography with natural material detail and restrained grain. Warm cream and terracotta palette with dark wood. 4:5 portrait composition safe to crop at the edges. No people, lettering, logos, brand marks, or watermarks.
