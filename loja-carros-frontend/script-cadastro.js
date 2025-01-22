const API_URL = 'http://localhost:3000/veiculos';


// Função para cadastrar um novo veículo
async function cadastrarVeiculo(veiculo) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(veiculo),
    });

    if (response.ok) {
      alert('Veículo cadastrado com sucesso!');
      listarVeiculos();
    } else {
      alert('Erro ao cadastrar veículo.');
    }
  } catch (error) {
    console.error('Erro ao cadastrar veículo:', error);
  }
}

// Event listener para os botão
document.getElementById('btnCadastrar').addEventListener('click', (event) => {
  event.preventDefault();

  const veiculo = {
    marca: document.getElementById('marcaInput').value,
    modelo: document.getElementById('modeloInput').value,
    anoFabricacao: parseInt(document.getElementById('anoInput').value),
    cor: document.getElementById('corInput').value,
    tipo: document.getElementById('tipoInput').value,
    quilometragem: parseInt(document.getElementById('kmInput').value),
    numeroPortas: parseInt(document.getElementById('portasInput').value),
    urlImagem: document.getElementById('imagemInput').value,
  };

  console.log(veiculo);
  cadastrarVeiculo(veiculo);

});

