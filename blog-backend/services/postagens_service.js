const db = require('../db/conexao_mongo');
const Postagem = require('../models/postagem');

// Conecta ao banco de dados
db.conecta();

async function getPorId(id) {
  return await Postagem.findById(id);
}

async function getTodas() {
  return await Postagem.find();
}

async function criar(dados) {
  return await new Postagem(dados).save();
}

async function remover(id) {
  return await (await getPorId(id)).remove();
}

async function atualizar(id, novosDados) {
  return await (await getPorId(id)).set(novosDados).save();
}

module.exports = {
  getPorId,
  getTodas,
  criar,
  remover,
  atualizar
};
