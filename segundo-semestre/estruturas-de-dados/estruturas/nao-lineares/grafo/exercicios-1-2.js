/*
Exercício 1:
- Crie um grafo com os vértices 1, 2, 3, 4 e as arestas 1-2, 1-3, 2-4.
– Imprima o grafo.
– Remova o vértice 2 e imprima o grafo novamente.
- Objetivo: Praticar a manipulação básica de vértices e arestas em um grafo não ponderado.
*/

import Graph from './Graph.js';

console.log("--- EXERCÍCIO 1 ---");

// Instancia o grafo não ponderado baseado na classe base
const grafo1 = new Graph();

// Adicionando as arestas (os vértices são criados automaticamente se não existirem)
grafo1.adicionarAresta('1', '2');
grafo1.adicionarAresta('1', '3');
grafo1.adicionarAresta('2', '4');

console.log("Grafo inicial após as inserções:");
grafo1.imprimirGrafo();
grafo1.visualizarEstrutura(1);
/*
Saída esperada:
1 -> 2, 3
2 -> 1, 4
3 -> 1
4 -> 2
*/

console.log("\nRemovendo o vértice 2...");
grafo1.removerVertice('2');

console.log("\nGrafo resultante após a remoção do vértice 2:");
grafo1.imprimirGrafo();
grafo1.visualizarEstrutura(1);
/*
Saída esperada (o vértice 2 some e as arestas ligadas a ele nas listas de 1 e 4 são limpas):
1 -> 3
3 -> 1
4 -> 
*/