# Documentação básica para a API

### createUser(req, res, next)
Cria um novo usuário com base nos dados fornecidos no corpo da requisição.

- **Requisição HTTP**: POST
- **Endpoint**: /users
- **Parâmetros de entrada**:
  - `name` (string): Nome do usuário.
  - `job` (string): Cargo do usuário.
- **Parâmetros de saída**:
  - `id` (number): ID do usuário criado.
  - `name` (string): Nome do usuário criado.
  - `job` (string): Cargo do usuário criado.

### removeUser(req, res, next)
Remove um usuário com base no nome fornecido na consulta.

- **Requisição HTTP**: DELETE
- **Endpoint**: /users
- **Parâmetros de entrada**:
  - `name` (string): Nome do usuário a ser removido.
- **Parâmetros de saída**:
  - `message` (string): Mensagem de confirmação de remoção do usuário.

### updateUser(req, res, next)
Atualiza os dados de um usuário com base no ID fornecido na consulta.

- **Requisição HTTP**: PUT
- **Endpoint**: /users
- **Parâmetros de entrada**:
  - `id` (number): ID do usuário a ser atualizado.
  - `name` (string): Novo nome do usuário.
  - `job` (string): Novo cargo do usuário.
- **Parâmetros de saída**:
  - `id` (number): ID do usuário atualizado.
  - `name` (string): Nome do usuário atualizado.
  - `job` (string): Cargo do usuário atualizado.

### getUser(req, res, next)
Recupera os dados de um usuário com base no nome fornecido na consulta. Também mantém o controle de quantas vezes o usuário foi acessado.

- **Requisição HTTP**: GET
- **Endpoint**: /users
- **Parâmetros de entrada**:
  - `name` (string): Nome do usuário a ser recuperado.
- **Parâmetros de saída**:
  - `id` (number): ID do usuário.
  - `name` (string): Nome do usuário.
  - `job` (string): Cargo do usuário.
  - `readed` (number): Quantidade de vezes que o usuário foi acessado.

### getUserReadCount(username)
Retorna a quantidade de vezes que um determinado usuário foi acessado.

- **Parâmetros de entrada**:
  - `username` (string): Nome do usuário.
- **Parâmetros de saída**:
  - `readCount` (number): Quantidade de vezes que o usuário foi acessado.

## Middleware

### checkPermissions(requiredPermissions)
Middleware para validar as permissões do usuário com base no token de autenticação.

- **Parâmetros de entrada**:
  - `role` (string): Cargo/Tipo do usuário logado. Define se o usuário logado possui permissão de "admin" para executar operações críticas.
- **Parâmetros de saída**: N/A


---

# Este é um teste para desenvolvedores

# possui 5 testes

## Introdução

Este projeto possui um banco de dados fake em fakeData.js com apenas um registro.
A ideia é melhorar e o CRUD escrito nos 4 arquivos de teste abaixo.

Será a validada a forma de escrita de código.
Escreva códigos que humanos consigam entender.

Fique a vontade para fazer modificaçoes nos serviços, comentários em código, estrutura, mas seja objetivo.

## teste1.js

GET em /user 

Possuimos neste arquivo um serviço que faz uma busca no banco fake e retorna um registro.
Este código funciona, mas é possivel melhorar.
Veja o que pode deixar ele melhor escrito e mais performatico.

## teste2.js

POST em /users, descubra a intenção dele e o corrija.

## teste3.js

Este procura um usuário e o deleta da base.
Retorne sucesso para o client caso realmente tenha sido excluido e deixe o código mais performatico.

## teste4.js

Atualiza os dados de um usuário especifico.

## teste5.js

Retorne quantas vezes determinado usuário foi lido no teste1.

## teste 6

Definina uma forma de criar permissão para o usuario, defina se o usuário pode deletar ou atualizar usuários. Crie um middleware para validar essas permissões e adicione no teste4 e teste3.

