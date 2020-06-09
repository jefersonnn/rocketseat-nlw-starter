const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Método HTTP:
  * 
  * GET: Buscar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params(const params = Request.query): Parâmetros nomeados enviados na rota após o símbola de '?' (filtros, paginação)
   * Route Params(const params = Request.params): Parâmetros utilizados para identificar recursos
   * Request Body(const body = Request.body): Corpo da requisição, utilizado para criar ou alterar recursos 
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB
    */

app.listen(3333);