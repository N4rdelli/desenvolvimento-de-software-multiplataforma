// Enunciado
// O Capitão Barbarruiva tem um baú cheio de tesouros, mas ele só consegue pegar o último item que colocou. Crie um programa para ajudá-lo a:
// – Guardar um novo tesouro no baú.
// – Retirar o último tesouro guardado.
// – Olhar qual é o último tesouro sem pegá-lo.
// – Saber se o baú está vazio.

// Importa a nossa classe Stack personalizada e a biblioteca readline-sync para ler entradas do usuário
import Pilha from "./Stack.js";
import readlineSync from '../../../node_modules/readline-sync/lib/readline-sync.js';

// Instancia um novo objeto da classe Stack para representar o baú do Capitão Barbarruiva
const tesourosNoBau = new Pilha();

// Adiciona alguns tesouros ao baú do Capitão Barbarruiva
tesourosNoBau.adicionarElemento("Colar de Pérolas");
tesourosNoBau.adicionarElemento("Moedas de Ouro");
tesourosNoBau.adicionarElemento("Saco de Esmeraldas");
tesourosNoBau.adicionarElemento("Anel de Rubis");
tesourosNoBau.adicionarElemento("Bracelete de Safiras");

// Solicita a entrada de um novo tesouro para ser guardado no baú
console.log("\nBaú de Tesouros do Capitão Barbarruiva");
tesourosNoBau.adicionarElemento(readlineSync.question("\nGuarde um novo tesouro: "));
console.log("Tesouro adicionado com sucesso!");

// Retira o último tesouro guardado no baú
console.log("\nRemovendo o último tesouro guardado no baú: ", tesourosNoBau.removerElemento());

// Olha qual é o último tesouro sem pegá-lo
console.log("\nQual o último tesouro no baú?: ", tesourosNoBau.acessarElementoNoTopo());

// Verifica se o baú está vazio.
console.log("\nO baú do Capitão Barbarruiva está vazio? ", 
    tesourosNoBau.estaVazia() 
    ? "Sim, o baú do Capitão Barbarruiva está vazio. Não há tesouros para mostrar." 
    : "Não, o baú do Capitão Barbarruiva contém tesouros. O último tesouro é:", tesourosNoBau.acessarElementoNoTopo()
);