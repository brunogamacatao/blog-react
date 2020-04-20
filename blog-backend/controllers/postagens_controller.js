const express = require('express');
const router = express.Router();
const PostagensService = require('../services/postagens_service');

// retorna todas as postagens
router.get('/', async (req, res) => {
  res.json(await PostagensService.getTodas());
});

// retorna uma postagem pelo id
router.get('/:id', async (req, res) => {
  res.json(await PostagensService.getPorId(req.params.id));
});

// cria uma postagem
router.post('/', async (req, res) => {
  res.status(201).json(await PostagensService.criar(req.body));
});

// remove uma postagem
router.delete('/:id', async (req, res) => {
  res.json(await PostagensService.remover(req.params.id));
});

// atualiza uma postagem
router.put('/:id', async (req, res) => {
  res.json(await PostagensService.atualizar(req.params.id, req.body));
});

module.exports = router;
