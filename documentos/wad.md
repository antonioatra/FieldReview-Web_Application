<img src="../assets/logointeli.png">


# WAD - Web Application Document - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final_**

## Nome do Grupo

#### Nomes dos integrantes do grupo



## Sumário

[1. Introdução](#c1)

[2. Visão Geral da Aplicação Web](#c2)

[3. Projeto Técnico da Aplicação Web](#c3)

[4. Desenvolvimento da Aplicação Web](#c4)

[5. Testes da Aplicação Web](#c5)

[6. Estudo de Mercado e Plano de Marketing](#c6)

[7. Conclusões e trabalhos futuros](#c7)

[8. Referências](c#8)

[Anexos](#c9)

<br>


# <a name="c1"></a>1. Introdução (sprints 1 a 5)

&emsp; O Climate FieldView faz parte do portfólio de soluções digitais da Bayer Crop Science, que visa ajudar os agricultores a tomarem decisões mais informadas e precisas em suas operações agrícolas. A plataforma oferece uma variedade de ferramentas e recursos para monitorar e gerenciar as atividades agrícolas, desde o planejamento até a colheita. A problemática trazida pelo parceiro se dá à medida que os agentes responsáveis para a instalação e suporte presencial do produto nas fazendas (os chamados Promotores Técnicos Digitais) muitas vezes não possuem a capacitação técnica necessária para realizar tais atendimentos. 

&emsp; A solução desenvolvida busca ser uma ferramenta para auxiliar na formação e capacitação desses profissionais, permitindo que eles tenham acesso a informações técnicas e práticas sobre o uso do Climate FieldView de maneira fácil e rápida. A plataforma oferece diferentes trilhas do conhecimento sobre as diferentes funcionalidades do sistema além de um sistema de pesquisa que permite que o usuário encontre rapidamente o conteúdo desejado. 

&emsp; Além disso, a plataforma conta com um sistema de gamificação e pontos que visa incentivar o aprendizado e a aplicação prática dos conhecimentos adquiridos, possibilitando tanto que os promotores técnicos se capacitem para realizar atendimentos mais qualificados, quanto que a liderança tenha um controle sobre o nível de conhecimento dos seus promotores.


# <a name="c2"></a>2. Visão Geral da Aplicação Web (sprint 1)

## 2.1. Escopo do Projeto (sprints 1 e 4)

### 2.1.1. Modelo de 5 Forças de Porter (sprint 1)

*Preencha com até 400 palavras*

*Posicione aqui o modelo de 5 Forças de Porter para sustentar o contexto da indústria.*

### 2.1.2. Análise SWOT da Instituição Parceira (sprint 1)

&emsp; A Bayer CropScience é líder no agronegócio por seu ecossistema completo e forte presença no mercado, com destaque para o FieldView, solução digital que a diferencia da concorrência. No entanto, seu foco em grandes produtores pode limitar seu alcance entre pequenos agricultores. A empresa enfrenta ameaças como questões ambientais e processos legais, que afetam sua reputação. Por outro lado, há oportunidades na expansão de soluções sustentáveis, como o projeto PRO Carbono, e parcerias com universidades, fortalecendo sua inovação e presença no setor frente a concorrentes com tecnologias emergentes.


<img src="../assets/analiseSWOT.png">

### 2.1.3. Solução (sprints 1 a 5)

*Explique detalhadamente os seguintes aspectos (até 60 palavras por item):*
1. Problema a ser resolvido
2. Dados disponíveis (mencionar fonte e conteúdo; se não houver, indicar “não se aplica”)
3. Solução proposta
4. Forma de utilização da solução
5. Benefícios esperados
6. Critério de sucesso e como será avaliado

### 2.1.4. Value Proposition Canvas (sprint 1): 
Canvas de Proposta de Valor — Solução para Capacitação de Promotores
Segundo Pereira (2024), o modelo de negócio criado por Alexander Osterwalder, Yves Pigneur e Alan Smith denominado “Value Proposition Canvas” é uma ferramenta desenhada para garantir que o produto atenda às necessidades dos clientes, traga-lhes benefícios e resolva seus problemas, estruturando como o serviço agrega valor a eles. Para isso, a ferramenta utiliza duas seções do Business Model Canvas, a saber: “Segmentos de Clientes” e “Propostas de Valor”.

Nesse sentido, o Value Proposition Canvas tem dois lados. À direita está um perfil apresentado pelo cliente mostrando suas tarefas, suas dores e seus ganhos. O lado esquerdo inclui a proposta de valor que deve ser entregue ao cliente, abrangendo produtos e serviços, criadores de benefícios e analgésicos (este é o mapa de valor) (Pereira, 2024).

Portanto, é importante descrever o conceito geral de cada tópico, mostrar a relação entre eles e como eles se afetam direta ou indiretamente. Portanto, os tópicos subsequentes abordarão elementos inerentes ao Value Proposition Canvas da solução proposta para o projeto atual, iniciando pelo perfil do cliente. Além disso, a Figura 3 mostra esses elementos visualmente:

![CanvasProspostaDeValor](https://github.com/user-attachments/assets/824cd9d9-3e3f-40d5-95b7-24f5adbc3a0c)

PERFIL DO CLIENTE
Tarefas do Cliente
Neste tópico, deve-se observar o que o cliente já faz no seu dia a dia antes da proposta de solução, auxiliando no entendimento de como é possível agir perante a problemática em questão (Pereira, 2024). No contexto da capacitação de promotores, o cliente realiza as seguintes tarefas:

**Utilizar o site de “Ajuda Rápida” do Climate FIELDVIEW:** O PTD(Promotor Técnico Digital) depende de um site que não foca em ensinar adequadamente ele sobre o uso do Climate FieldView.


**Contactar alguém de dentro da Climate FIELDVIEW para buscar suporte:** Quando não consegue receber a ajuda do site de “Ajuda Rápida”, é exigido que ele solicite contato com assistência da própria Climate FieldView, de forma que se torna um trabalho mais demorado e insatisfatório para o cliente, que seria o fazendeiro.


**Depender dos feedbacks dos usuários do Climate FIELDVIEW sobre os promotores:** para que o Consultor de Sucesso do Cliente tenha ciência da capacitação e desempenho do PDT, ele necessita da avaliação do cliente, no caso o fazendeiro que contrata desse serviço. 


Ganhos
No segmento de ganhos, são elencados todos os benefícios esperados pelo cliente, ou seja, suas aspirações em relação ao seu contexto. Esta parte foca naquilo que o cliente almeja alcançar no escopo em questão, devendo cada ganho ser viabilizado por um criador de ganho correspondente (Pereira, 2024). Assim, foram identificados os seguintes ganhos:
Aprimorar competências específicas: com uma análise feita pelo Consultor de Sucesso do Cliente, ele pode mandar ao PTD especifico uma trilha que ele pode se preocupar mais. 


**Elevar a excelência no atendimento ao cliente:** suprir a insatisfação dos clientes quanto ao atendimento do PTD’s.


**Eliminar a dependência de canais de comunicação ineficazes:** evitar o uso de canais de comunicações como WhatsApp, estabelecendo um meio de comunicação oficial e seguro.


**Melhorar as capacidades técnicas exigidas dos promotores:** trazer trilhas intuitivamente, que ensinem e capacitem os PDT’s a fazerem seu trabalho eficientemente.


**Ter auxílio rápido e fácil:** fazer uma plataforma que tenha auxílios rápidos para os PTD’s em caso de dúvidas durante o trabalho. 


**Acompanhar de forma precisa o aprendizado e o engajamento dos promotores:** parte feita para o Consultor de Sucesso do Cliente saber como ando o aprendizado dos Promotores.

Dores
No segmento de dores, há a definição daquilo com que o cliente sofre em decorrência da falta de uma solução efetiva ao seu problema (Pereira, 2024). As dores identificadas foram:
**Não há nenhuma plataforma de capacitação adequada e ágil:** não tem uma plataforma que torne os Promotores capacitados ou possa os ajudar rápido e efetivamente.


**Ausência de um sistema de monitoramento da capacitação dos promotores:** o Consultor não sabe o nível de capacitação dos Promotores, enviados a campo.


**Grandes diferenças de níveis de conhecimento entre promotores:** os Promotores mais velhos tem maior nível quanto ao quesito técnico que os mais novos.


**Falta de um guia prático de instruções sobre as ferramentas:** os guias atuais não apresentam serem intuitivos e nem rápido de se entender.


**Sem incentivo para aprendizado:** não há nada que traga vontade de aprender ao promotor, além de se tornar mais capacitado.



MAPA DE VALOR
A partir da identificação do perfil do cliente, é necessário mapear o melhor caminho pelo qual suas necessidades serão atendidas. Assim, explicitam-se os criadores de ganho, aliviadores de dor e os produtos e serviços propostos.
Produtos e Serviços
No segmento de produtos e serviços, há a identificação daquilo que deve ser entregue ao cliente, por meio de funcionalidades definidas e claras (Pereira, 2024). No presente contexto, propõe-se:
Plataforma web com trilhas de aprendizado voltadas aos promotores, com foco na melhoria de sua capacitação em campo: trazer uma solução web, de fácil acesso.


**Sistema com acessos distintos para o Consultor de Sucesso do Cliente e para os promotores, facilitando a avaliação dos promotores pelo consultor:** trazer uma área destinada ao consultor, para saber sobre os promotores, e outra para os promotores com suas trilhas a serem feitas.


**Sistema de classificação por pontos em provas de cada trilha realizada:** Sistema de pontuação conquistada por meio de provas sobre as trilhas para dedicação maior pelos promotores.


**Espaço dedicado às trilhas, com acesso intuitivo e ágil:** trazer trilhas de fácil entendimento e intuitivas para os promotores poderem seguir e aprender.


Criadores de Ganhos
Os criadores de ganhos identificam o que será implementado para gerar satisfação ao cliente, estando conectados diretamente aos ganhos elencados no perfil do cliente (Pereira, 2024). Assim, temos:
Trilhas de capacitação para os promotores, com recursos visuais e auditivos, visando aprimorar suas habilidades e a qualidade do seu trabalho: trilhas com métodos de ensino diversos para auxiliar os PDT’s a serem capacitados e elevar sua qualidade de atendimento.


**Permitir que o Consultor possa indicar trilhas específicas ao promotor, caso necessário:** permitir que os Consultores possam indicar trilhas a serem feitas para melhorar especificamente algumas capacitações dos Promotores, trazendo um meio de comunicação entre ambos.


**Plataforma de monitoramento dos promotores, permitindo avaliar seu nível de engajamento e progresso no aprendizado:** permitir aos Consultores supervisionar como anda os Promotores e suas trilhas, se estão cumprindo adequadamente.


**Área dedicada à consulta de tópicos específicos, de acordo com o interesse momentâneo do promotor:** área destinada a trazer um guia mais prático para caso haja maior necessidade quando os Promotores já estiverem atuando em campo.


Aliviadores de Dor
Nos aliviadores de dor, ocorre a identificação do que pode suprir as dores anteriormente reconhecidas (Pereira, 2024). Nesse sentido, definem-se:
Plataforma web estruturada em trilhas e módulos de aprendizado, projetada para apoiar a capacitação do promotor com agilidade e eficiência: plataforma intuitiva e de fácil acesso para os Promotores possam acessar e aprender com métodos diferentes.


**Sistema para acompanhar e avaliar o nível de conhecimento adquirido pelos promotores:** apresentando um sistema de pontos para trazer maior competitividade entre os promotores junto de um incentivo para fazerem as trilhas e aprenderem.


**Recomendações de trilhas personalizadas, definidas com a orientação do consultor:** o Consultor poder indicar aos Promotores que achar justo, trilhas que possam ser déficits ou sejam mais requisitadas que outras mais normais.

### 2.1.5. Matriz de Riscos do Projeto (sprint 1)

*Sem limite de palavras – usar template do curso*

*Registre na matriz os riscos identificados no projeto.*

## 2.2. Personas (sprint 1)

*Posicione aqui suas Personas em forma de texto markdown com imagens, ou como imagem de template preenchido. Atualize esta seção ao longo do módulo se necessário.*

## 2.3. User Stories (sprints 1 a 5)

*Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a mesma referência USXX no roadmap de seu quadro Kanban. Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST das 5 User Stories prioritárias*

*ATUALIZE ESTA SEÇÃO SEMPRE QUE ALGUMA DEMANDA MUDAR EM SEU PROJETO*

*Template de User Story*
Identificação | USXX (troque XX por numeração ordenada das User Stories)
--- | ---
Persona | nome da Persona
User Story | "como (papel/perfil), posso (ação/meta), para (benefício/razão)"
Critério de aceite 1 | CR1: descrever cenário + testes de aceite
Critério de aceite 2 | CR2: descrever cenário + testes de aceite
Critério de aceite ... | CR...
Critérios INVEST | *(Por que é Independente? Por que é Negociável? Por que é Valorosa? Por que é Estimável? Por que é Pequena? Por que é Testável?)*

# <a name="c3"></a>3. Projeto da Aplicação Web (sprints 1 a 4)

## 3.1. Arquitetura (sprints 3 e 4)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário*

## 3.2. Wireframes (sprint 2)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização)*

## 3.3. Guia de estilos (sprint 3)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução*

### 3.3.1 Cores

*Apresente aqui a paleta de cores, com seus códigos de aplicação e suas respectivas funções*

### 3.3.2 Tipografia

*Apresente aqui a tipografia da solução, com famílias de fontes e suas respectivas funções*

### 3.3.3 Iconografia e imagens 

*(esta subseção é opcional, caso não existam ícones e imagens, apague esta subseção)*

*posicione aqui imagens e textos contendo exemplos padronizados de ícones e imagens, com seus respectivos atributos de aplicação, utilizadas na solução*

## 3.4 Protótipo de alta fidelidade (sprint 3)

*posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização)*

## 3.5. Modelagem do banco de dados (sprints 2 e 4)

### 3.5.1. Modelo relacional (sprints 2 e 4)

*posicione aqui os diagramas de modelos relacionais do seu banco de dados, apresentando todos os esquemas de tabelas e suas relações. Utilize texto para complementar suas explicações, se necessário* 

### 3.5.2. Consultas SQL e lógica proposicional (sprint 2)

*posicione aqui uma lista de consultas SQL compostas, realizadas pelo back-end da aplicação web, com sua respectiva lógica proposicional, descrita conforme template abaixo. Lembre-se que para usar LaTeX em markdown, basta você colocar as expressões entre $ ou $$*

*Template de SQL + lógica proposicional*
#1 | ---
--- | ---
**Expressão SQL** | SELECT * FROM suppliers WHERE (state = 'California' AND supplier_id <> 900) OR (supplier_id = 100); 
**Proposições lógicas** | $A$: O estado é 'California' (state = 'California') <br> $B$: O ID do fornecedor não é 900 (supplier_id ≠ 900) <br> $C$: O ID do fornecedor é 100 (supplier_id = 100)
**Expressão lógica proposicional** | $(A \land B) \lor C$
**Tabela Verdade** | <table> <thead> <tr> <th>$A$</th> <th>$B$</th> <th>$C$</th> <th>$(A \land B)$</th> <th>$(A \land B) \lor C$</th> </tr> </thead> <tbody> <tr> <td>F</td> <td>F</td> <td>F</td> <td>F</td> <td>F</td> </tr> <tr> <td>F</td> <td>F</td> <td>V</td> <td>F</td> <td>V</td> </tr> <tr> <td>F</td> <td>V</td> <td>F</td> <td>F</td> <td>F</td> </tr> <tr> <td>F</td> <td>V</td> <td>V</td> <td>F</td> <td>V</td> </tr> <tr> <td>V</td> <td>F</td> <td>F</td> <td>F</td> <td>F</td> </tr> <tr> <td>V</td> <td>F</td> <td>V</td> <td>F</td> <td>V</td> </tr> <tr> <td>V</td> <td>V</td> <td>F</td> <td>V</td> <td>V</td> </tr> <tr> <td>V</td> <td>V</td> <td>V</td> <td>V</td> <td>V</td> </tr> </tbody> </table>

*Dica: edite a tabela verdade fora do markdown, para ter melhor controle*

## 3.6. WebAPI e endpoints (sprints 3 e 4)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.* 

*Cada endpoint deve conter endereço, método (GET, POST, PUT, PATCH, DELETE), header, body e formatos de response*

# <a name="c4"></a>4. Desenvolvimento da Aplicação Web

## 4.1. Primeira versão da aplicação web (sprint 3)

*Descreva e ilustre aqui o desenvolvimento da sua primeira versão do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos.*

## 4.2. Segunda versão da aplicação web (sprint 4)

*Descreva e ilustre aqui o desenvolvimento da sua segunda versão do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos.*

## 4.3. Versão final da aplicação web (sprint 5)

*Descreva e ilustre aqui o desenvolvimento da última versão do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos.*

# <a name="c5"></a>5. Testes

## 5.1. Relatório de testes de integração de endpoints automatizados (sprint 4)

*Liste e descreva os testes unitários dos endpoints criados, automatizados e planejados para sua solução. Posicione aqui também o relatório de cobertura de testes Jest se houver (através de link ou transcrito para estrutura markdown)*

## 5.2. Testes de usabilidade (sprint 5)

*Posicione aqui as tabelas com enunciados de tarefas, etapas e resultados de testes de usabilidade. Ou utilize um link para seu relatório de testes (mantenha o link sempre público para visualização)*

# <a name="c6"></a>6. Estudo de Mercado e Plano de Marketing (sprint 4)

## 6.1 Resumo Executivo

*Preencher com até 300 palavras, sem necessidade de fonte*

*Apresente de forma clara e objetiva os principais destaques do projeto: oportunidades de mercado, diferenciais competitivos da aplicação web e os objetivos estratégicos pretendidos.*

## 6.2 Análise de Mercado

*a) Visão Geral do Setor (até 250 palavras)*
*Contextualize o setor no qual a aplicação está inserida, considerando aspectos econômicos, tecnológicos e regulatórios. Utilize fontes confiáveis.*

*b) Tamanho e Crescimento do Mercado (até 250 palavras)*
*Apresente dados quantitativos sobre o tamanho atual e projeções de crescimento do mercado. Utilize fontes confiáveis.*

*c) Tendências de Mercado (até 300 palavras)*
*Identifique e analise tendências relevantes (tecnológicas, comportamentais e mercadológicas) que influenciam o setor. Utilize fontes confiáveis.*

## 6.3 Análise da Concorrência

*a) Principais Concorrentes (até 250 palavras)*
*Liste os concorrentes diretos e indiretos, destacando suas principais características e posicionamento no mercado.*

*b) Vantagens Competitivas da Aplicação Web (até 250 palavras)*
*Descreva os diferenciais da sua aplicação em relação aos concorrentes, sem necessidade de citação de fontes.*


## 6.4 Público-Alvo

*a) Segmentação de Mercado (até 250 palavras)*
Descreva os principais segmentos de mercado a serem atendidos pela aplicação. Utilize bases de dados e fontes confiáveis.*

*b) Perfil do Público-Alvo (até 250 palavras)*
*Caracterize o público-alvo com dados demográficos, psicográficos e comportamentais, incluindo necessidades específicas. Utilize fontes obrigatórias.*


## 6.5 Posicionamento

*a) Proposta de Valor Única (até 250 palavras)*
*Defina de maneira clara o que torna a sua aplicação única e valiosa para o mercado.*

*b) Estratégia de Diferenciação (até 250 palavras)*
*Explique como sua aplicação se destacará da concorrência, evidenciando a lógica por trás do posicionamento.*

## 6.6 Estratégia de Marketing 

*a) Produto/Serviço (até 200 palavras)*
*Descreva as funcionalidades, benefícios e diferenciais da aplicação*

*6.2 Preço (até 200 palavras)*
*Explique o modelo de precificação adotado e justifique com base nas análises anteriores.*

*6.3 Praça (Distribuição) (até 200 palavras)*
*Apresente os canais digitais utilizados para distribuir e entregar a aplicação ao público.*

*6.4 Promoção (até 200 palavras)*
*Descreva as estratégias digitais planejadas, como SEO, redes sociais, marketing de conteúdo e campanhas pagas.*

# <a name="c7"></a>7. Conclusões e trabalhos futuros (sprint 5)

*Escreva de que formas a solução da aplicação web atingiu os objetivos descritos na seção 2 deste documento. Indique pontos fortes e pontos a melhorar de maneira geral.*

*Relacione os pontos de melhorias evidenciados nos testes com planos de ações para serem implementadas. O grupo não precisa implementá-las, pode deixar registrado aqui o plano para ações futuras*

*Relacione também quaisquer outras ideias que o grupo tenha para melhorias futuras*

# <a name="c8"></a>8. Referências (sprints 1 a 5)

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

LUCK, Heloisa. Liderança em gestão escolar. 4. ed. Petrópolis: Vozes, 2010. <br>
SOBRENOME, Nome. Título do livro: subtítulo do livro. Edição. Cidade de publicação: Nome da editora, Ano de publicação. <br>

INTELI. Adalove. Disponível em: https://adalove.inteli.edu.br/feed. Acesso em: 1 out. 2023 <br>
SOBRENOME, Nome. Título do site. Disponível em: link do site. Acesso em: Dia Mês Ano

# <a name="c9"></a>Anexos

*Inclua aqui quaisquer complementos para seu projeto, como diagramas, imagens, tabelas etc. Organize em sub-tópicos utilizando headings menores (use ## ou ### para isso)*
