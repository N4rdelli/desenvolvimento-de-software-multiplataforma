// Base de Dados

// use aula_4_exercicios

// ----------------------------------------------------------------------

// EXERCÍCIO 1

// Crie uma coleção chamada "heroes" e insira os seguintes documentos:
db.heroes.insertMany([
    { _id: 1, name: "Spider-Man", city: "New York", power: ["Agility", "Web-Shooting"], defeatVillains: 50},
    { _id: 2, name: "Batman", city: "Gotham", power: ["Martial Arts", "Detective Skills"], defeatVillains: 200},
    { _id: 3, name: "Wonder Woman", city: "Themyscira", power: ["Super Strength", "Lasso"], defeatVillains: 120}
])

// a) O Homem-Aranha desenvolveu um novo poder: Sentido Aranha Aprimorado. Adicione esse poder ao array power de "Spider-Man".
db.heroes.updateOne([
    // Condição: seleciona o documento do Homem-Aranha
    { name: "Spider-Man "},
    // Atualização: adiciona "Sentido Aranha Aprimorado" ao array 'power'
    { $push: { power: "Sentido Aranha Aprimorado" } }
])

// b) O Batman prendeu mais 10 vilões. Atualize o campo defeatedVillains para refletir essa mudança.
db.heroes.updateOne(
    // Condição: seleciona o documento do Batman
    { name: "Batman" },
    // Atualização: incrementa o número de vilões derrotados em 10
    { $inc: { defeatVillains: 10 } }
)

// c) O nome da cidade da Mulher-Maravilha foi alterado para "Amazonia". Atualize essa informação.
db.heroes.updateOne(
    // Condição: seleciona o documento da Mulher-Maravilha
    { name: "Wonder Woman" },
    // Atualização: define a nova cidade
    { $set: { city: "Amazonia" } }
)

// d) O Batman perdeu suas "Detective Skills" (ele não se lembra mais de como investigar). Remova essa habilidade da lista power.
db.heroes.updateOne(
    // Condição: seleciona o documento do Batman
    { name: "Batman" },
    // Atualização: remove "Detective Skills" do array 'power'
    { $pull: { power: "Detective Skills" } }
)

// ----------------------------------------------------------------------

// EXERCÍCIO 2

// Crie uma coleção chamada "menu" e insira os seguintes documentos:
db.menu.insertMany([
    { _id: 1, dish: "Pizza", ingredients: ["Dough", "Tomato Sauce", "Cheese"], price: 30 },
    { _id: 2, dish: "Sushi", ingredients: ["Rice", "Fish", "Seaweed"], price: 40 },
    { _id: 3, dish: "Tacos", ingredients: ["Tortilla", "Beef", "Cheese"], price: 15 }
])


// a) O restaurante decidiu aumentar o preço de todos os pratos em 10%. Atualize os preços.
db.menu.updateMany(
    // Condição: seleciona todos os documentos
    {},
    // Atualização: incrementa o preço em 10%
    { $mul: { price: 1.10 } }
)

// b) O Taco agora vem com "Guacamole". Adicione esse ingrediente à lista ingredients.
db.menu.updateOne(
    // Condição: seleciona o documento do Taco
    { dish: "Tacos" },
    // Atualização: adiciona "Guacamole" ao array 'ingredients'
    { $push: { ingredients: "Guacamole" } }
)

// c) O Sushi teve um reajuste e agora custa 35. Atualize esse valor.
db.menu.updateOne(
    // Condição: seleciona o documento do Sushi
    { dish: "Sushi" },
    // Atualização: define o preço para 35
    { $set: { price: 35 } }
)

// d) O restaurante removeu "Beef" dos Tacos e substituiu por "Chicken". Atualize a lista de ingredientes do Taco.
db.menu.updateOne(
    // Condição: seleciona o documento do Taco
    { dish: "Tacos" },
    // Atualização: remove "Beef" e adiciona "Chicken" ao array 'ingredients'
    { $pull: { ingredients: "Beef" }, $push: { ingredients: "Chicken" } }
)