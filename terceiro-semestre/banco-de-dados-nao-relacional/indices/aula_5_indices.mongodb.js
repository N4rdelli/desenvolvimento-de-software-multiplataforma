// use aula_5_indices

db.users.insertMany([
    {
        _id: 1,
        username: "Doardo",
        email: "doardo@email.com",
        age: 20,
        active: true,
        premium: false,
        hobbies: ["gaming", "coding", "sleeping"],
        tasks: [
            {
                title: "Give me a kiss",
                status: "pending",
                completed: false
            }
        ]
    },
    {
        _id: 2,
        username: "Nardelli",
        email: "nadelli@email.com",
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
        email: "surita@email.com",
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

db.produtos.insertMany([
    {
        "id": 1,
        "nome": "Notebook",
        "marca": "Dell",
        "categoria": "Eletrônicos",
        "preco": 4500,
        "estoque": 10,
        "avaliacao": 4.7
    },
    {
        "id": 2,
        "nome": "Smartphone",
        "marca": "Samsung",
        "categoria": "Eletrônicos",
        "preco": 2500,
        "estoque": 30,
        "avaliacao": 4.5
    },
    {
        "id": 3,
        "nome": "Tablet",
        "marca": "Apple",
        "categoria": "Eletrônicos",
        "preco": 3500,
        "estoque": 20,
        "avaliacao": 4.8
    },
    {
        "id": 4,
        "nome": "Cadeira Ergonômica",
        "marca": "Sony",
        "categoria": "Móveis",
        "preco": 1200,
        "estoque": 15,
        "avaliacao": 4.6
    }
]);