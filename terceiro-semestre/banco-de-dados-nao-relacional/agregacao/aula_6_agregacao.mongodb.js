// use aula_6_agregacao

db.clientes.insertMany([
    {
        "_id": 153,
        "nome": "Maria",
        "email": "maria@example.com"
    },
    {
        "_id": 154,
        "nome": "João",
        "email": "joao@example.com"
    },
    {
        "_id": 155,
        "nome": "Ana",
        "email": "ana@example.com"
    }
]);

db.vendas.insertMany([
    {
        "_id": 57,
        "cliente_id": 153,
        "data_venda": ISODate("2023-01-15T08:00:00Z"),
        "mes": 1,
        "ano": 2023
    },
    {
        "_id": 63,
        "cliente_id": 154,
        "data_venda": ISODate("2023-02-20T10:30:00Z"),
        "mes": 2,
        "ano": 2023
    },
    {
        "_id": 75,
        "cliente_id": 153,
        "data_venda": ISODate("2023-03-05T14:45:00Z"),
        "mes": 3,
        "ano": 2023
    },
    {
        "_id": 84,
        "cliente_id": 154,
        "data_venda": ISODate("2023-04-10T09:15:00Z"),
        "mes": 4,
        "ano": 2023
    },
    {
        "_id": 92,
        "cliente_id": 155,
        "data_venda": ISODate("2023-05-25T16:00:00Z"),
        "mes": 5,
        "ano": 2023
    }
]);

db.item.insertMany([
    {
        "_id": 1,
        "venda_id": 57,
        "produto": "Laptop",
        "quantidade": 2,
        "preco_unitario": 1200
    },
    {
        "_id": 2,
        "venda_id": 63,
        "produto": "Mouse",
        "quantidade": 1,
        "preco_unitario": 320
    },
    {
        "_id": 3,
        "venda_id": 75,
        "produto": "Notebook",
        "quantidade": 1,
        "preco_unitario": 7200
    },
    {
        "_id": 4,
        "venda_id": 84,
        "produto": "Mouse Pad",
        "quantidade": 5,
        "preco_unitario": 75
    },
    {
        "_id": 5,
        "venda_id": 92,
        "produto": "Smartphone",
        "quantidade": 3,
        "preco_unitario": 3400
    },
]);