// Base de dados exemplo
// use aula_3_operadores;

db.produtos.insertMany([
    {
        "id": 1,
        "nome": "Notebook",
        "marca": "Dell",
        "categoria": "Eletrônicos",
        "preco": 4499.90,
        "estoque": 10
    },
    {
        "id": 2,
        "nome": "Smartphone",
        "marca": "Samsung",
        "categoria": "Eletrônicos",
        "preco": 2500.00,
        "estoque": 30,
        "avaliacao": 4.5
    },
    {
        "id": 3,
        "nome": "Tablet",
        "marca": "Apple",
        "categoria": "Eletrônicos",
        "preco": 3449.70,
        "estoque": 20,
        "avaliacao": 4.8
    },
    {
        "id": 4,
        "nome": "Cadeira Ergonômica",
        "marca": "Sony",
        "categoria": "Móveis",
        "preco": 1199.90,
        "estoque": 15,
        "avaliacao": 4.6
    },
    {
        "id": 5,
        "nome": "Mouse",
        "marca": "Ozzix",
        "categoria": "EletrÔnicos",
        "preco": 270.49,
        "estoque": 7
    }
]);