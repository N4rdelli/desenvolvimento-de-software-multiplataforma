// Importa os módulos instalados
import express from 'express';
import cors from 'cors';
import routes from "./routes/routes.js";
import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const swaggerDocument = require("./swagger-output.json");

// Suporte para importar arquivos json usando ESModules

// Cria uma instância do aplicativo Express
const app = new express();

// Comunicação entre front-end e back-end
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/toDo", routes);
app.listen(5000);