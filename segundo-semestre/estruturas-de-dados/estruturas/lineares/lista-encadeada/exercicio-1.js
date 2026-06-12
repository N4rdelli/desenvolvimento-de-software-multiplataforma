// Enunciado:
// Você está ajudando um explorador a planejar sua trilha de aventura na floresta. Cada ponto da trilha (nó)
// contém um local interessante, como uma cachoeira, uma caverna ou um mirante. O explorador quer começar a
// trilha em um ponto específico e adicionar novos pontos durante a jornada. Sua missão é ajudá-lo a:

// – Inserir pontos da trilha no início e no fim da lista de locais a serem visitados.
// – Depois, o explorador decide remover um local que descobriu ser muito perigoso.
// – Por fim, ele quer verificar se o mirante ainda faz parte da trilha.
// – Implemente uma lista encadeada para representar a trilha e resolva essas tarefas.

// Importamos a nossa classe LinkedList
import LinkedList from "./LinkedList.js";

// Instanciamos um objeto da nossa classe
const trilha = new LinkedList();

// Inserimos alguns pontos no início e no fim da lista
trilha.insertAtEnd("Cachoeira");
trilha.insertAtBeginning("Mirante");
trilha.insertAtBeginning("Caverna");
trilha.insertAtEnd("Montanha");

// Mostramos a lista para visualização
console.log("\n\nTrilha de aventuras: ");
trilha.toString();

// Removemos um nó da lista
console.log("\nRemovendo um lugar perigoso...");
trilha.removeByValue("Montanha");
console.log("Trilha atualizada:");
trilha.toString();


// Verificamos se um nó ainda faz parte da nossa lista
console.log(`\nO mirante ainda está na trilha? ${trilha.find("Mirante") ? "Sim" : "Não"}`);

// Exibindo resultados novamente
console.log("\nTrilha atualizada:");
trilha.toString();