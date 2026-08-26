import SwaggerAutogen from "swagger-autogen";

const doc = {
    info:{
        title: "API ToDo List",
        description: "Documentação para a geração automática dos testes com o swagger."
    },
    host: "localhost:5000",
    basePath: "/toDo"
}

// Indica o caminho das rotas que serão utilizadas pelo swagger
const endpointsFiles = [
    "./routes/userRoutes.js",
    "./routes/taskRoutes.js"
];

// Indica o arquivo que será gerado automaticamnte pelo swagger
const outputFile = "./swagger-output.json";

// Utiliza o swagger
SwaggerAutogen(outputFile, endpointsFiles, doc);