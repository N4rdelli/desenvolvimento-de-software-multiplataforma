const MinhaFila = require('./MinhaFila');

const filaAtendimento = new MinhaFila();

// Adicionando clientes à fila
console.log("Clientes chegando: João, Maria, José");
filaAtendimento.enqueue("João");
filaAtendimento.enqueue("Maria");
filaAtendimento.enqueue("José");

console.log("Próximo a ser atendido:", filaAtendimento.front()); // João
console.log("Total de pessoas na fila:", filaAtendimento.size()); // 3

// Atendendo o primeiro da fila
console.log("Atendendo:", filaAtendimento.dequeue()); // Remove João

// Verificando após o atendimento
console.log("Próximo agora é:", filaAtendimento.front()); // Maria
console.log("Restam na fila:", filaAtendimento.size()); // 2