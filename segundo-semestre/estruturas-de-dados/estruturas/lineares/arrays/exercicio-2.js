// Enunciado:
// O setor de Recursos Humanos de uma empresa deseja armazenar os nomes dos funcionários que participaram de um treinamento.

// Importa a nossa classe Array personalizada e a biblioteca readline-sync para ler entradas do usuário
import Array from './Array.js';
import readlineSync from '../../../node_modules/readline-sync/lib/readline-sync.js';

// Instancia um novo Array para armazenar os nomes dos funcionários
const nomesDosFuncionarios = new Array();

// Solicita ao usuário para que insira 4 nomes
for (let i = 0; i < 4; i++){
    nomesDosFuncionarios.adicionarElemento(readlineSync.question(`\nDigite o nome do funcionário(a) ${i + 1}: `));
    console.log("Funcionário adicionado com sucesso!");
}

// Obtém o nome do terceiro funcionário
console.log("\nAcessando o nome do terceiro funcionário:", nomesDosFuncionarios.acessarElementoPorIndice(2));

console.table(nomesDosFuncionarios.verItensDoArray());

// Limpa a lista de funcionários
nomesDosFuncionarios.limparArray();

// Exibe a lista de funcionários após limpar o Array e o tamanho atual da lista
console.table(nomesDosFuncionarios.verItensDoArray());
console.log("Quantidade de funcionários restantes:", nomesDosFuncionarios.verTamanhoDoArray());

// Pergunta 1: O que acontece se tentarmos acessar um índice inexistente após limpar o array?
// console.log("\nAcessando um índice inexistente após limpar o array (índice 0):", nomesDosFuncionarios.acessarElementoPorIndice(0));
// Quando tentamos acessar um índice inexistente após limpar o array, o método retorna undefined, já que não existe um elemento nessa posição.

// Pergunta 2: Como modificar a classe para garantir que os nomes armazenados sejam únicos?
// Para garantir que os nomes armazenados sejam únicos, podemos modificar o método adicionarElemento para verificar se o nome já existe
// no array antes de adicioná-lo.