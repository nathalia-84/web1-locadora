import express from 'express';
import { listarTodosVeiculos, cadastrarVeiculo, deletarVeiculo } from '../controllers/veiculoController.js';

const router = express.Router();

router.get('/', listarTodosVeiculos);
router.post('/', cadastrarVeiculo);
router.delete('/:id', deletarVeiculo);

export default router;
