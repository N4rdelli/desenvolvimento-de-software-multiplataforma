import DoublyLinkedList from "./DoublyLinkedList.js";

const lista = new DoublyLinkedList();

console.log("\n\nTestando Inserção");
lista.append("Cachoeira");
lista.append("Mirante");
lista.append("Caverna");
lista.append("Montanha");
lista.toString(); 

console.log("\nTestando Busca (find)");
console.log(`Existe Mirante? ${lista.find("Mirante") ? "Sim" : "Não"}`);
console.log(`Existe Vulcão? ${lista.find("Vulcão") ? "Sim" : "Não"}`);

console.log("\nTestando Remoção por Valor");

// Removendo do meio
console.log("\nRemovendo Mirante...");
lista.removeByValue("Mirante");
lista.toString(); 

// Removendo do início 
console.log("\nRemovendo Cachoeira...");
lista.removeByValue("Cachoeira");
lista.toString();

// Removendo do fim
console.log("\nRemovendo Montanha...");
lista.removeByValue("Montanha");
lista.toString();

console.log("\nEstado Final");
console.log(`Tamanho da lista: ${lista.size()}`);
lista.traverse();