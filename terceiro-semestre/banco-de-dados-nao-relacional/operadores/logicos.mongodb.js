// Operadores lógicos combinam mútiplas condições dentro de uma única consulta

// Operador $and (e)
// Exige que todas as condições especificadas sejam verdadeiras
db.produtos.find({
    $and: [
        { "categoria": "Eletrônicos" },
        { "preco": { $gt: 3000 } }
    ]
})

// Operador $or (ou)
// Retorna documentos que atendam a pelo menos uma das condições especificadas
db.produtos.find({
    $or: [
        { "avaliacao": { $gte: 4.8 } },
        { "marca": { $eq: "Samsung" } }
    ]
})

// Operador $not (não)
// Inverte a condição especificada, retornando documentos que não atendam à condição
db.produtos.find({
    "preco": {
        $not: { $gt: 3000 }
    }
})

// Operador $nor (nem)
// Exclui documentos que satisfaçam qualquer uma das condições listadas
db.produtos.find({
    $nor: [
        { "categoria": "Móveis" },
        { "estoque": { $lt: 20 } }
    ]
});