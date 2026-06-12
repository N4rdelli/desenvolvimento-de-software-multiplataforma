import Stack from "./Stack.js"

const pilhaTeste = new Stack();

console.log("\nAdicionando elementos: 5, 8, 11");
pilhaTeste.adicionarElemento(5);
pilhaTeste.adicionarElemento(8);
pilhaTeste.adicionarElemento(11);

console.log("\nTopo da pilha:", pilhaTeste.acessarElementoNoTopo());
console.log("\nTamanho da pilha:", pilhaTeste.acessarTamanhoDaPilha());

console.log("\nElemento removido:", pilhaTeste.removerElemento());

console.log("\nTopo da pilha após remoção:", pilhaTeste.acessarElementoNoTopo());
console.log("\nTamanho da pilha após remoção:", pilhaTeste.acessarTamanhoDaPilha());