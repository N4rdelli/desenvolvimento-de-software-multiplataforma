import Array from "./Array.js";

const ArrayTeste = new Array();

ArrayTeste.adicionarElemento(10);
ArrayTeste.adicionarElemento(20);
ArrayTeste.adicionarElemento(30);
ArrayTeste.adicionarElemento(40);
ArrayTeste.adicionarElemento(50);
console.table(ArrayTeste.verItensDoArray());
console.log("Tamanho do Array:", ArrayTeste.verTamanhoDoArray());

ArrayTeste.removerElemento();
ArrayTeste.removerElemento();
console.table(ArrayTeste.verItensDoArray());
console.log("Tamanho do Array:", ArrayTeste.verTamanhoDoArray());

console.log("Acessando elemento no índice 0:", ArrayTeste.acessarElementoPorIndice(0));