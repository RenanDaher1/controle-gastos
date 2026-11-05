# Relatório · Controle de Gastos

Nome: Renan Daher Franceschelli 
Modelo usado: Gemini 3.5 Flash Lite

## Passo 1 · AGENTS.md
1.1 O que o /init descobriu sozinho sobre o projeto?
Resposta: Identificou a estrutura base de um projeto React com Vite, incluindo os ficheiros de configuração padrão, dependências do Node.js e a organização inicial das pastas

1.2 Qual regra você adicionou ao AGENTS.md e por quê?
Resposta: Adicionei a regra para o agente comunicar e documentar o código em português e não alterar diretamente o ficheiro de relatório, garantindo que as respostas do RELATORIO.md fossem geradas e controladas por mim.

## Passo 2 · Estrutura
2.1 Quais arquivos o plano criou ou alterou?
Resposta: O plano limpou o template padrão do App.jsx e estruturou os novos componentes modulares na pasta src/components/: GastoForm.jsx, GastoLista.jsx, GastoTotal.jsx e GastoFiltro.jsx, juntamente com os respetivos ficheiros de estilo.

2.2 Qual regra do AGENTS.md você viu sendo aplicada?
Resposta: A modularização limpa do código em componentes individuais e a utilização de nomes descritivos em português, alinhados com os padrões definidos nas regras do projeto que eu criei.

## Missão 1 · Adicionar
M1.1 Como o app trata "12,50" com vírgula? Quem decidiu isso: você ou o agente?
Resposta: O app substitui a vírgula por ponto no momento do parsing numérico para garantir que valores como "12,50" sejam interpretados corretamente como 12.50. Essa necessidade de tratamento de formato foi identificada e sugerida pelo agente no plano e aprovada por mim.

M1.2 Quantas tool calls a missão usou?
Resposta: Nenhuma chamada de ferramenta externa foi utilizada nesta missão, pois o trabalho foi executado diretamente pelo modelo de IA gerando/editando o código localmente.

## Missão 2 · Total
M2.1 Quanto deu 0,10 + 0,20 no app?
Resposta: Deu exatamente R$ 0,30, isso se deve ao tratamentov e arredondamento implementado no código.
M2.2 Por que 0.1 + 0.2 não dá exatamente 0.3 no JavaScript?
Resposta: Porque o JavaScript utiliza um padrão de ponto flutuante de dupla precisão (binário), o que faz com que frações decimais simples como 0.1 e 0.2 não possam ser representadas de forma exata em binário, resultando em pequenas imprecisões (como 0.30000004). (tive que pesquisar essa)

## Missão 3 · Remover
M3.1 O agente mudou algo que você não pediu? O quê?
Resposta: Não, o agente seguiu estritamente o escopo planejado para a missão, limitando-se a implementar a lógica de exclusão por ID e a integração dos componentes correspondentes.

M3.2 Como o código sabe qual gasto remover?
Resposta: Através do ID único (id) atribuído a cada gasto no momento da criação (geralmente usando Date.now()). A função de remoção utiliza o método .filter() para criar um novo array mantendo apenas os itens cujos IDs sejam diferentes daquele que foi solicitado para exclusão.

## Missão 4 · Filtrar
M4.1 Qual foi o seu prompt da tentativa B?
Resposta: Planeje um filtro por categoria (Alimentação, Transporte, Lazer, Outros e uma opção 'Todas') acima da lista de gastos. O filtro deve exibir apenas os gastos pertencentes à categoria selecionada, e o totalizador deve recalcular e mostrar apenas a soma dos gastos filtrados no momento.

M4.2 Qual tentativa gerou o melhor plano, A ou B? Por quê?
Resposta: A Tentativa B (o prompt estruturado acima) gerou o melhor plano, pois detalhou de forma muito mais clara a listagem derivada (gastosFiltrados), garantindo que tanto a exibição na tabela quanto o totalizador respondessem em conjunto à categoria selecionada.

## Bônus · Salvar
B.1 Onde o localStorage guarda os dados?
Resposta: No armazenamento local do próprio navegador web, associado à origem da aplicação, persistindo mesmo após fechar a aba ou recarregar a página.

B.2 Por que os gastos não aparecem em outro navegador?
Resposta: Porque o localStorage é isolado por navegador e por domínio.

## Reflexão final
R.1 Sem olhar o código, explique como um dos seus componentes recebe e altera os gastos.
Resposta: O componente principal (App.jsx) mantém o estado centralizado da lista de gastos e passa esses dados para os componentes filhos (como o GastoLista ou GastoTotal) através de props. Para alterar os dados, o componente pai passa funções de manipulação (como adicionar ou remover) também via props, permitindo que o filho dispare atualizações que modificam o estado global.

R.2 Em que momento você aceitou algo sem entender?
Resposta: Em alguns momentos da configuração inicial de permissões no terminal do macOS (como os comandos chown para ajustar os acessos das pastas de configuração), onde precisei aplicar correções de sistema antes de compreender totalmente a restrição de privilégios do ambiente. De resto, o planer explicou perfeitamente como tudo seria executado, além disso, eu usei outra IA para me auxilixar nas construções dos prompts, de modo que as respostas retornadas ficassem mais assertivas e consequentemente, reduzindo a quantidade de tokens gastos.

R.3 Quais decisões foram suas e quais foram do agente?
Resposta: As decisões de escopo, regras de negócio e validações desejadas (como as categorias exigidas e a persistência) foram minhas. A estruturação técnica do código, a sintaxe dos hooks do React (useState, useEffect) e a formatação exata foram propostas e implementadas pelo agente.

R.4 O que continuaria valendo se você trocasse o modelo?
Resposta: Acho que não mudaria nada na parte de execução, mas sim na forma de se comunicar. Por exemplo, modelos com uma linguagem mais voltada para documentação técnica, porvavelmente me mandaria uma resposta muito mais robusta em relação à quantidade de elemetos técnicos que seriam utulizados.
