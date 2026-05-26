// A atualização de documentos em MongoDB pode ser feita de diversas formas

// 'updateOne ( filtro, atualizacao, opcoes )' atualiza um único documento
// 'updateMany ( filtro, atualizacao, opcoes )' atualiza múltiplos documentos
// 'replaceOne ( filtro, documento, opcoes )' substitui um documento inteiro por outro

// ----------------------------------------------------------------------

// OPERADORES DE ATUALIZAÇÃO
// Operadores de atualização permitem modificar campos específicos

// Operador $set
// Define o valor de um campo específico, criando-o se não existir
db.produtos.updateOne(
    { users: "Eduardo" },
    { $set: { premium: true } }
);

// Operador $unset
// Remove um campo específico de um documento
db.users.updateOne(
    { username: "Nardelli" },
    { $unset: { premium: "" } }
);

// Operador $rename
// Renomeia um campo específico em um documento
db.users.updateOne(
    { username: "Surita" },
    { $rename: { active: "isActive" } }
);

// Operador $inc
// Incrementa o valor de um campo numérico por uma quantidade especificada
db.users.updateMany(
    // Condição
    { age: { $existis: true} },
    // Atualização
    { $inc: { age: 1 } }
);

// Operador $mul
// Multiplica o valor de um campo numérico por uma quantidade especificada
db.users.updateOne(
    // Condição
    { username: "Eduardo" },
    // Atualização
    { $mul: { age: 2 } }
);

// Operador $min
// Define o valor de um campo numérico se for menor que o valor especificado
db.users.updateOne(
    // Condição
    { username: "Eduardo" },
    // Atualização
    { $min: { age: 25 } }
);

// Operador $max
// Define o valor de um campo numérico se for maior que o valor especificado
db.users.updateOne(
    // Condição
    { username: "Eduardo" },
    // Atualização
    { $max: { age: 30 } }
);

// ----------------------------------------------------------------------

// OPERADORES DE ARRAYS

// Operadores de arrays permitem modificar campos que são arrays, como adicionar ou remover elementos

// Operador $push
// Adiciona um valor a um array, criando o campo se ele não existir
db.users.updateOne(
    // Condição
    { username: "Nardelli" },
    // Atualização
    { $push: { hobbies: "sleeping" } }
);

// Operador $pop
// Remove o primeiro ou o último elemento de um array
db.users.updateOne(
    // Condição
    { username: "Nardelli" },
    // Atualização
    { $pop: { hobbies: 1 } } // Remove o último elemento do array
);

// Operador $pull
// Remove elementos específicos de um array
db.users.updateOne(
    // Condição
    { username: "Nardelli" },
    // Atualização
    { $pull: { hobbies: "cooking" } }
);

// Operador $addToSet
// Adiciona um valor a um array somente se ele ainda não existir
db.users.updateOne(
    // Condição
    { username: "Surita" },
    // Atualização
    { $addToSet: { hobbies: "reading" } }
)

// Operador $pullAll
// Remove múltiplos valores de um array
db.users.updateOne(
    // Condição
    { username: "Surita" },
    // Atualização
    { $pullAll: { hobbies: ["swimming", "driving"] } }
);

// Operador $each
// Adiciona múltiplos valores a um array, criando o campo se ele não existir
db.users.updateOne(
    // Condição
    { username: "Surita" },
    // Atualização
    { $push: { hobbies: {
        $each: ["coding", "music"]
    } } }
);

// ----------------------------------------------------------------------

// SUBSTITUIÇÃO DE DOCUMENTOS

// Substituição de um documento inteiro
db.users.replaceOne(
    // Condição
    { username: "Eduardo" },
    // Novo documento
    {
        _id: 1,
        username: "Eduardo",
        age: 20,
        isActive: true,
        premium: true,
        hobbies: ["gaming", "coding", "sleeping"],
        tasks: []
    }
);