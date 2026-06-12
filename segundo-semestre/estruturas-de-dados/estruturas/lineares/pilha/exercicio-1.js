import Pilha from "./Stack.js";

const feiticos = new Pilha();

feiticos.adicionar("Feitiço de Fogo");
feiticos.adicionar("Feitiço de Gelo");
feiticos.adicionar("Feitiço de Raio");

console.log(feiticos.remover() ); // "Feitiço de Raio" removido
console.log(feiticos.topo()); // "Feitiço de Gelo"
console.log(feiticos.estaVazia()); // false