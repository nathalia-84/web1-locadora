import conectarAoBanco from '../config/dbConfig.js';
import { ObjectId } from "mongodb";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

/**
 * Retorna a coleção de veículos no banco de dados.
 */
const getColecao = () => conexao.db('loja_carros').collection('cars');

export async function listarVeiculos() {
  return getColecao().find().toArray();
}

export async function criarVeiculo(veiculo) {
  return getColecao().insertOne(veiculo);
}

export async function excluirVeiculo(id) {
    const objID = ObjectId.createFromHexString(id);
    return getColecao().findOneAndDelete({ _id: new ObjectId(objID) });
  }
