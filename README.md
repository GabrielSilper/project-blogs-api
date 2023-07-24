# Blogs API

Um projeto para aplicar meus conhecimentos na área de backend e projetar uma api RESTFul de blogs.
A aplicação serve para gerenciar posts de um blog e podendo classificar por categorias para treinar associações.

### O que foi usado:

- NodeJs;
- ExpressJS;
- SequelizeJs;
- MySQL;
- Express-async-errors;
- Joi;
- JWT;

### O que foi desenvolvido:

- Migrations e Models para fazer comunicação com o banco de dados da aplicação;
- Criei diversos middlewares para validar os dados antes de fazer uma requisição;
- Criei os seguintes endpoints:
  - endpoints POST:
    1. _/user_ para cadastrar um novo usuário.
    1. _/login_ para retornar um token de acesso para o usuário e criar as validações.
    1. _/categories_ para cadastrar um novo tipo de categoria.
    1. _/post_ para cadastrar um novo blog post.
  - endpoints GET:
    <br> **_A partir daqui todos os endpoints precisam de validações de acesso e dados_**
    1. _/user_ para retornar todos os usuários da aplicação.
    1. _/user/:id_ para retornar um usuário específico da aplicação.
    1. _/categories_ para retornar todas as categorias.
    1. _/post_ para retornar todos os blog posts.
    1. _/post/:id_ para retornar um blog post específico.
    1. _/post/search?q=_ para pesquisar um blog post com um query parameter.
  - endpoints PUT:
    1. _/post/:id_ para atualizar o título e um conteúdo de um blog post.
  - endpoints DELETE:
    1. _/post/:id_ para deletar um blog post.
    1. _/user/me_ para deletar seu próprio usuário.
