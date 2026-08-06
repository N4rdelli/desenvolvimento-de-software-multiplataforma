// Importa os módulos instalados
import express from 'express';
import cors from 'cors';

// Cria uma instância do aplicativo Express
const app = new express();

// 
app.use(express.json());
app.use(cors({
    Credential: true,
    origin: "http://localhost:3000"
}));

app.listen(5000);