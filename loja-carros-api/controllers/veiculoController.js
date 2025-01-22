import { listarVeiculos, criarVeiculo, excluirVeiculo } from '../models/veiculoModel.js';

/**
 * Lista todos os veículos da base de dados.
 */
export async function listarTodosVeiculos(req, res) {
  try {
    const veiculos = await listarVeiculos();
    res.status(200).json(veiculos);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao listar veículos' });
  }
}

/**
 * Adiciona um novo veículo à base de dados.
 */
export async function cadastrarVeiculo(req, res) {
  try {
    const veiculo = req.body;
    const resultado = await criarVeiculo(veiculo);
    res.status(201).json(resultado);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao cadastrar veículo' });
  }
}

/**
 * Remove um veículo da base de dados pelo ID.
 */
export async function deletarVeiculo(req, res) {
  try {
    const { id } = req.params;
    console.log(id);
    const resultado = await excluirVeiculo(id);
    console.log(resultado);
    if (!resultado) {
      return res.status(404).json({ message: `Nenhum veículo encontrado com o ID ${id}` });
    }

    res.status(200).json({ message: 'Veículo excluído com sucesso', resultado });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
