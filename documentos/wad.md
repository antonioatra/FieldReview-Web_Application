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

&emsp; Na seção a seguir será apresentada a visão geral do projeto, englobando o escopo do projeto, persona e user stories para levantar informações acerca dos negócios e UX da solução.

## 2.1. Escopo do Projeto (sprints 1 e 4)
&emsp; No que diz respeito ao escopo do projeto, realizou-se uma análise aprofundada da empresa e da aplicação web, resultando: modelo de 5 forças de Porter, análise SWOT, solução, value proposition canvas e matriz de riscos.

### 2.1.1. Modelo de 5 Forças de Porter (sprint 1)

&emsp; O modelo de 5 forças de Porter é uma ferramenta de análise para avaliar a competitividade no setor de negócios que a empresa atua <sup>[7]</sup>. Sob o ponto de vista da Bayer Crop Science, montou-se o seguinte modelo:

<p align="center">
<sup>Figura 1: 5 Forças de Porter aplicadas à empresa Bayer Crop Science.</sup> <br>
    <img src="/assets/assetsGdd/cincoForcasPorter.png"> <br>
<sub>Fonte: Material produzido pelos autores (2025).</sub>
</p>

#### **Rivalidade entre concorrentes**

&emsp; Em relação à concorrência no mercado agrícola, os rivais da Bayer Crop Science podem ser divididos entre o ramo de sementes, proteção de cultivos e soluções digitais.

&emsp; No que diz respeito à área de sementes, a rivalidade entre os concorrentes é alta, uma vez que há grandes companhias atuando nesse ramo. A exemplo disso, pode-se citar empresas como: DowDuPont Inc., Syngenta AG, Groupe Limagrain e KWS SAAT SE <sup>[9]</sup>.

&emsp; No que se refere ao mercado de proteção de cultivos, a rivalidade entre concorrentes também é alta, já que existem diversas empresas grandes disputando nessa área. Dentre as principais empresas, cita-se: Syngenta Crop Protection, BASF, Corteva, entre outras <sup>[2]</sup>.

&emsp; Com relação ao ramo de soluções digitais na agricultura, a rivalidade entre concorrentes é alta, visto que é um mercado dominado por big techs. Exemplificando, essa área é dominada pelas empresas AGCO Corporation, Deere & Company, IBM Corporation e Microsoft <sup>[8]</sup>.


#### **Poder de barganha dos compradores**

&emsp; O poder de barganha dos clientes é baixo, visto que os produtos oferecidos pela Bayer Crop Science oferecem funcionalidades e tecnologias exclusivas que reduzem a sensibilidade dos clientes ao preço. Exemplificando, há o programa de fidelidade Impulso Bayer, na qual é possível trocar pontos por recompensas <sup>[5]</sup>, e o produto FieldView apresenta ferramentas tecnológicas únicas para o produtor rural <sup>[4]</sup>. Assim, os fatores técnicos e as exclusividades que a empresa oferece são decisivos para motivar a compra dos consumidores.

#### **Poder de barganha dos fornecedores**

&emsp; O poder de barganha dos fornecedores é alto, devido à necessidade que a empresa possui por serviços especializados de outras companhias. Acerca disso, no ramo de sementes, como exemplo há o Agroeste e Dekalb; na proteção de cultivos, existem a Curbix, Sivanto e outros; além disso, nas soluções digitais, pode-se citar o The Climate Corporation com a plataforma agrícola Climate FieldView <sup>[3]</sup>.

#### **Ameaça de produtos substitutos**

&emsp; A ameaça de produtos substitutos é média, levando em conta o perfil diversificado dos produtores rurais. Embora uma grande quantidade de produtores rurais optem por serviços já usados cotidianamente, percebe-se que atualmente há uma crescente adoção de soluções digitais e novas tecnologias nos campos agrícolas. Dessa forma, percebe-se a mudança de perfil dos consumidores, aceitando o emprego de novos produtos em suas propriedades <sup>[1]</sup>.

#### **Ameaça de novos entrantes**
&emsp; A ameaça de novos entrantes é baixa, tendo em vista que o mercado agrícola já é bem consolidado com empresas de grande relevância internacional. Sob esse contexto, o ramo agrícola é de alta competitividade no nível mundial, na qual empresas como a própria Bayer Crop Science, Corteva, Phos Agro, AGCO, Sime Darby Plantation e outras companhias disputam um lugar de destaque. Por conseguinte, apesar do crescimento constante, o mercado agrícola é de difícil acesso para novos entrantes em todas as áreas de atuação do agronegócio <sup>[6]</sup>.

### 2.1.2. Análise SWOT da Instituição Parceira (sprint 1)

&emsp; A Bayer CropScience é líder no agronegócio por seu ecossistema completo e forte presença no mercado, com destaque para o FieldView, solução digital que a diferencia da concorrência. No entanto, seu foco em grandes produtores pode limitar seu alcance entre pequenos agricultores. A empresa enfrenta ameaças como questões ambientais e processos legais, que afetam sua reputação. Por outro lado, há oportunidades na expansão de soluções sustentáveis, como o projeto PRO Carbono, e parcerias com universidades, fortalecendo sua inovação e presença no setor frente a concorrentes com tecnologias emergentes.

<img src="../assets/analiseSWOT.png">

### 2.1.3. Solução (sprints 1 a 5)


&emsp; A solução baseia-se em uma parceria com a Bayer, que oferece uma ferramenta chamada Climate FieldView — um sistema de software e hardware utilizado para coletar dados de máquinas agrícolas e monitorar a saúde das lavouras. No entanto, essa ferramenta apresenta dificuldades em sua instalação e manuseio por parte dos PTDs (Promotores Técnicos Digitais), uma vez que esses profissionais nem sempre possuem a capacitação técnica necessária para realizar um trabalho eficiente e satisfatório.


### Problema a ser resolvido: <br>
&emsp; Devido a alta rotatividade dos PTDs, os responsáveis pela instalação do Climate FieldView, eles acabam sendo direcionados para atuar a instalação sem a devida capacidade técnica e, consequentemente, acarretam na insatisfação dos clientes que adquiriram o produto e sobrecarrega o atendimento remoto já que o presencial não está sendo efetivo.

### Dados disponíveis:
&emsp; Não se aplica devido à falta de informações concretas e dados estatísticos sobre o tema, tendo sido fornecidas apenas as complicações mencionadas pelo cliente. 

### Solução proposta: <br>
&emsp; Para resolver o problema, foi criada uma plataforma de capacitação com módulos voltados ao uso do Climate FieldView pelos PTDs. Um sistema de ranking avalia o desempenho dos usuários, enquanto uma página administrativa permite aos gestores acompanharem o progresso individual e coletivo, garantindo maior eficiência no aprendizado e na atuação técnica.
     
### Forma de utilização  da solução: <br>

&emsp;A plataforma possui módulos com aulas e testes para capacitar o PTD no uso do Climate FieldView. Um teste inicial identifica pontos de atenção, e há um sistema de pesquisa rápida para dúvidas urgentes. O progresso é validado com pontuação, permitindo que o administrador acompanhe o nível de conhecimento de cada usuário.

### Benefícios esperados: <br>

&emsp; Com a plataforma em funcionamento e os estudos concluídos, espera-se que os PTDs estejam aptos para atuar em campo com as habilidades necessárias, entregando um serviço eficaz e satisfatório, sem sobrecarregar outras áreas ligadas ao Climate FieldView, como o atendimento remoto, ou desperdiçar tempo que poderia ser utilizado de forma mais produtiva.

### Critério de sucesso e como será avaliado: <br>

&emsp; Com a efetiva atuação da plataforma espera-se que os PTDs estejam preparados para a sua área de atuação e execução de suas atividades de maneira direta e ágil. Como critério de avaliação será possível perceber uma diminuição na sobrecarga do atendimento remoto e uma melhor avaliação dos clientes sobre a atuação dos PTDs.


### 2.1.4. Value Proposition Canvas (sprint 1): 
Canvas de Proposta de Valor — Solução para Capacitação de Promotores
Segundo Pereira<sup>[10]</sup>., o modelo de negócio criado por Alexander Osterwalder, Yves Pigneur e Alan Smith denominado “Value Proposition Canvas” é uma ferramenta desenhada para garantir que o produto atenda às necessidades dos clientes, traga-lhes benefícios e resolva seus problemas, estruturando como o serviço agrega valor a eles. Para isso, a ferramenta utiliza duas seções do Business Model Canvas, a saber: “Segmentos de Clientes” e “Propostas de Valor”.

Nesse sentido, o Value Proposition Canvas tem dois lados. À direita está um perfil apresentado pelo cliente mostrando suas tarefas, suas dores e seus ganhos. O lado esquerdo inclui a proposta de valor que deve ser entregue ao cliente, abrangendo produtos e serviços, criadores de benefícios e analgésicos (este é o mapa de valor)<sup>[10]</sup>.

Portanto, é importante descrever o conceito geral de cada tópico, mostrar a relação entre eles e como eles se afetam direta ou indiretamente. Portanto, os tópicos subsequentes abordarão elementos inerentes ao Value Proposition Canvas da solução proposta para o projeto atual, iniciando pelo perfil do cliente. Além disso, a Figura 3 mostra esses elementos visualmente:

<img src="../assets/CanvasProspostaDeValor.png">

### Tarefas do Cliente

Neste tópico, deve-se observar o que o cliente já faz no seu dia a dia antes da proposta de solução, auxiliando no entendimento de como é possível agir perante a problemática em questão<sup>[10]</sup>.. No contexto da capacitação de promotores, o cliente realiza as seguintes tarefas:

**Utilizar o site de “Ajuda Rápida” do Climate FIELDVIEW:** O PTD(Promotor Técnico Digital) depende de um site que não foca em ensinar adequadamente ele sobre o uso do Climate FieldView.


**Contactar alguém de dentro da Climate FIELDVIEW para buscar suporte:** Quando não consegue receber a ajuda do site de “Ajuda Rápida”, é exigido que ele solicite contato com assistência da própria Climate FieldView, de forma que se torna um trabalho mais demorado e insatisfatório para o cliente, que seria o fazendeiro.


**Depender dos feedbacks dos usuários do Climate FIELDVIEW sobre os promotores:** para que o Consultor de Sucesso do Cliente tenha ciência da capacitação e desempenho do PDT, ele necessita da avaliação do cliente, no caso o fazendeiro que contrata desse serviço. 


### Ganhos

No segmento de ganhos, são elencados todos os benefícios esperados pelo cliente, ou seja, suas aspirações em relação ao seu contexto. Esta parte foca naquilo que o cliente almeja alcançar no escopo em questão, devendo cada ganho ser viabilizado por um criador de ganho correspondente<sup>[10]</sup>.. Assim, foram identificados os seguintes ganhos:
Aprimorar competências específicas: com uma análise feita pelo Consultor de Sucesso do Cliente, ele pode mandar ao PTD especifico uma trilha que ele pode se preocupar mais. 


**Elevar a excelência no atendimento ao cliente:** suprir a insatisfação dos clientes quanto ao atendimento do PTD’s.


**Eliminar a dependência de canais de comunicação ineficazes:** evitar o uso de canais de comunicações como WhatsApp, estabelecendo um meio de comunicação oficial e seguro.


**Melhorar as capacidades técnicas exigidas dos promotores:** trazer trilhas intuitivamente, que ensinem e capacitem os PDT’s a fazerem seu trabalho eficientemente.


**Ter auxílio rápido e fácil:** fazer uma plataforma que tenha auxílios rápidos para os PTD’s em caso de dúvidas durante o trabalho. 


**Acompanhar de forma precisa o aprendizado e o engajamento dos promotores:** parte feita para o Consultor de Sucesso do Cliente saber como ando o aprendizado dos Promotores.

### Dores

No segmento de dores, há a definição daquilo com que o cliente sofre em decorrência da falta de uma solução efetiva ao seu problema<sup>[10]</sup>.. As dores identificadas foram:
**Não há nenhuma plataforma de capacitação adequada e ágil:** não tem uma plataforma que torne os Promotores capacitados ou possa os ajudar rápido e efetivamente.


**Ausência de um sistema de monitoramento da capacitação dos promotores:** o Consultor não sabe o nível de capacitação dos Promotores, enviados a campo.


**Grandes diferenças de níveis de conhecimento entre promotores:** os Promotores mais velhos tem maior nível quanto ao quesito técnico que os mais novos.


**Falta de um guia prático de instruções sobre as ferramentas:** os guias atuais não apresentam serem intuitivos e nem rápido de se entender.


**Sem incentivo para aprendizado:** não há nada que traga vontade de aprender ao promotor, além de se tornar mais capacitado.

<br/>
<br/>
<br/>


A partir da identificação do perfil do cliente, é necessário mapear o melhor caminho pelo qual suas necessidades serão atendidas. Assim, explicitam-se os criadores de ganho, aliviadores de dor e os produtos e serviços propostos.

### Produtos e Serviços

No segmento de produtos e serviços, há a identificação daquilo que deve ser entregue ao cliente, por meio de funcionalidades definidas e claras <sup>[10]</sup>. No presente contexto, propõe-se:
Plataforma web com trilhas de aprendizado voltadas aos promotores, com foco na melhoria de sua capacitação em campo: trazer uma solução web, de fácil acesso.


**Sistema com acessos distintos para o Consultor de Sucesso do Cliente e para os promotores, facilitando a avaliação dos promotores pelo consultor:** trazer uma área destinada ao consultor, para saber sobre os promotores, e outra para os promotores com suas trilhas a serem feitas.


**Sistema de classificação por pontos em provas de cada trilha realizada:** Sistema de pontuação conquistada por meio de provas sobre as trilhas para dedicação maior pelos promotores.


**Espaço dedicado às trilhas, com acesso intuitivo e ágil:** trazer trilhas de fácil entendimento e intuitivas para os promotores poderem seguir e aprender.


### Criadores de Ganhos

Os criadores de ganhos identificam o que será implementado para gerar satisfação ao cliente, estando conectados diretamente aos ganhos elencados no perfil do cliente <sup>[10]</sup>. Assim, temos:
Trilhas de capacitação para os promotores, com recursos visuais e auditivos, visando aprimorar suas habilidades e a qualidade do seu trabalho: trilhas com métodos de ensino diversos para auxiliar os PDT’s a serem capacitados e elevar sua qualidade de atendimento.


**Permitir que o Consultor possa indicar trilhas específicas ao promotor, caso necessário:** permitir que os Consultores possam indicar trilhas a serem feitas para melhorar especificamente algumas capacitações dos Promotores, trazendo um meio de comunicação entre ambos.


**Plataforma de monitoramento dos promotores, permitindo avaliar seu nível de engajamento e progresso no aprendizado:** permitir aos Consultores supervisionar como anda os Promotores e suas trilhas, se estão cumprindo adequadamente.


**Área dedicada à consulta de tópicos específicos, de acordo com o interesse momentâneo do promotor:** área destinada a trazer um guia mais prático para caso haja maior necessidade quando os Promotores já estiverem atuando em campo.


### Aliviadores de Dor

Nos aliviadores de dor, ocorre a identificação do que pode suprir as dores anteriormente reconhecidas<sup>[10]</sup>. Nesse sentido, definem-se:
Plataforma web estruturada em trilhas e módulos de aprendizado, projetada para apoiar a capacitação do promotor com agilidade e eficiência: plataforma intuitiva e de fácil acesso para os Promotores possam acessar e aprender com métodos diferentes.


**Sistema para acompanhar e avaliar o nível de conhecimento adquirido pelos promotores:** apresentando um sistema de pontos para trazer maior competitividade entre os promotores junto de um incentivo para fazerem as trilhas e aprenderem.


**Recomendações de trilhas personalizadas, definidas com a orientação do consultor:** o Consultor poder indicar aos Promotores que achar justo, trilhas que possam ser déficits ou sejam mais requisitadas que outras mais normais.

### 2.1.5. Matriz de Riscos do Projeto (sprint 1)

&emsp;&emsp;&emsp;&emsp;A matriz de riscos é uma ferramenta essencial para identificar, avaliar e priorizar ameaças que podem impactar o projeto. A avaliação qualitativa de riscos utiliza uma matriz que integra frequência (probabilidade de ocorrência) e severidade (impacto econômico). Os riscos de alta severidade e frequência requerem atenção imediata, enquanto os de menor impacto podem ser monitorados com menor urgência. Essa priorização permite a distribuição eficaz de recursos para ações preventivas e corretivas, garantindo a continuidade do projeto.


<div align="center">
Matriz de Risco do projeto.
</div>
<img src="../assets/matrizDeRisco.png">
<br>

<div align="center">
Fonte: Próprios Autores (2025)
</div>
<br>

&emsp;&emsp;&emsp;&emsp;Para explicar os termos colocados na imagem acima, faremos uma tabela de ameaça e de oportunidade descrevendo cada tópico, com a categoria que ela se encontra, a probabilidade de acontecer e o impacto que esse risco pode ocasionar no projeto.

| Risco                                                   | Categoria                          | Descrição                                                                                                                                     | Probabilidade | Impacto     |
|----------------------------------------------------------|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------|-------------|
| Falta de conhecimento em análise de dados               | Pessoas (falta de conhecimento)    | A equipe não possui muita experiência nessa área, podendo atrasar prazos ou até analisar errado os dados.                                   | 90            | Alto        |
| Conteúdo raso e de difícil entendimento nas trilhas     | Produto                            | A falta de uma implementação dos conteúdos nas trilhas de uma forma clara e intuitiva pode dificultar a função do site: aprendizado rápido. | 50            | Moderado    |
| Plataforma não funcionar sem rede de internet           | Técnico / Infraestrutura           | A dependência de conexão com a internet pode inviabilizar o uso da solução em regiões remotas ou com sinal instável.                        | 50            | Muito Alto  |
| PDTs não conseguirem utilizar a plataforma de maneira intuitiva | Produto / Usabilidade             | A complexidade da interface ou navegação pode impedir que os PDTs usem a plataforma corretamente, afetando a experiência e resultados.       | 30            | Alto        |
| Falta de conhecimento na área de back end               | Pessoas (falta de conhecimento)    | Habilidades limitadas em back end podem atrasar a construção de funcionalidades críticas e a progressão do trabalho.                        | 30            | Moderado    |
| Análise da empresa (Bayer CropScience)                  | Pesquisa                           | Análise bem feita do parceiro sem nenhum impeditivo ou dificuldade.                                                                         | 10            | Muito Baixo |
| Desentendimento entre a equipe                          | Relacionamento / Relação           | Conflitos interpessoais podem gerar impacto na produtividade e na continuidade do projeto.                                                   | 10            | Baixo       |


# 2. Oportunidades

| Oportunidade                                | Categoria               | Descrição                                                                                         | Probabilidade | Impacto    |
|---------------------------------------------|-------------------------|-----------------------------------------------------------------------------------------------------|---------------|------------|
| Conhecer uma grande empresa internacional   | Rede de contatos        | Contato com a Bayer proporciona networking relevante e aprendizado sobre o mercado internacional, além de entender como é trabalhar para uma empresa grande pela primeira vez. | 90            | Alto       |
| Alto engajamento com o projeto              | Pessoas  | A equipe está motivada, o que fortalece o comprometimento e a dedicação ao projeto, aumentando a produtividade e a disposição para passar por dificuldades ou aprender e aplicar o que o projeto precisar.               | 90            | Muito Alto |
| Aprender novas tecnologias                  | Educacional / Técnico   | O projeto permite o contato com ferramentas e linguagens ainda não dominadas pelos membros, ampliando o conhecimento em áreas nas quais todos irão trabalhar futuramente e nos transformando em profissionais mais completos.       | 70            | Muito Alto |
| Ganho financeiro através da venda da ideia  | Financeira / Negócios   | A solução proposta pode gerar lucro no futuro caso seja viabilizada comercialmente.               | 70            | Alto       |
| Facilidade no aprendizado                   | Pessoas / Educacional   | A equipe tem boa capacidade de assimilação, o que faz com que a falta de conhecimento prévio, mesmo atrasando um pouco o andamento, não seja um impeditivo para a preparação de um ótimo projeto.  | 30            | Alto       |
| Conhecer um profissional agrícola           | Rede de contatos        | A interação com especialistas do campo traz aprendizado e feedback técnico valioso, ampliando o conhecimento e tornando-nos profissionais mais versáteis.             | 50            | Moderado   |




## 2.2. Personas (sprint 1)

&emsp; As personas mapeadas para o projeto representam os perfis centrais dos usuários que interagem diretamente com a solução proposta. As personas foram desenvolvidas com base nas necessidades do parceiro Bayer Crop Science e visam orientar decisões de design, funcionalidades e usabilidade da aplicação.
<p align="center"> <img src="../assets/personasptd.png">
<br> <sub>Fonte: autoral (2025)</sub> </p>
<p align="center"> <img src="../assets/personasconsultor.png"> 
<br> <sub>Fonte: autoral (2025) </sub> </p>

## 2.3. User Stories (sprints 1 a 5)

&emsp; As User Stories são um elemento essencial para o planejamento de um projeto, pois elas norteam o grupo a realizar suas tarefas com base em uma das personas desenvolvidas pelo grupo. Assim, projetou-se as seguintes personas de acordo com os quadros abaixo:

Identificação | US01
--- | ---
Persona | Promotor Técnico DIgital
User Story | "Como PTD, quero possuir a habilidade de realizar uma busca rápida sobre as informações para que eu consiga otimizar a resolução das minhas dúvidas."
Critério de aceite 1 | Dado que a barra de pesquisa esteja acessível, <br>E o usuário deseje procurar por um tópico específico, <br>Quando ele digitar e confirmar a pesquisa, <br>Então o conteúdo correspondente ao tópico deve ser apresentado a ele.
Critério de aceite 2 | Dado que a barra de pesquisa esteja acessível,<br>E o usuário deseje procurar por um tópico,<br>Quando ele digitar uma palavra-chave sem saber o nome exato da trilha,<br>Então a barra de pesquisa deve apresentar sugestões de trilhas relacionadas
Critérios INVEST | - A User Story é independente porque pode ser desenvolvida e entregue separadamente de outras histórias.<br>- A User Story é negociável porque pode ser alterada de acordo com as necessidades do cliente e a capacidade da plataforma<br>- A User Story é valiosa porque o PTD pode sanar as suas dúvidas de forma rápida, economizando tempo e satisfazendo o cliente.<br>- A User Story é estimável porque oferece informações sobre os elementos necessários para a implementação da busca rápida, como a barra de busca, a apresentação de resultados, e os filtros de pesquisa.<br>- A User Story é pequena porque não envolve uma gama de funcionalidades, mas foca apenas no processo de busca rápida.<br>- A User Story é testável porque os critérios 

Identificação | US02
--- | ---
Persona | Promotor Técnico Digital
User Story | "Como PTD, quero ter acesso a uma plataforma didática onde eu possa aprofundar tecnicamente meus conhecimentos para que eu possa exercer uma boa atividade em campo."
Critério de aceite 1 | Dado que a plataforma seja acessada,<br>E o usuário deseje realizar um estudo técnico,<br>Então ele deve conseguir encontrar trilhas e conteúdos relevantes para sua capacitação como Promotor Técnico Digital..
Critério de aceite 2 | Dado que o Promotor Técnico Digital esteja com dificuldade técnica,<br>E deseje realizar um estudo sobre o tema,<br>Então ele deve conseguir acessar uma plataforma amigável e didática com conteúdos que o auxiliem na resolução da dificuldade.
Critérios INVEST | - A User Story é independente porque pode ser desenvolvida e entregue separadamente de outras histórias.<br>- A User Story é negociável porque pode ser alterada de acordo com as necessidades do cliente e a capacidade da plataforma<br>- A User Story é valiosa porque o PTD pode usar a plataforma para se capacitar, o que impacta diretamente na qualidade dos atendimentos e na satisfação do cliente.<br>- A User Story é estimável porque é possível estimar o esforço do desenvolvimento com base na entrega das trilhas, na organização dos conteúdos e, consequentemente na usabilidade da plataforma.<br>- A User Story é pequena porque não envolve uma gama de funcionalidades, mas foca apenas no processo de visualização e acesso às trilhas.<br>- A User Story é testável porque os critérios de aceite ilustram situações claras que definirão a funcionalidade do acesso às trilhas e a sua objetividade.

Identificação | US03
--- | ---
Persona | Consultor Digital
User Story | "Como Consultor, quero ter a possibilidade de atribuir trilhas para o meu time de PTDs desenvolver uma habilidade específica."
Critério de aceite 1 | Dado que o consultor acesse a plataforma com a função de administrador,<br>Quando ele navegar para a seção de usuários,<br>Então ele deve conseguir visualizar as informações de cada PTD individualmente, incluindo suas trilhas associadas.
Critério de aceite 2 | Dado que o consultor acesse a plataforma com a função de administrador,<br>Quando ele selecionar um PTD específico,<br>Então ele deve conseguir direcionar trilhas individualmente para esse PTD.
Critérios INVEST | - A User Story é independente porque pode ser desenvolvida e entregue separadamente de outras histórias.<br>- A User Story é negociável porque pode ser alterada de acordo com as necessidades do cliente e os objetivos do consultor.<br>- A User Story é valiosa porque o consultor pode atribuir trilhas de maneira individual a cada PTD, o que eleva a performance individual e a capacitação da equipe.<br>- A User Story é estimável porque oferece as informações necessárias para validação da funcionalidade e pode ser facilmente avaliada de acordo com o resultado dos PTDs.<br>- A User Story é pequena porque não envolve uma gama de funcionalidades, mas foca apenas no processo de atribuição manual de trilhas.<br>- A User Story é testável porque os critérios de aceite ilustram situações claras que definirão a funcionalidade de atribuição de trilhas.

Identificação | US04
--- | ---
Persona | Promotor Técnico Digital
User Story | "Como PTD quero ter a possibilidade de me cadastrar na plataforma para conseguir acessar os conteúdos disponíveis."
Critério de aceite 1 | Dado que o PTD tenha um cadastro válido,<br>Quando ele acessar a plataforma e inserir suas credenciais,<br>Então ele deve conseguir realizar o login e visualizar os conteúdos disponíveis
Critério de aceite 2 | Dado que o PTD tenha um cadastro ativo,<br>Quando ele realizar o login,<br>Então ele deve conseguir acessar seu perfil pessoal na plataforma.
Critérios INVEST | - A User Story é independente porque pode ser desenvolvida e entregue separadamente de outras histórias.<br>- A User Story é negociável porque pode ser alterada de acordo com as necessidades do cliente e as necessidades do promotor técnico digital.<br>- A User Story é valiosa porque o PTD possuirá um cadastro único para acessar os conteúdos e ter a sua conta registrada.<br>- A User Story é estimável porque o desenvolvimento dessa funcionalidade é facilmente estipulado com base na aplicação em outras plataformas.<br>- A User Story é pequena porque foca somente na funcionalidade de cadastro e login do usuário PTD.<br>- A User Story é testável porque os critérios de aceite ilustram situações claras que definirão como funcionará o processo de cadastro e login.

Identificação | US05
--- | ---
Persona | Promotor Técnico Digital
User Story | "Como PTD quero revisar meus conhecimentos sobre a plataforma periodicamente para não ter dúvidas sobre o produto posteriormente "
Critério de aceite 1 | Dado que o PTD já tenha realizado estudos na plataforma,<br>E deseje continuar consolidando esse conhecimento,<br>Quando ele acessar novamente o conteúdo,<br>Então a plataforma deve apresentar recursos de revisão para trilhas concluídas  
Critério de aceite 2 | Dado que o PTD já tenha realizado estudos na plataforma,<br>E deseje focar nos tópicos com maior dificuldade,<br>Quando ele acessar novamente a plataforma,<br>Então a plataforma deve destacar os conteúdos em que o PTD teve pior desempenho.
Critérios INVEST | - A User Story é independente porque pode ser desenvolvida e entregue separadamente de outras histórias.<br>- A User Story é negociável porque pode ser alterada de acordo com as necessidades do cliente e as vontades do promotor técnico digital.<br>- A User Story é valiosa porque o PTD possuirá a opção de consolidar os seus conhecimentos, além de corrigir os seus erros anteriores.<br>- A User Story é estimável porque o desenvolvimento dessa funcionalidade pode ser estipulada de acordo com as tecnologias que serão utilizadas durante o processo.<br>- A User Story é pequena porque foca somente na funcionalidade de revisar os tópicos já concluídos pelo PTD.<br>- A User Story é testável porque os critérios de aceite ilustram situações claras que definirão como funcionará a revisão dos usuários.


Identificação | US06
--- | ---
Persona | Promotor Técnico Digital
User Story | "Como consultor, quero garantir que meu time de PTDs recém contratados estejam aptos para exercer uma boa atividade de auxílio em campo para melhorar a satisfação dos clientes."
Critério de aceite 1 | Dado que o PTD comece a atuar na área<br>E entre na plataforma de ensino<br>Quando entrar na empresa,<br>Então realizará uma trilha de conhecimento básico
Critério de aceite 2 | Dado que o PTD novato atenda um chamado<br>E não saiba resolver algum problema<br>Quando estiver com o cliente<br>Então utilize a plataforma de ensino 

Identificação | US07
--- | ---
Persona | Consultor Digital
User Story | " Como consultor, quero ter a possibilidade de analisar separadamente o desempenho de cada um dos PTDs para que eu possa estar ciente do seu desenvolvimento individual."
Critério de aceite 1 | Dado que a plataforma seja acessada por uma conta admin<br>E entre na página de análise individual de algum colega de equipe<br>Quando quiser consultar as métricas desse parceiro<br>Então aparecerá uma série de dados acerca do avanço dos estudos do PTD
Critério de aceite 2 | Dado que a plataforma seja acessada por uma conta admin<br>E entre na página de análise individual de alguém do time<br>Quando for consultar as trilhas com mais erros do colega de equipe<br>Então aparecerá as questões e trilhas que o PTD teve o menor aproveitamento

Identificação | US08
--- | ---
Persona | Promotor Técnico Digital
User Story | "Como PTD, quero ter a possibilidade de receber uma pontuação de acordo com o meu desempenho nas trilhas para que eu possa me avaliar em relação aos outros"
Critério de aceite 1 | Dado que a plataforma seja acessada por uma conta comum<br>E seja realizada algum exercício sobre a plataforma<br>Quando for finalizada uma trilha de conhecimento<br>Então o usuário receberá pontos caso acerte a pergunta
Critério de aceite 2 |Dado que a plataforma seja acessada por uma conta comum<br>E a página de perfil seja aberta<br>Quando o usuário quiser ver suas informações<br>Então aparecerá a pontuação atual do PTD

Identificação | US09
--- | ---
Persona | nome da Persona
User Story | "Como consultor, quero saber quais pessoas do meu time estão mais engajadas em aprender sobre a plataforma para que eu possa incentivá-las no seu progresso."
Critério de aceite 1 | Dado o acesso ao site com uma conta admin<br>E a página principal seja aberta<br>Quando o consultor que quiser ver o desempenho geral de seus colegas<br>Então um ranking será mostrado com todos os usuários da plataforma
Critério de aceite 2 | Dado que a plataforma seja acessada utilizando uma conta admin<br>E a página inicial seja acessada<br>Quando o consultor queira saber em qual posição está seu colega de time<br>Então aparecerá em qual posição está o PTD junto a sua pontuação

Identificação | US10
--- | ---
Persona | Promotor Técnico Digital
User Story | "Como PTD, quero que a plataforma me avise sobre as trilhas direcionadas pelo consultor a mim, além das atualizações dos conteúdos, para que eu possa me manter informado."
Critério de aceite 1 | Dado a plataforma seja acessada por uma conta comum<br>E a página inicial seja acessada<br>Quando o usuário quiser saber se possui alguma atualização ou atribuição de alguma trilha<br>Então o botão de notificação estará com alguma indicação visual
Critério de aceite 2 | Dado a plataforma seja acessada por uma conta comum<br>E a aba de notificações seja acessada<br>Quando o usuário quiser rever as atualizações do produto FieldView ou alguma trilha atribuída a ele<br>Então aparecerá todas as notificações que o usuário recebeu nos últimos dias

Identificação | US11
--- | ---
Persona | Promotor Técnico Digital
User Story | "Como PTD, quero que a plataforma me disponibilize certificados de conclusão das trilhas para que eu possa comprovar meu conhecimento"
Critério de aceite 1 | Dado a plataforma seja acessada por uma conta comum<br>E alguma trilha seja completa<br>Quando terminar de consumir o material didático e realizar as avaliações<br>Então uma mensagem de parabéns aparecerá junto a um botão para baixar um certificado da trilha
Critério de aceite 2 | Dado a plataforma seja acessada por uma conta comum<br>E a aba de certificados seja acessada<br>Quando o usuário quiser rever o seu certificado<br>Então aparecerá quais trilhas foram completas junto a um botão para baixar o certificado

Identificação | US12
--- | ---
Persona | Consultor Digital
User Story | "Como consultor quero poder adicionar novas trilhas na plataforma para que eu possa complementar o acervo de conhecimento do site"
Critério de aceite 1 | Dado que a plataforma seja acessada por uma conta admin<br>E haja a necessidade de adicionar uma nova trilha de conhecimento<br>Quando ocorrer alguma atualização no FieldView<br>Então o consultor poderá upar os materiais didáticos acerca das novas funcionalidades no produto
Critério de aceite 2 | Dado que a plataforma seja acessada por um conta admin<br>E haja a necessidade de adicionar uma nova trilha de conhecimento<br>Quando ocorrer algum problema com o produto que não haja nenhuma trilha sobre esse tópico<br>Então o consultor poderá upar os materiais didáticos acerca das novas funcionalidades no produto
Critério de aceite ... | CR...
Critérios INVEST | *(Por que é Independente? Por que é Negociável? Por que é Valorosa? Por que é Estimável? Por que é Pequena? Por que é Testável?)*

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


1. AGROLINK. Perfil dos produtores rurais no Brasil: mais jovens e conectados. 2023. Disponível em: https://www.agrolink.com.br/noticias/perfil-dos-produtores-rurais-no-brasil--mais-jovens-e-conectados_483737.html. Acesso em: 29 abr. 2025.

2. AGROPAGES. Top 20 global agrochemical companies in 2023 unveiled. 2024. Disponível em: https://news.agropages.com/News/NewsDetail---51737.htm. Acesso em: 29 abr. 2025.

3. BAYER. Agro Bayer Brasil. 2025. Disponível em: https://www.agro.bayer.com.br/. Acesso em: 29 abr. 2025

4. BAYER CROP SCIENCE. Climate FieldView™. São Paulo: Bayer, [2024]. Disponível em: https://www.agro.bayer.com.br/climate-fieldview. Acesso em: 29 abr. 2025.

5. BAYER CROP SCIENCE. Impulso Bayer: o programa. São Paulo: Bayer, [2024]. Disponível em: https://www.agro.bayer.com.br/impulso-bayer/o-programa. Acesso em: 29 abr. 2025.

6. INTELIGÊNCIA FINANCEIRA. Empresas do agronegócio: as maiores companhias agrícolas do mundo. 2024. Disponível em: https://inteligenciafinanceira.com.br/onde-investir/investir-em-agronegocios/empresas-do-agronegocio-as-maiores-companhias-agricolas-do-mundo/. Acesso em: 29 abr. 2025.

7. MAGRETTA, Joan. Entendendo Michael Porter: o guia essencial da competição e estratégia [recurso eletrônico]. 1. ed. Rio de Janeiro: Alta Books, 2019. Disponível em: https://integrada.minhabiblioteca.com.br. Acesso em: 29 abr. 2025.

8. MARKET RESEARCH FUTURE. Digital agriculture market research report—global forecast 2030. 2023. Disponível em: https://www.marketresearchfuture.com/reports/digital-Agricultureiculture-market-10695. Acesso em: 29 abr. 2025.

9. MARKET RESEARCH FUTURE. Seeds market research report. [S.l.]: Market Research Future, 2023. Disponível em: https://www.marketresearchfuture.com/reports/seeds-market-7252. Acesso em: 28 abr. 2025.

10. PEREIRA, Daniel. O que é o Value Proposition Canvas?. [S. l.], 27 set. 2024. Disponível em: https://businessmodelanalyst.com/pt/value-proposition-canvas/. Acesso em: 27 mar. 2025.


# <a name="c9"></a>Anexos

*Inclua aqui quaisquer complementos para seu projeto, como diagramas, imagens, tabelas etc. Organize em sub-tópicos utilizando headings menores (use ## ou ### para isso)*
