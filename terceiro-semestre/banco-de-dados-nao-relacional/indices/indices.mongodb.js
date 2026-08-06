// Os índices são estruturas de dados que armazenam uma parte dos dados de uma coleção de uma forma ordenada, facilitando buscas rápidas

// Índices simples são criados em um único campo
// Criando um índice simples no campo "email"
db.users.cresteIndex({ email: 1 }); // 1 para ordem crescente, -1 para ordem decrescente
// Agora as buscas pelo campo "email" serão mais rápidas, pois o MongoDB pode usar o índice para localizar os documentos de forma eficiente
db.users.find({ email: "Doardo" });

// índices compostos são criados em múltiplos campos. Utilizamos quando fazemos buscas com múltiplos critérios diferentes
db.users.createIndex({ username: 1, age: -1 });
// Agora buscas como essa serão ordenadas pelo nome em ordem crescente e pela idade em ordem decrescente
db.users.find({ username: "Doardo", age: -1 });

// Se o campo for um array e quisermos pesquisar dentro dele, podemos criar um índice multi-key
db.users.createIndex({ hobbies: 1 });

// Se precisarmos buscar palavras em campos de texto, o índice textual é últil
db.produtos.createIndex({ categoria: "text" });
// Agora podemos buscar por palavras dentro desse campo
db.produtos.find({
    $text: { $search: "Eletrônicos" }
});

// índices geoespaciais servem quando armazenamos coordenadas geográficas
db.locais.cresteIndex({ lacalizacao: "2dsphere" });

// Se quisermos ver o espaço total ocupado pelos índices de uma coleção, utilizamos 'totalIndexSize()'
db.users.totalIndexSize();
// Se a saída for por exemplo 5242880, isso significa que os índices ocupam 5MB
// Para detalhar, utilizamos 'stats'
db.users.stats().indexSizes;

// Para saber se um índice está sendo usado, utilizamos 'explain'
db.users.find( { email: "nardelli@email.com" }).explain("executionStats");