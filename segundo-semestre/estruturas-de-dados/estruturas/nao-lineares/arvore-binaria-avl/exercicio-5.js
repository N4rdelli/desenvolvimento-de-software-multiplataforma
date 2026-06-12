/*
Exercício 5:
- Insira os valores 10, 20, 30, 40, 50, 60, 70:
– Em uma BST comum (sem balanceamento).
– Em uma AVLTree.
• Desenhe as duas árvores.
• Compare suas alturas.
• Mostre os percursos in-order de ambas.
• Explique por que a AVL é mais eficiente para operações de busca.
• Objetivo: comparar BST vs AVL na prática.
*/

import BinaryTree from '../arvore-binaria/BinaryTree.js';
import AVLTree from './AVLTree.js';

console.log("\n--- EXERCÍCIO 5 ---");

const valoresEx5 = [10, 20, 30, 40, 50, 60, 70];

const bst = new BinaryTree();
const avl5 = new AVLTree();

valoresEx5.forEach(v => bst.insert(v));
valoresEx5.forEach(v => avl5.insert(v));

console.log("\n=== DESENHO DA BST COMUM ===");
bst.print(); // Será exibida como uma linha linear/degenerada (lista encadeada disfarçada)

console.log("\n=== DESENHO DA ÁRVORE AVL ===");
avl5.print(); // Exibida em formato piramidal e perfeitamente distribuída

/*
COMPARAÇÃO DE ALTURAS:
- BST Comum: Como os elementos foram inseridos em ordem estritamente crescente, a árvore não ramificou para a esquerda.
  Sua altura total é 7. Ela degenerou em uma estrutura linear.
- Árvore AVL: Com o uso das rotações automáticas a cada desbalanceamento, a árvore se manteve compacta.
  Sua altura total é 3.
*/

console.log("\nPercurso In-Order na BST Comum:");
bst.inOrder();

console.log("\nPercurso In-Order na Árvore AVL:");
avl5.inOrder();

/*
EXPLICAÇÃO DE EFICIÊNCIA:
O percurso In-Order de ambas produz exatamente o mesmo resultado ordenado. Contudo, a AVL é significativamente 
mais eficiente para buscas. Na BST degenerada (linear), encontrar um elemento como o 70 exige caminhar por todos 
os nós da árvore, operando em tempo linear O(n). Na Árvore AVL, o balanceamento garante que a altura seja mantida 
em O(log n). Isso divide o espaço de busca pela metade a cada decisão de ramificação, reduzindo drasticamente o 
número de comparações necessárias para localizar qualquer dado.
*/