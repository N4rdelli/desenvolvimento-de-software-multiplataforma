/*
Exercício 4:
• Um mago precisa viajar por reinos para encontrar o pergaminho sagrado no Reino Z. 
O grafo representa portais mágicos com o custo de energia (peso) para usá-los.
• Portais mágicos:
– X → Y (6)
– X → W (2)
– W → Y (2)
– Y → Z (3)
– W → Z (7)
• Objetivos:
– Mostre a matriz de adjacência.
– Calcule o caminho com menor custo de energia de X até Z.
– Compare os caminhos encontrados em DFS e BFS a partir de X.
*/

import GrafoPonderado from './GrafoPonderado.js';

console.log("\n--- RESOLUÇÃO DO EXERCÍCIO 4 ---");

const g4 = new GrafoPonderado();

// Registro das conexões energéticas entre os reinos
g4.adicionarAresta('X', 'Y', 6);
g4.adicionarAresta('X', 'W', 2);
g4.adicionarAresta('W', 'Y', 2);
g4.adicionarAresta('Y', 'Z', 3);
g4.adicionarAresta('W', 'Z', 7);

// Renderização da representação matricial
console.log("\nMatriz de Adjacência de Custos dos Portais:");
g4.imprimirMatrizAdjacencia();

// Análise comparativa de percurso topológico (não ponderado)
console.log("\nPercurso exploratório em Profundidade (DFS):");
g4.dfs('X');

console.log("\nPercurso exploratório em Camadas/Largura (BFS):");
g4.bfs('X');

// Resolução de otimização de custo energético até a chegada no Reino Z
console.log("\nOtimização de rotas com custo de energia mínimo (Dijkstra):");
g4.dijkstra('X');
// Rota de menor gasto: X -> W (2) -> Y (2) -> Z (3) = Gasto energético acumulado de 7 (Mais barato que ir direto X -> W -> Z que gastaria 9)