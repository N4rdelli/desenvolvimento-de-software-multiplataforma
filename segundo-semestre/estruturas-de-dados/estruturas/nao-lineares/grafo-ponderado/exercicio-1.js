/*
Exercício 1:
• Na Cidade dos Gnomos, as ruas conectam casas mágicas com diferentes distâncias encantadas (pesos).
– Crie o grafo a seguir e:
– Imprima a lista de adjacência.
– Imprima a matriz de adjacência.
– Use DFS e BFS a partir da Casa A.
– Use Dijkstra a partir da Casa A para saber o caminho mais rápido até a Casa E.
• Ruas mágicas (arestas):
– A → B (3)
– A → C (2)
– B → D (4)
– C → D (1)
– D → E (5)
*/

import GrafoPonderado from './GrafoPonderado.js';

console.log("--- RESOLUÇÃO DO EXERCÍCIO 1 ---");

const g1 = new GrafoPonderado();

// Inserção das conexões e pesos correspondentes
g1.adicionarAresta('A', 'B', 3);
g1.adicionarAresta('A', 'C', 2);
g1.adicionarAresta('B', 'D', 4);
g1.adicionarAresta('C', 'D', 1);
g1.adicionarAresta('D', 'E', 5);

// Exibição das estruturas de representação
console.log("\nLista de Adjacência:");
g1.imprimirGrafo();

console.log("\nMatriz de Adjacência:");
g1.imprimirMatrizAdjacencia();

// Execução dos percursos de busca
console.log("\nBusca em Profundidade (DFS) a partir de A:");
g1.dfs('A');

console.log("\nBusca em Largura (BFS) a partir de A:");
g1.bfs('A');

// Cálculo de caminhos mínimos pelo algoritmo de Dijkstra
console.log("\nAlgoritmo de Dijkstra a partir da Casa A:");
g1.dijkstra('A');