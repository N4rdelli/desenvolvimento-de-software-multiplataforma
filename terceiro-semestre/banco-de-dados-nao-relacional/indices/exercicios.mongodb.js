// use aula_5_exercicios

// ----------------------------------------------------------------------

// Crie uma coleção de 100 mil documentos e registre o tempo de consulta sem índices e depois com índices

// Cria a coleção
for (let i = 0; i < 100000; i++) {
    db.usuarios.insertOne({
        nome: `Usuario${i}`,
        email: `usuario${i}@email.com`,
        idade: Math.floor(Math.random() * 80) + 18
    });
}

// Consultando um e-mail específico sem índice
db.usuarios.find({ email: "usuario99500@email.com" }).explain("executionStats");

// Adicionando o índice
db.usuarios.createIndex({ email: 1 });

// Consultando novamente, porém com índice
db.usuarios.find({ email: "usuario99500@email.com" }).explain("executionStats");