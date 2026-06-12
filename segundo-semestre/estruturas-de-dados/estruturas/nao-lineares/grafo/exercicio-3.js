/*
Exercício 1: Detecção de Ciclos e Caminhos em Grafos Não Ponderados
Enunciado:
Implemente um método chamado 'contemCiclo()' na classe Graph baseado no algoritmo de 
Busca em Profundidade (DFS). O método deve retornar true se o grafo possuir pelo menos 
um ciclo e false caso contrário. Em seguida, instancie o grafo, adicione as arestas 
1-2, 2-3, 3-4, 4-2 (gerando um ciclo) e demonstre a detecção. Remova a aresta que causa 
o ciclo (4-2) e execute a verificação novamente para validar a precisão do algoritmo.
*/

import Graph from './Graph.js';

console.log("--- RESOLUÇÃO DO EXERCÍCIO 3 ---");
const g1 = new Graph();
g1.adicionarAresta('1', '2');
g1.adicionarAresta('2', '3');
g1.adicionarAresta('3', '4');
g1.adicionarAresta('4', '2'); // Fecha o ciclo entre 2, 3 e 4

console.log("Grafo com ciclo configurado (1-2, 2-3, 3-4, 4-2).");
console.log("O grafo contém ciclo?", g1.contemCiclo()); // Esperado: true

console.log("\nRemovendo a aresta cíclica 4-2...");
g1.removerAresta('4', '2');
console.log("O grafo contém ciclo após a remoção?", g1.contemCiclo()); // Esperado: false