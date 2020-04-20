const mongoose = require('mongoose');

function conecta() {
  // 1. Conecta ao banco
  const params = { useNewUrlParser: true };
  mongoose.connect(process.env.DATABASE_URL, params);

  // 2. Obtém uma referência para a conexão
  const db = mongoose.connection;

  // 3. Adiciona alguns listeners de eventos
  db.on('error', (error) => console.error(error))
  db.once('open', () => console.log('conectado ao banco de dados'))
  
  // 4. Retorna a conexão
  return db;
}

// Define o que exportar do módulo
module.exports = {
  conecta
};
