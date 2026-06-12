/*
Exercício 3:
• Um entregador de sucos precisa traçar a melhor rota entre lojas para entregar os pedidos rapidamente. 
Use Dijkstra para descobrir o menor tempo de entrega de sucos de Loja A até Loja F.
• Rotas:
– A → B (1)
– A → C (4)
– B → D (2)
– C → D (1)
– D → E (3)
– E → F (2)
• Desafios:
– Liste os caminhos visitados em DFS e BFS a partir de A.
– Qual a menor distância de A até F?
*/

import GrafoPonderado from './GrafoPonderado.js';

console.log("\n--- RESOLUÇÃO DO EXERCÍCIO 3 ---");

const g3 = new GrafoPonderado();

// Mapeamento logístico das lojas de suco
g3.adicionarAresta('A', 'B', 1);
g3.adicionarAresta('A', 'C', 4);
g3.adicionarAresta('B', 'D', 2);
g3.adicionarAresta('C', 'D', 1);
g3.adicionarAresta('D', 'E', 3);
g3.adicionarAresta('E', 'F', 2);

// Rastreamento de visitas por algoritmos de busca estrutural
console.log("\nCaminhos visitados por DFS a partir de A:");
g3.dfs('A');

console.log("\nCaminhos visitados por BFS a partir de A:");
g3.bfs('A');

// Cálculo de tempo mínimo para a entrega final na loja F
console.log("\nCálculo de tempos e menor distância total via Dijkstra:");
g3.dijkstra('A');
// Menor rota descrita: A -> B (1) -> D (2) -> E (3) -> F (2) = Custo acumulado final de 8