// Enunciado:
// Uma empresa deseja criar um sistema simples para gerenciar as tarefas da equipe.
// Cada tarefa será armazenada em um array utiizando nossa classe manual

// Importa a nossa classe Array personalizada e a biblioteca readline-sync para ler entradas do usuário
import Array from './Array.js';
import readlineSync from '../../../node_modules/readline-sync/lib/readline-sync.js';

// Instancia um novo Array para armazenar as tarefas da equipe
const tarefasDaEquipe = new Array();

// Solicita ao usuário para que insira 5 tarefas para a equipe
for (let i = 0; i < 5; i++){
    tarefasDaEquipe.adicionarElemento(readlineSync.question(`\nDigite a ${i + 1}a tarefa da equipe: `));
    console.log("Tarefa adicionada com sucesso!");
}

// Remove a última tarefa adicionada
console.log("\nRemovendo a última tarefa adicionada:", tarefasDaEquipe.removerElemento(),"\nTarefa removida com sucesso!");

// Exibe as tarefas restantes no Array e o tamanho atual da lista
console.table(tarefasDaEquipe.verItensDoArray());
console.log("Quantidade de tarefas restantes:", tarefasDaEquipe.verTamanhoDoArray());

// Pergunta 1: O que acontece quando tentamos acessar um índice fora do tamanho do array?
// console.log("\nAcessando um índice fora do tamanho do array (índice 10):", tarefasDaEquipe.acessarElementoPorIndice(10));
// Quando tentamos acessar um índice fora do tamanho do array, o método retorna undefined, indicando que não existe um elemento nessa posição.

// Pergunta 2: Como garantir que a ordem das tarefas seja mantida ao adicionar e remover itens?
// A ordem das tarefas é mantida porque os métodos de adicionar e remover elementos operam no final do array, garantindo que os itens
// continuem organizados na sequência em que foram inseridos.