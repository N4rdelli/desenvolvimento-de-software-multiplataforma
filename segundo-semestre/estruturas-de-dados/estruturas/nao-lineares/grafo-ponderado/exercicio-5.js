/*
Exercício 5:
• Um personagem está em um labirinto com túneis de diferentes dificuldades (pesos). 
Ele precisa encontrar o caminho mais fácil até a saída.
• Túneis do labirinto:
– Entrada → A (2)
– A → B (2)
– B → Saída (1)
– Entrada → C (5)
– C → Saída (1)
• Tarefas:
– Modele esse labirinto como um grafo.
– Use dijkstra('Entrada') para descobrir a melhor rota até 'Saída'.
– Compare com os caminhos encontrados por DFS e BFS.
*/

import GrafoPonderado from './GrafoPonderado.js';

console.log("\n--- RESOLUÇÃO DO EXERCÍCIO 5 ---");

const labirinto = new GrafoPonderado();

// Modelagem e mapeamento dos caminhos e atalhos do labirinto
labirinto.adicionarAresta('Entrada', 'A', 2);
labirinto.adicionarAresta('A', 'B', 2);
labirinto.adicionarAresta('B', 'Saída', 1);
labirinto.adicionarAresta('Entrada', 'C', 5);
labirinto.adicionarAresta('C', 'Saída', 1);

// Comparação de sequências analíticas lineares
console.log("\nCaminho varrido recursivamente por DFS:");
labirinto.dfs('Entrada');

console.log("\nCaminho varrido sequencialmente em largura por BFS:");
labirinto.bfs('Entrada');

// Avaliação de pesos acumulados para extrair a saída de menor esforço físico/dificuldade
console.log("\nDeterminação da rota mais suave usando Dijkstra:");
labirinto.getMenorCaminho = labirinto.dijkstra('Entrada');
/* Análise do resultado:
- Rota via A e B: Entrada -> A (2) -> B (2) -> Saída (1) = Dificuldade total 5
- Rota via C: Entrada -> C (5) -> Saída (1) = Dificuldade total 6
A rota ideal determinada pela estrutura ponderada é seguir pelo caminho dos nós A e B.
*/