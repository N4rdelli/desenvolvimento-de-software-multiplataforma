/*
Exercício 4:
- Considere a seguinte árvore AVL (Simulada via inserções estruturais):
– Calcule manualmente a altura de cada nó.
– Calcule o fator de balanceamento de cada nó.
– Diga se a árvore está balanceada.
– Insira o valor 70 e verifique se será necessário rebalancear.
– Objetivo: reforçar cálculo de altura e fator de balanceamento, além da avaliação de necessidade de rotação.
*/

import AVLTree from './AVLTree.js';

console.log("\n--- EXERCÍCIO 4 ---");
const avl4 = new AVLTree();

// Montando uma estrutura base estável (Ex: Raiz 40, filhos 20 e 60, simulando o padrão do exercício)
[40, 20, 60, 10, 30, 50].forEach(v => avl4.insert(v));

console.log("Árvore Inicial Montada:");
avl4.print();

/*
ANÁLISE MANUAL PRÉ-INSERÇÃO DO 70:
- Nós folha (10, 30, 50): Altura = 1, FB = 0.
- Nó 20: Altura = 2 (subárvores 10 e 30 possuem altura 1). FB = 1 - 1 = 0.
- Nó 60: Altura = 2 (subárvore esquerda 50 possui altura 1, direita é nula=0). FB = 1 - 0 = 1.
- Nó 40 (Raiz): Altura = 3. FB = Altura(Esquerda) - Altura(Direita) -> 2 - 2 = 0.
Conclusão: A árvore está perfeitamente balanceada, pois todos os FBs estão entre -1 e 1.
*/

console.log("\nInserindo o valor 70:");
avl4.insert(70);
avl4.print();

/*
ANÁLISE APÓS INSERÇÃO DO 70:
- O 70 entra como filho direito de 60.
- Altura de 70 = 1, FB = 0.
- Novo cálculo para o nó 60: Altura da esquerda(50)=1, Altura da direita(70)=1. Altura atualiza para 2. FB = 1 - 1 = 0.
- Novo cálculo para a raiz 40: Altura esquerda=2, Altura direita=2. Altura continua 3. FB = 2 - 2 = 0.
Conclusão: NÃO foi necessário rebalancear a árvore após a inserção do 70, pois nenhum nó violou a propriedade AVL (|FB| > 1).
*/