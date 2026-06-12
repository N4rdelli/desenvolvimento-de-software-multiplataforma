/*
Exercício 3:
- Dado o seguinte código:
const avl = new AVLTree();
[50, 20, 60, 10, 30, 25, 27].forEach(v => avl.insert(v));
– Desenhe a árvore após cada inserção.
– Identifique os nós desbalanceados.
– Indique as rotações feitas (nome, tipo e onde).
– Mostre o percurso in-order da árvore final.
- Objetivo: consolidar o uso de rotações simples e duplas em sequência.
*/

import AVLTree from './AVLTree.js';

console.log("\n--- EXERCÍCIO 3 ---");
const avl3 = new AVLTree();
const valores = [50, 20, 60, 10, 30, 25, 27];

valores.forEach(v => {
    console.log(`\nInserindo ${v}:`);
    avl3.insert(v);
    avl3.print();
    
    // Análise de fluxo interno executado por cada passo:
    // v = 50: Raiz. Sem desbalanceamento.
    // v = 20: Filho esquerdo de 50. Sem desbalanceamento.
    // v = 60: Filho direito de 50. Sem desbalanceamento.
    // v = 10: Filho esquerdo de 20. Sem desbalanceamento.
    // v = 30: Filho direito de 20. Sem desbalanceamento.
    // v = 25: Filho esquerdo de 30. Desbalanceia o nó 20 (BF = -2). Seu filho direito (30) tem BF = 1.
    //        -> Rotação Dupla Esquerda-Direita (Double Right Rotation / LR) sobre o nó 20.
    //        -> Primeiro rotateLeft(20.left), depois rotateRight(20).
    // v = 27: Inserido à direita de 25. Desbalanceia a raiz original 50 (BF = 2).
    //        -> Rotação Dupla Esquerda-Direita no nó 50, reestruturando o topo com o 27 subindo.
});

console.log("\nPercurso em ordem (In-Order) da árvore final:");
avl3.inOrder();