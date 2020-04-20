const mongoose = require('mongoose');

const postagemSchema = new mongoose.Schema({
  avatar: String,
  autor: String,
  titulo: String,
  texto: String
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Postagem', postagemSchema);
