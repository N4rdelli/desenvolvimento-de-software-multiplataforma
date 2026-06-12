/*
Exercício 2:
• Um trem precisa cruzar uma rede ferroviária entre cidades com diferentes tempos de viagem. 
Construa o grafo a seguir e responda:
– Qual a menor distância de São Paulo até Porto Alegre?
– Mostre os percursos em DFS e BFS a partir de São Paulo.
• Conexões ferroviárias:
– São Paulo → Campinas (1)
– Campinas → Curitiba (4)
– São Paulo → Curitiba (2)
– Curitiba → Florianópolis (3)
– Florianópolis → Porto Alegre (2)
*/

import GrafoPonderado from './GrafoPonderado.js';

console.log("\n--- RESOLUÇÃO DO EXERCÍCIO 2 ---");

const g2 = new GrafoPonderado();

// Configuração da malha ferroviária
g2.adicionarAresta('São Paulo', 'Campinas', 1);
g2.adicionarAresta('Campinas', 'Curitiba', 4);
g2.adicionarAresta('São Paulo', 'Curitiba', 2);
g2.adicionarAresta('Curitiba', 'Florianópolis', 3);
g2.adicionarAresta('Florianópolis', 'Porto Alegre', 2);

// Execução dos percursos solicitados
console.log("\nBusca em Profundidade (DFS) a partir de São Paulo:");
g2.dfs('São Paulo');

console.log("\nBusca em Largura (BFS) a partir de São Paulo:");
g2.bfs('São Paulo');

// Processamento de caminhos para encontrar a menor distância até Porto Alegre
console.log("\nMenores distâncias calculadas por Dijkstra a partir de São Paulo:");
g2.dijkstra('São Paulo');
// Rota ideal descrita: São Paulo -> Curitiba (2) -> Florianópolis (3) -> Porto Alegre (2) = Custo total de 7