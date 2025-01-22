import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/veiculoRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5500'
}));

// Middlewares
app.use(express.json());
app.use('/veiculos', routes);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
