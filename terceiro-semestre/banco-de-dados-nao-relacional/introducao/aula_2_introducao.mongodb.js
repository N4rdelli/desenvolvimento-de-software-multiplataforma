// Seleciona o banco de dados paa uso. Se ele não existir, ee será criado assim que um documento for inserido
// use aula_2_introducao_mongodb;

// Cria uma coleção
db.createCollection("usuarios");

// Insere um único documento a uma coleção
db.insertOne({ nome: "Doa", idade: 20, cidade: "Barra Bonita" });

// Insere múltiplos documentos em uma coleção
db.insertMany([
    { nome: "Nardelli", idade: 19, cidade: "Jaú", cpf: "Não tem :(" },
    { nome: "Surita", idade: 15, cidade: "Barra Bonita" },
    { nome: "Bruno", idade: 17, cidade: "Barra Bonita", cpf: "123.456.789-00" }
])

// Filtra documentos completos com base em uma condição
db.usuarios.find({ cidade: "Barra Bonita" });

// Filtra apenas alguns campos de um documento
db.usuarios.find(
    // Condição de filtro
    { cidade: "Barra Bonita" },
    // Definem quais campos irão aparecer na consulta
    { nome: 1, idade: 1, _id: 0 }
);

// Atualiza um documento específico
db.usuarios.updateOne(
    // Condição que seleciona o documento a ser atualizado
    { nome: "Doa" },
    // Operação de atualização 
    { $set: { cpf: "987.654.321-00" }}
);

// Atualiza múltiplos documentos
db.usuarios.uppdateMany(
    // Condição
    { cidade: "Barra Bonita" },
    // Atualização
    { $set: { estado: "SP" }}
);

// Remove um documento específico
db.usuarios.deleteOne({ nome: "Bruno" });

// Remove múltiplos documentos
db.usuarios.deleteMany({ cidade: "Barra Bonita" });