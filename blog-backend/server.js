// Lê os dados do arquivo .env
require('dotenv').config()

// Importa os frameworks
const express = require('express');
const cors = require('cors');

// Cria o servidor web
const app = express();

// Configura o middleware do servidor web
app.use(cors()); // permite requisições CORS de qualquer host
app.use(express.json()); // popula o objeto req.body
app.use(express.static('static')); // serve arquivos estáticos

// Configura os roteamentos
app.use('/postagens', require('./controllers/postagens_controller'));

// Inicia o servidor web
app.listen(parseInt(process.env.SERVER_PORT), () => {
  console.log('servidor iniciado com sucesso');
  console.log('Servidor rodando em http://localhost:' + process.env.SERVER_PORT);
});
