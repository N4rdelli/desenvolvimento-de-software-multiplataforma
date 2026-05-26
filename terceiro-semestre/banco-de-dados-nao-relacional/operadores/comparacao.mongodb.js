// Operadores de comparação são utilizados para realizar filtros em consultas, comparando valores dentro dos documentos

// Operador $eq (igual a)
// Retorna documento cujo valor de um campo seja igual ao valor informado
db.produtos.find({ 
    "categoria": { $eq: "Eletrônicos" }
});

// Operador $ne (diferente de)
// Retorna documentos cujo valor de um campo seja diferente do valor informado
db.produtos.find({ 
    "categoria": { $ne: "Eletrônicos" }
});

// Operador $gt (maior que)
// Retorna documentos cujo valor de um campo seja maior que o valor informado
db.produtos.find({ 
    "preco": { $gt: 2500 }
});

// Operador $gte (maior ou igual a)
// Retorna documentos cujo valor de um campo seja maior ou igual ao valor informado
db.produtos.find({ 
    "preco": { $gte: 2500 }
});

// Operador $lt (menor que)
// Retorna documentos cujo valor de um campo seja menor que o valor informado
db.produtos.find({ 
    "preco": { $lt: 2500 }
});

// Operador $lte (menor ou igual a)
// Retorna documentos cujo valor de um campo seja menor ou igual ao valor informado
db.produtos.find({ 
    "preco": { $lte: 2500 }
}); 

// Combinação entre $gte e $lte
db.produtos.find({
    "preco": { $gte: 2000, $lte: 4000 }
});