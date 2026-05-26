// Permite verificar a existência de campos em um documento ou um tipo de dado

// Operador $exists
// Verifica se um campo está presente ou não em um documento
db.produtos.find({
    "estoque": { $exists: true }
});

// Operador $type
// Filtra documentos com base no tipo de dado armazenado
db.produtos.find({
    "preco": { $type: "double" }
});