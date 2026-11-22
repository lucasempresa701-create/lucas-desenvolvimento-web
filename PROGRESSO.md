# Progresso

## Primeira entrega — 18 e 20 de novembro de 2026

- [x] 1. Verificar VS Code, Git, Node.js e npm pelo terminal.
- [x] 2. Apresentar duas opções visuais e registrar a escolha de Lucas.
- [x] 3. Preparar a pasta `portfolio/` dentro do diretório do projeto.
- [x] 4. Criar `index.html`, `style.css`, `script.js`, `assets/` e o README do portfólio.
- [x] 5. Implementar o cabeçalho, a apresentação inicial e a navegação até as seções de serviços e contato, com telefone e e-mail clicáveis.
- [x] 6. Testar no navegador, verificar erros, registrar o primeiro commit Git local e documentar a publicação. A criação do repositório público e o envio dependem de autorização explícita.

A pasta do projeto contém a documentação inicial e a primeira versão do portfólio. O Projeto 2 está registrado no roadmap.

## Diagnóstico do ambiente

| Ferramenta | Comando executado | Versão local |
| --- | --- | --- |
| VS Code | `code --version` | 1.120.0 (x64) |
| Git | `git --version` | 2.54.0.windows.1 |
| Node.js | `node --version` | 24.15.0 |
| npm | `npm --version` | 11.12.1 |

Todos os comandos terminaram com sucesso. No PowerShell, o VS Code e o npm foram chamados pelos executáveis de terminal `code.cmd` e `npm.cmd`.

## Identidade visual — B aprovada

| Opção | Paleta | Tipografia | Direção visual |
| --- | --- | --- | --- |
| A — Azul-noturno | Fundo `#0F172A`, texto `#F1F5F9`, destaque turquesa `#5EEAD4` | Segoe UI com alternativas do sistema | Interface escura, navegação compacta e botão de contato turquesa |
| B — Editorial clara | Fundo `#FFF8F1`, texto `#292524`, destaque terracota `#9A3412` | Georgia nos títulos e Arial na interface e no texto | Fundo quente, títulos serifados e botão de contato terracota |

## Decisões e próximas tarefas

- O portfólio começa com HTML5, CSS3 e JavaScript puro, sem dependências.
- Lucas escolheu a opção B, Editorial clara, em 20 de novembro de 2026, e autorizou a divulgação do telefone e do e-mail informados na página.
- A primeira versão reúne apresentação, criação de sites, manutenção mensal e uma seção de contato. A fachada ilustrativa foi gerada com ImageGen.
- O primeiro commit foi registrado na branch `main` com o endereço de autoria `noreply` da conta GitHub de Lucas, configurado somente neste repositório.
- O site começa com uma página. Quando houver demonstrações prontas, a seção Projetos poderá linkar para uma página separada de cada demonstração.

## Publicação no GitHub

- Lucas autorizou a publicação com os contatos profissionais fornecidos.
- O código está no [repositório público](https://github.com/lucasempresa701-create/lucas-desenvolvimento-web) na branch `main`.
- O GitHub Pages usa o [fluxo Publicar portfólio](.github/workflows/pages.yml) para hospedar os arquivos de `portfolio/`.
- A [primeira publicação](https://github.com/lucasempresa701-create/lucas-desenvolvimento-web/actions/runs/44785491499) terminou com sucesso. A [página pública](https://lucasempresa701-create.github.io/lucas-desenvolvimento-web/) foi aberta no navegador, e os recursos estáticos e os destinos dos links de contato foram conferidos.

## Verificações do portfólio — 20 de novembro de 2026

- Chrome em oito larguras entre 320 e 1440 px, sem rolagem horizontal.
- Navegação por teclado com foco visível, link de salto ao conteúdo e abertura e fechamento do menu móvel. O foco acompanha a navegação e retorna ao botão ao fechar com Escape.
- Links internos, carregamento de imagens e abertura direta de `index.html` verificados. A navegação permaneceu visível com JavaScript desativado.
- Links de telefone e e-mail conferidos no Chrome, incluindo a ordem de foco pelo teclado. A verificação não acionou ligação ou envio de e-mail.
- Console e recursos carregados sem erros durante os testes. Nenhum teste foi feito em dispositivo móvel físico ou leitor de tela.

## Fase 2 — Sites demonstrativos

- Lucas vai concluir os ajustes do CineVault antes de incluí-lo no portfólio.
- A primeira demonstração usa a marca fictícia Barbearia Fio de Rua. A página local apresenta serviços, preços e horários ilustrativos e simula o agendamento sem pedir dados pessoais.
- A versão local do portfólio inclui uma seção Projetos com link para a demonstração.
- No Chrome, a demonstração foi conferida em 11 larguras de 320 a 1440 px, incluindo ida e volta pelo portfólio, navegação por teclado e acesso direto ao arquivo. O formulário bloqueou datas passadas e dias fechados e ofereceu horários compatíveis com a duração do serviço.
- Na revisão, cada serviço ganhou uma foto própria. O formulário passou a listar datas de atendimento e horários de exemplo, com seleção dourada e foco visível.
- A revisão foi testada no Chrome nas mesmas 11 larguras. Foram conferidos o carregamento das três imagens, a navegação por datas, a escolha pelo teclado e o recálculo quando o horário selecionado expira.
- A pedido de Lucas, o formulário voltou a usar o calendário do navegador, com entrada direta da data e horários clicáveis. A data de 23/12/2026 foi verificada no Chrome pelo teclado, junto com os bloqueios de datas passadas e dias fechados.
- A primeira demonstração está pronta para revisão local antes da publicação.
- A cafeteria é a segunda demonstração prevista no roadmap.
