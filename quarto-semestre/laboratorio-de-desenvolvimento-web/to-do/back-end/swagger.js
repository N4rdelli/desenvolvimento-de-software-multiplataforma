import SwaggerAutogen from "swagger-autogen";

const doc = {
    info:{
        title: "API ToDo List",
        description: "Documentação para a geração automática dos testes com o swagger."
    },
    host: "localhost:5000",
    basePath: "/toDo"
}

// Indica o caminho das rotasque serão utilizadas pelo swagger
const routesFiles = ["./routes/routes.js"];

// Indica o arquivo que será gerado automaticamnte pelo swagger
const outputFile = "./swagger-output.json";

// Utiliza o swagger
SwaggerAutogen(outputFile, routesFiles, doc);