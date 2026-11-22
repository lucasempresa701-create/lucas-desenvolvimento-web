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

As fotos dos cartões de serviço são ilustrativas e seguem a [licença do Pexels](https://www.pexels.com/license/).

- Corte — [Kevin Bidwell](https://www.pexels.com/photo/back-view-of-a-person-having-a-haircut-9971240/)
- Barba — [Gustavo Fring](https://www.pexels.com/photo/barber-trimming-beard-7447145/)
- Corte e barba — [Antoni Shkraba](https://www.pexels.com/photo/a-barber-shaving-a-man-s-beard-4625615/)

## Demonstração da cafeteria

O [Café Janela da Manhã](projetos/cafeteria/index.html) é fictício. O cardápio pode ser filtrado por categoria, e o pedido de exemplo permite adicionar e remover unidades. O JavaScript soma os preços em centavos e mostra o subtotal em reais. O pedido fica em memória na página e a simulação termina com uma confirmação local.

Os destaques consultam os nomes e preços do cardápio e atualizam o mesmo pedido. Com JavaScript desativado, o cardápio completo continua disponível para leitura.

A [imagem do café](projetos/cafeteria/assets/cafe-da-manha.jpg) foi gerada com a ferramenta ImageGen integrada. A solicitação original foi a seguinte.

> Create a single horizontal 3:2 photorealistic editorial photograph for a fictional Brazilian neighborhood café called Café Janela da Manhã, for use as the website hero. A creamy ceramic cappuccino cup with refined latte art and a small plate of two Brazilian pão de queijo on a light-oak café table, a folded linen napkin, and warm morning sun from a nearby window. Softly blurred background hints at an inviting café with petrol-green glazed tiles and golden wood. Frame both the cup and pão de queijo clearly in the center so they survive a moderately tighter crop. Cheerful, natural editorial food photography, cream, teal, honey wood and soft espresso hues. No lettering, no logo, no watermarks, no people.

O ImageGen também gerou as imagens dos destaques. Foi usado o seguinte trecho comum, seguido da descrição de cada item.

> A single horizontal 3:2 photorealistic editorial product photograph for an original fictional Brazilian neighborhood cafe website. A close three-quarter tabletop composition on light honey oak, warm natural morning window light, cream ceramics and a softly blurred background with a hint of petrol-green tiles. Center the food with breathing room for a tight crop, use convincing natural texture. No people, no text, no logos, no watermarks.

- [Cappuccino](projetos/cafeteria/assets/destaque-cappuccino.jpg) — Only a cappuccino in one cream ceramic cup and saucer, with the surface clearly showing clean latte art. The cup is the unmistakable subject. A simple folded linen napkin may be visible at the edge.
- [Pão de queijo](projetos/cafeteria/assets/destaque-pao-de-queijo.jpg) — Only two golden Brazilian pães de queijo on a small cream ceramic plate. One roll can be halved to reveal its soft, chewy interior. Both rolls are the unmistakable subject. No cup or other food.
- [Bolo de laranja](projetos/cafeteria/assets/destaque-bolo-de-laranja.jpg) — Only a single generous slice of homemade Brazilian orange cake on a small cream ceramic plate. Show the orange-colored crumb and a restrained thin citrus glaze. The slice is the unmistakable subject. No cup or other food.

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
