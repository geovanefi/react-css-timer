# React Timer

# <a href='https://www.linkedin.com/in/geovanejr00'>♣️@QueenDevelopers</a>
    
## Welcome to my world <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35">

### Hello! I'm Geovane Felicio a Front-End Developer from Brazil.

#### Portfolio: <a href='https://github.com/geovanefi?tab=repositories'><strong> &#9636; GitHub <strong> </a>
<br>
<br>
<br>
<p>Others</p>

<a href="https://www.linkedin.com/in/geovanejr00">
  <img align="left" alt="Geovane Felicio" width="42px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
</a>
<a href="https://www.instagram.com/queendevelopers">
  <img align="left" alt="Geovane Felicio" width="42px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />
</a>

<br />
<br />
    
  <img align="right" alt="GIF" src="https://github.com/0xAbdulKhalid/0xAbdulKhalid/raw/main/assets/mdImages/Right_Side.gif" width = 250px />
  
### 👨‍💻 Languages and Tools

<br />

[![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white&link=https://github.com/geovanefi)](https://github.com/geovanefi) 
[![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&link=https://github.com/geovanefi)](https://github.com/geovanefi) 
[![Bootstrap](https://img.shields.io/badge/-Bootstrap-563D7C?style=flat&logo=bootstrap&link=https://github.com/geovanefi)](https://github.com/geovanefi)

[![React](https://img.shields.io/badge/-React-black?style=flat&logo=react&link=https://github.com/geovanefi)](https://github.com/geovanefi) 
[![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat&logo=javascript&link=https://github.com/geovanefi)](https://github.com/geovanefi) 
[![Typescript](https://img.shields.io/badge/-TypeScript-white?style=flat&logo=typescript&link=https://github.com/geovanefi)](https://github.com/geovanefi)

[![Nodejs](https://img.shields.io/badge/-Nodejs-green?style=flat&logo=Node.js&link=https://github.com/geovanefi)](https://github.com/geovanefi) 
[![JSON](https://img.shields.io/badge/-json-02569B?style=flat&logo=json&link=https://github.com/geovanefi)](https://github.com/geovanefi)

[![MySQL](https://img.shields.io/badge/-MySQL-black?style=flat&logo=mysql&link=https://github.com/geovanefi)](https://github.com/geovanefi)
[![Git](https://img.shields.io/badge/-Git-black?style=flat&logo=git&link=https://github.com/geovanefi)](https://github.com/geovanefi) 
[![Heroku](https://img.shields.io/badge/-Heroku-gray?style=flat&logo=heroku&link=https://github.com/geovanefi)](https://github.com/geovanefi) 



<br />

<br>
<br/>
<br>

<p align="center"><b>SPAs com ReactJS</b></p>

# Ignite Timer

### 💡 Ideia

A Técnica Pomodoro é um método de gerenciamento de tempo que consiste na utilização de um cronômetro para dividir o trabalho em períodos curtos de tempo separados por breves intervalos. Com o <b>Ignite Timer</b> você consegue aplicar facilmente essa técnica no seu dia a dia e aumentar sua produtividade.

### ✅ Features

- [x] Escolha ou crie sua própria tarefa
- [x] Defina o período que você quer trabalhar
- [x] Inicie ou interrompa um ciclo
- [x] Histórico de ciclos

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### ⚠ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o aplicativo (celular/emulador)

```bash
# Clone este repositório
$ git clone 

# Acesse a pasta do projeto no terminal/cmd
$ cd react-css-timer

# Instale as dependências
$ npm i

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
```

### 🚦 Status do projeto

🚧 Em construção... 🚧
<br>
<br>
<br>

# Anotações do desenvolvedor

## ESLint

    # Comandos de codigo limpo
    npm i eslint -D
    e 
    npm i @rocketseat/eslint-config -D
    
    O ESLint possui esse link da documentação oficial: https://eslint.org/docs/rules/

    
     para tratar dados no lint:
     npm run lint --fixed


## Rotas
    Pacote de instação de rotas:
    npm i react-router-dom

## Icones
    Usando a biblioteca phosphor-react:
    npm i phosphor-react

## Datas 
    formataçoes de datas: 
    npm i date-fns  

# Hooks

## React Hook Form
    Bilblioteca de Formulario
    npm i react-hook-form

    importação: 
        import {} from 'react-hook-form'

## Validação com formulario
    1# - yup lib js
    2# - joi lib js
    3# - zod lib js (em uso nesse projeto, por integração com typeScript)

    npm i zod

    Uso em conjunto com outra biblioteca:
    ### HookForm

    npm i @hookform/resolvers

    importação: 
        import { zodResolver } from '@hookform/resolvers/zod'
        import * as zod from 'zod'

## Immer 
    Possibilita trabalho com estrutura de dados imutaveis, como se nao fossem variaveis mutaveis.

    npm i immer

    importação:
        import { produce } from 'immer'

        1º paramentro é o estado que desejo alterar;
        2º draft , ou seja, o rascunho das informações a serem inseridas/substituidas
        ex: 
        return produce(state, (draft) => {
            draft.variavel.push(acao.payload.novaAcao)
            draft.idDaAcao = acao.payload.novaAcao.id
        })

<br />

<br>
<br>
<br>
<p align='center'>
  <img align="center" src="https://github-readme-stats.vercel.app/api?username=geovanefi&show_icons=true&title_color=fff&icon_color=79ff97&text_color=efefef&bg_color=24292e" alt="Geovane Felicio's Github Stats">
</p>

<p align='center'>
  <img src="https://visitor-badge.glitch.me/badge?page_id=geovanefi.geovanefi" alt="visitor badge"/>
</p>
