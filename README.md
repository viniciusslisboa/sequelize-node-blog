<h1 align="center">
    <img alt="Node API" src="./assets/nodejsicon.svg"  width="80px" >
</h1>
<h2 align="center">Blog API </h2>

# Sobre

=> Objetivo da API é simular um blog que utiliza banco de dados, utilizei o mysql no Node.js com o sequelize.

=> Prentendo criar um CRUD completo mas por enquanto só existem as funções de criar e deletar posts.

# Back-end 

=> No back-end, como foi dito acima utilizei Node.js junto do express para criar as rotas http.

=> Instanciei o handlebars, desabilitando algumas configurações padrão para facilitar a comunicação entre back e front. (Utilizei handlebars apenas para finalidade de estudos).

=> Configurei as rotas e utilizei a exportação de modulos do ES6.

=> Também utilizei do Sequelize (ORM) para comunicação do mysql2 com o Node.js. 

# Front-end 

=> No front-end apenas utilizei o handlebars no lugar no HTML5.

# Tecnologias 

=> Sequelize
=> SQL
=> Mysql2
=> Node.js
=> HTML5 
=> Handlebars

# Dependências

=> "body-parser": "^1.19.0",
=> "cors": "^2.8.5",
=> "express": "^4.17.1",
=> "express-handlebars": "^5.3.4",
=> "mysql2": "^2.3.0",
=> "sequelize": "^6.6.5"