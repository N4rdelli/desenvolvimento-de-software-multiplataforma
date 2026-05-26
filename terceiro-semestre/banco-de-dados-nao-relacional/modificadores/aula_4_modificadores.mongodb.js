// use aula_4_modificadores

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

db.users.insertMany([
    {
        _id: 1,
        username: "Eduardo",
        age: 20,
        active: true,
        premium: false,
        hobbies: ["gaming", "coding", "sleeping"],
        tasks: [
            {
                title: "Prototype a new feature",
                status: "pending",
                completed: false
            }
        ]
    },
    {
        _id: 2,
        username: "Nardelli",
        age: 19,
        active: false,
        premium: true,
        hobbies: ["dancing", "drawing", "cooking"],
        tasks: [
            {
                title: "Study MongoDB",
                status: "pending",
                completed: false
            }
        ]
    },
    {
        _id: 3,
        username: "Surita",
        age: 21,
        active: true,
        premium: true,
        hobbies: ["reading", "swimming", "driving"],
        tasks: [
            {
                title: "Read a book",
                status: "done",
                completed: true
            }
        ]
    }
]);