/*
Exercício 2:
Insira os valores 20, 10, 30, 25, 40, 22 em ordem.
– Mostre em código o fator de balanceamento após cada inserção.
– Identifique e aplique as rotações necessárias.
– Desenhe a árvore após cada inserção.
- Objetivo: provocar um caso esquerda-direita (LR) e aplicar uma rotação dupla.
*/

import AVLTree from './AVLTree.js';

console.log("--- EXERCÍCIO 2 ---");
const avl2 = new AVLTree();

// 1. Inserindo 20
console.log("\nInserindo 20:");
avl2.insert(20);
avl2.print(); 
// FB de 20: 0 (Árvore balanceada)

// 2. Inserindo 10
console.log("\nInserindo 10:");
avl2.insert(10);
avl2.print(); 
// FBs -> 10: 0, 20: 1 (Árvore balanceada)

// 3. Inserindo 30
console.log("\nInserindo 30:");
avl2.insert(30);
avl2.print(); 
// FBs -> 10: 0, 30: 0, 20: 0 (Árvore balanceada)

// 4. Inserindo 25
console.log("\nInserindo 25:");
avl2.insert(25);
avl2.print(); 
// FBs -> 25: 0, 30: 1, 10: 0, 20: -1 (Árvore balanceada)

// 5. Inserindo 40
console.log("\nInserindo 40:");
avl2.insert(40);
avl2.print(); 
// FBs -> 25: 0, 40: 0, 30: 0, 10: 0, 20: -2 
// O nó 20 desbalanceou (BF < -1). O filho direito (30) tem BF 0.
// Rotação: Direita-Direita (Rotação Simples à Esquerda no nó 20).
// Nova configuração após rotação automática no insert: 30 vira raiz do subgrupo.

// 6. Inserindo 22
console.log("\nInserindo 22:");
avl2.insert(22);
avl2.print();
// Durante a inserção do 22:
// O nó 20 ficou desbalanceado com BF: 2 (Subárvore esquerda tem altura 1 [10], direita tem altura 2 [25 e 22]).
// O nó filho esquerdo de 20 não existe para o desbalanceamento, na verdade o desbalanceamento ocorre sob a perspectiva do nó 25.
// Analisando o nó 20 localmente antes da rotação: ele recebe o 22 na subárvore direita do seu filho esquerdo? 
// Vamos analisar os FBs exatos pré-rotação do nó 20 após inserir 22:
// FB do nó 20 torna-se -2. Seu filho direito é 25 (FB é 1, pois tem o 22 na esquerda).
// Caso provocado: Direita-Esquerda (RL) no nó 20.
// Rotação Dupla: Rotação à Direita no nó 25, seguida de Rotação à Esquerda no nó 20.
// O método automatico realiza isso e a árvore assume o design balanceado final.