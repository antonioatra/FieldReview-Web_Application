# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="/assets/assetsWAD/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# 🔵🟢 Field Review

## 👥 Testotech

## :student: Integrantes: 
- <a href="https://www.linkedin.com/in/antonio-augusto-tavares-ribeiro-andr%C3%A9-613937345/">Antônio Augusto Tavares Ribeiro André</a>
- <a href="https://www.linkedin.com/in/diegofigueiredos/">Diego Figueiredo Silva</a>
- <a href="https://www.linkedin.com/in/eduardo-jesus-/">Eduardo Jesus Tavares Sant'anna</a> 
- <a href="https://www.linkedin.com/in/gabriel-bartmanovicz/">Gabriel Willian Bartmanovicz</a> 
- <a href="https://www.linkedin.com/in/leandro-precaro-barankiewicz-filho-8a293a345/">Leandro Precaro Barankiewicz Filho</a>
- <a href="https://www.linkedin.com/in/messias-olivindo/">Messias Fernandes de Olivindo</a>
- <a href="https://www.linkedin.com/in/thulio-bacco-55a1172b4/">Thulio Sallum Bacco Pinto</a> 


## :teacher: Professores:
### Orientador(a) 
- <a href="https://www.linkedin.com/in/marcelo-gon%C3%A7alves-phd-a550652/">Marcelo Gonçalves</a>
### Instrutores
- <a href="https://www.linkedin.com/in/cristiano-benites-ph-d-687647a8/">Cristiano Benites</a>
- <a href="https://www.linkedin.com/in/filipe-gon%C3%A7alves-08a55015b/"> Filipe Gonçalves</a> 
- <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar</a> 
- <a href="https://www.linkedin.com/in/geraldo-magela-severino-vasconcelos-22b1b220/">Geraldo Magela</a> 
- <a href="https://www.linkedin.com/in/pedroteberga/">Pedro Teberga</a> 


## 📝 Descrição

&emsp; O Field Review é uma plataforma web desenvolvida para capacitar Promotores Técnicos Digitais (PTDs) no uso da ferramenta Climate FieldView, da Bayer Crop Science. A iniciativa surgiu a partir da necessidade de apoiar esses profissionais que, muitas vezes, enfrentam dificuldades técnicas durante a instalação e o suporte da solução no campo. A proposta visa facilitar o acesso ao conhecimento de forma prática e rápida, contribuindo para um atendimento mais eficiente e qualificado.

&emsp; A plataforma conta com dois perfis principais de uso: um voltado aos PTDs, que têm acesso a trilhas de conhecimento com conteúdos interativos, vídeos, tutoriais e quizzes; e outro voltado aos administradores, com funcionalidades que permitem adicionar materiais, organizar os conteúdos e acompanhar o desempenho dos usuários. Essa divisão torna possível uma gestão mais eficaz do aprendizado, permitindo à liderança identificar lacunas de conhecimento e promover formações mais direcionadas.

&emsp; Com foco em acessibilidade e experiência do usuário, o Field Review foi pensado para ser utilizado também em campo, por meio de dispositivos móveis. A interface é simples e objetiva, com sistema de busca que permite ao promotor encontrar rapidamente o que precisa. Ao unir educação, tecnologia e gestão do conhecimento, a plataforma contribui diretamente para a autonomia dos profissionais e fortalece a rede de suporte técnico da Bayer.

## 📝 Link de demonstração

<a href="">https://www.loom.com/share/b8b6e0db79ba4c06a2d766772d26a5f9?sid=de88818b-ae8f-4e63-9340-7f7998080af7</a>

## 📁 Estrutura de pastas

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

- <b>assets</b>: aqui estão os arquivos relacionados a elementos não-estruturados deste repositório, como imagens.

- <b>document</b>: aqui estão todos os documentos do projeto, como o Web Application  Document (WAD) bem como documentos complementares, na pasta "other".

- <b>src</b>: Todo o código fonte criado para o desenvolvimento do projeto de aplicação web.

- **public**: arquivos públicos utilizados na aplicação Wen, incluindo estilos, imagens e scripts de páginas.

- <b>README.md</b>: arquivo que serve como guia introdutório e explicação geral sobre o projeto e a aplicação (o mesmo arquivo que você está lendo agora).

- **package.json**: define o projeto e suas dependências.

- **package-lock.json**: trava as versões instaladas das dependências

```
─ assets                # Arquivos de imagem utilizados na ilustração do projeto
│   └── assetsWAD       # Arquivos de imagem utilizados no WAD
│       └── api         # Arquivos de imagens dos testes das rotas de API
├── documentos          # Arquivos de documentação do projeto
├── public              # Arquivos públicos utilizados na plataforma Web
│   ├── assets          # Arquivos de imagem utilizados no projeto
│   ├── fonts           # Fontes utilizadas na solução
│   ├── img             # Imagens utilizadas no projeto
│   ├── scripts         # Arquivos scripts das páginas
│   └── styles          # Estilização de elementos das páginas
├── src
│   ├── config          # Configuração do banco de dados
│   ├── controllers     # Controllers da aplicação
│   ├── middleware      # Middleware de autentificação do projeto
│   ├── migrations      # Arquivos de migrations
│   │   ├── development # Informações para preencher as tabelas
│   │   └── production  # Criação das tabelas do banco de dados 
│   ├── models          # Models da aplicação
│   ├── routes          # Rotas da aplicação
│   │   └── api         # Rotas das APIs do projeto
│   └── views           # Views do projeto
│       ├── adm         # Paǵinas de administrador do projeto
│       ├── partials    # Elementos parciais do projeto
│       └── user        # Páginas de usuários do projeto
│   ├── server.js       # Configuração do servidor da aplicação
├── package.json        # Dependências do projeto
├── package-lock.json   # Configurações das dependências
├── README.md           # Informações gerais do projeto
```

## 💻 Configuração para desenvolvimento e execução do código

&emsp; Para rodar o projeto no seu dispositivo desktop, siga os seguintes passos:

1. Instale o Node.js: 
👉 https://nodejs.org/en/download 

2. Tenha um banco de dados PostrgreSQL hospedado no Supabase:
👉 https://supabase.com/

3. Clone o repositório do github no local de sua preferência, com o seguinte comando no terminal do seu computador:
```zh
git clone https://github.com/Inteli-College/2025-1B-T15-IN02-G03
```

4. Preencha as informações no .env.example:
 ```
 DB_USER=
DB_HOST=
DB_PORT=
DB_PASSWORD=
DB_NAME=

JWT_SECRET=
 ```

5. Renomeie o **.env.example** para **.env**

6. Instale as dependências localizadas na raiz do projeto, com o seguinte comando no terminal:
```zh
npm install
```

7. Monte as tabelas no seu banco de dados com o seguinte comando no terminal:
 ```zh
npm run migrate-production
```

8. Rode o projeto com o seguinte comando no terminal na raiz do projeto:
```zh
npm start
```

9. Acesse a aplicação no navegador pelo endereço: 
👉 http://localhost:3000/


## 🗃 Histórico de lançamentos

* 0.5.0 - 26/06/2025 
    * MVP da plataforma Web com as principais funcionalidades da aplicação na arquitetura MVC
* 0.4.0 - 13/06/2025
    * Desenvolvimento da primeira versão funcional da aplicação, apresentando integração do front-end com o back-end da plataforma.
* 0.3.0 - 30/05/2025
    * Desenvolvimento do back-end da aplicação com a construção dos models e controllers da aplicação.
* 0.2.0 - 16/05/2025 
    * Desenvolvimento do Modelo Entidade-Relacionamento do banco de dados e realização dos wireframes da aplicação Web
* 0.1.0 - 30/04/2025 
    * Levantamento inicial do projeto, com entendimento do negócio, definição dos objetivos e escopo da primeira versão da Aplicação Web.

## 📋 Licença/License

<a href="https://github.com/Inteli-College/2025-1B-T15-IN02-G03">Field Review</a> © 2025 by <a href="https://github.com/Inteli-College/2025-1B-T15-IN02-G03"> Inteli</a> , <a href="https://www.linkedin.com/in/antonio-augusto-tavares-ribeiro-andr%C3%A9-613937345/">Antônio Augusto Tavares Ribeiro André</a>, <a href="https://www.linkedin.com/in/diegofigueiredos/">Diego Figueiredo Silva</a>, <a href="https://www.linkedin.com/in/eduardo-jesus-/">Eduardo Jesus Tavares Sant'anna</a>,  <a href="https://www.linkedin.com/in/gabriel-bartmanovicz/">Gabriel Willian Bartmanovicz</a>,  <a href="https://www.linkedin.com/in/leandro-precaro-barankiewicz-filho-8a293a345/">Leandro Precaro Barankiewicz Filho</a>, <a href="https://www.linkedin.com/in/messias-olivindo/">Messias Fernandes de Olivindo</a>, <a href="https://www.linkedin.com/in/thulio-bacco-55a1172b4/">Thulio Sallum Bacco Pinto</a>  is licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;">