const API_URL = 'http://localhost:3000/veiculos';


// Função para listar todos os veículos
async function listarVeiculos() {
  try {
    const response = await fetch(API_URL);
    const veiculos = await response.json();

  console.log(veiculos);
    exibirVeiculos(veiculos);
  } catch (error) {
    console.error('Erro ao buscar veículos:', error);
  }
}

// Função para exibir veículos na página
function exibirVeiculos(veiculos) {
    const container = document.getElementById('vehicleList');
    container.innerHTML = '';
  
    veiculos.forEach((veiculo) => {
      const card = document.createElement('div');
      card.className = 'card mb-3';
      card.style.width = '18rem';
  
      card.innerHTML = `
        <img src="${veiculo.urlImagem}" class="card-img-top" alt="Imagem do veículo">
        <div class="card-body">
          <h5 class="card-title">${veiculo.marca} ${veiculo.modelo}</h5>
          <p class="card-text">
            Ano: ${veiculo.anoFabricacao}<br>
            Cor: ${veiculo.cor}<br>
            Tipo: ${veiculo.tipo}<br>
            Quilometragem: ${veiculo.quilometragem} km<br>
            Portas: ${veiculo.numeroPortas}
          </p>
          <button class="btn btn-danger" onclick="deletarVeiculo('${veiculo._id}')">Excluir</button>
        </div>
      `;
  
      container.appendChild(card);
    });
  }

  // Função para deletar um veículo por ID
async function deletarVeiculo(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        alert('Veículo deletado com sucesso!');
        listarVeiculos();
      } else {
        alert('Erro ao deletar veículo.');
      }
    } catch (error) {
      console.error('Erro ao deletar veículo:', error);
    }
  }


// Inicializa a página listando os veículos
listarVeiculos();