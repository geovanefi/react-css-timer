

## Biliotecas

    # Styled Components
        npm i styled-components

        Usado para poder usar o css como componente na aplicação.
        Precisa usar tambem pacote de tipagem como depedencia de desenvolvimento:

        npm i @types/styled-components -D
    

## ESLint

    # Comandos de codigo limpo de
    npm i eslint -D

    e 

    npm i @rocketseat/eslint-config -D

    Commit: Estrutura da aplicação - Configurando ESLint

    
    Caso queira ver as configurações utilizadas nesse plugin: https://github.com/Rocketseat/eslint-config-rocketseat/blob/main/react.js

    O ESLint possui esse link da documentação oficial: https://eslint.org/docs/rules/

    #Rodando
    npx eslint src --ext .tsx

    linstados os erros, segue entao para limpar tudo:
      npx eslint src --ext .tsx --fix

    ## Configuração
    Em package.json criado um Script com:
     "lint": "eslint src --ext .tsx,.ts"

     Apos isso basta rodar no terminal:
     npm run lint

     para tratar dados no lint:
     npm run lint --fixed


## Trabalhgando com Rocketseat
    Pacote de instação de rotas:
    npm i react-router-dom

## Icones
    Usando a biblioteca phosphor-react
    npm i phosphor-react

## Datas 
    formataçoes de datas 
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
        2º (draft) , ou seja, o rascunho das informações a serem inseridas/substituidas
        ex: 
        return produce(state, (draft) => {
            draft.variavel.push(acao.payload.novaAcao)
            draft.idDaAcao = acao.payload.novaAcao.id
        })