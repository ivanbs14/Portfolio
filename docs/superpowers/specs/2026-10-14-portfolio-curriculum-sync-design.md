# Sincronização do portfólio com o currículo

## Objetivo

Atualizar o conteúdo profissional do portfólio para refletir o currículo em português fornecido em `Ivan_FullStack_PT.docx.txt`, com destaque para o encerramento do vínculo com a LongView em setembro de 2026 e para as competências adicionadas recentemente. O conteúdo deve continuar conciso e adequado ao layout atual do site.

## Escopo

### Perfil

- Manter nome, localização, telefone e e-mail atuais.
- Atualizar o LinkedIn exibido e seu destino para `linkedin.com/in/ivanbarbosa2`.
- Atualizar o resumo em português e produzir uma versão equivalente em inglês.
- Destacar desenvolvimento full-stack, liderança técnica, bancos SQL e NoSQL, cloud, CI/CD e IA generativa sem transformar o resumo em uma cópia extensa do currículo.

### Experiência profissional

- Alterar o período da LongView para `Jun/2025 – Set/2026` em português e `Jun/2025 – Sep/2026` em inglês.
- Marcar a LongView como vínculo encerrado, removendo o indicador visual de experiência ativa.
- Sincronizar os destaques das quatro experiências com os fatos presentes no currículo:
  - LongView: Next.js, NestJS, TypeScript, PostgreSQL, MongoDB, APIs REST, performance, escalabilidade, arquitetura modular, code review, CI/CD, testes, AWS, Azure OpenAI e OpenAI API.
  - Hausey: liderança técnica, planejamento, arquitetura, padrões técnicos, Next.js, NestJS, PostgreSQL, MongoDB, code review, CI/CD e AWS.
  - Bugaboo: React, TypeScript, Tailwind CSS, Styled Components, MongoDB, responsividade, acessibilidade e APIs REST.
  - CodeDraw: React, Styled Components, Node.js, MongoDB, APIs, Docker, GitLab CI e Git.
- Adaptar o texto ao espaço do portfólio em vez de copiar os parágrafos literalmente.
- Manter equivalência semântica entre português e inglês.

### Matriz técnica

- Manter as categorias e o componente existentes.
- Adicionar MongoDB e NoSQL à categoria de bancos de dados.
- Adicionar Azure à categoria de cloud.
- Representar testes automatizados, arquitetura modular e code review na categoria de engenharia/DevOps já exibida como `Cloud / DevOps`.
- Preservar as competências existentes que não contradizem o currículo, incluindo Prisma, TypeORM e os itens de IA.

### Conteúdo preservado

- Projetos e respectivos links.
- Layout, estilos, componentes e navegação.
- Métricas existentes.
- Links de currículo em português e inglês atualizados anteriormente.
- Formação e idiomas não serão adicionados, pois o layout atual não possui seções correspondentes e isso ampliaria o escopo visual.

## Arquitetura e fluxo de dados

Os dados-base em inglês continuarão em `src/data/portfolio.ts`. As traduções gerais continuarão em `src/components/portfolio/language-provider.tsx`, e a versão portuguesa das experiências continuará em `src/components/portfolio/experience-timeline.tsx`. Nenhum componente novo será criado e não haverá alteração no formato público dos dados.

O seletor de idioma continuará determinando o resumo e a linha do tempo exibidos. A atualização manterá os arrays de experiência em inglês e português na mesma ordem para preservar o mapeamento por índice já usado pelo componente.

## Tratamento de inconsistências

- O currículo fornecido é a fonte de verdade para datas, vínculo atual, histórico profissional, competências e LinkedIn.
- Informações adicionais já presentes no portfólio serão mantidas quando não conflitarem com o currículo.
- Como a LongView terminou em setembro de 2026, todas as experiências ficarão com `isActive: false`.

## Validação

- Buscar datas, URL do LinkedIn e competências antigas para confirmar que não restaram valores divergentes.
- Executar `npm run lint` e registrar separadamente eventuais problemas preexistentes.
- Executar `git diff --check`.
- Executar o build do Next.js para validar tipos e geração da aplicação.
- Revisar o diff para confirmar que projetos, layout e links dos currículos não foram alterados inadvertidamente.
