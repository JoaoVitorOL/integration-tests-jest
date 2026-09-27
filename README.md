 TRAZER PARA A PRÓXIMA AULA DUAS APIS PÚBLICAS COM ENDPOINTS QUE TAMBEM TENHA POST, PUT ( JÁ DEIXA AS APIS VALIDADAS)

APIs:


Restful-API ([https://api.restful-api.dev](https://api.restful-api.dev)) <br>
URL Base:    [https://api.restful-api.dev](https://api.restful-api.dev) <br>
POST /objects (Cria um novo objeto tecnológico/dispositivo) <br>
formato do JSON para POST:  <br>
{ <br>
   "name": "MacBook Pro M3 Test", <br>
   "data": { <br>
      "year": 2026, <br>
      "price": 1849.99, <br>
      "CPU model": "Apple M3", <br>
      "Hard disk size": "1 TB" <br>
   } <br>
} <br>

RETORNO DO POST:
{ <br>
    "id": "ff808181a09d98f701a0e455b4ec2852", <br>
    "name": "MacBook Pro M3 Test", <br>
    "createdAt": 1790537217260, <br>
    "data": { <br>
        "year": 2026, <br>
        "price": 1849.99, <br>
        "CPU model": "Apple M3", <br>
        "Hard disk size": "1 TB" <br>
    } <br>
} <br>

PUT /objects/ff808181932badb60193301a913413ea (Atualiza um objeto existente — nota: você também pode usar um ID dinâmico gerado na hora pelo seu teste via POST <br>

{ <br>
   "name": "MacBook Pro M3 Atualizado", <br>
   "data": { <br>
      "year": 2026, <br>
      "price": 1999.99, <br>
      "CPU model": "Apple M3 Max", <br>
      "Hard disk size": "2 TB", <br>
      "color": "Silver" <br>
   } <br>
} <br>


GET /objects <br>
DELETE /objects/{id} <br>



# API test automation with Jest and PactumJS
teste2
> Simple integration between JestJS and PactumJS.

## GitHub Actions

[![Node.js CI](https://github.com/ugioni/integration-tests-jest/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/integration-tests-jest/actions/workflows/node.js.yml)

## SonarCloud

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ugioni_integration-tests-jest&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ugioni_integration-tests-jest)

# Getting Started

### Pactum docs:
 - [PactumJS](https://pactumjs.github.io/)

### Prerequisites:
 - NodeJS `v22`

### How to run?

Inside of the project folder run:

 1. `npm install --save-dev`
 1. `npm run ci`

After that you should see a `./output` folder with some `HTML` reports.

### Docs to Api under tests: 
 - [Dummyjson](https://dummyjson.com/docs)
 - [Gorest](https://gorest.co.in/)
 - [Toolshop API](https://api.practicesoftwaretesting.com/api/documentation)
 - [Deck of Cards](https://deckofcardsapi.com/)
 - [JSON placeholder](https://jsonplaceholder.typicode.com/)
 - [http bin](http://httpbin.org/)
 - [rick and morty api](https://rickandmortyapi.com/documentation/#rest)
 - [Petstore](https://petstore.swagger.io/#/) 
 - [ServeRest](https://serverest.dev/#/)
 - [ServeRest - Datadog](https://p.datadoghq.eu/sb/421fcfee-35ec-11ee-b87f-da7ad0900005-2aaf85264a89d11b7001bcab452a266e?refresh_mode=sliding&theme=light&tpl_var_env%5B0%5D=serverest.dev&from_ts=1699931511294&to_ts=1699932411294&live=true)
