// Inserção Simples e Balanceamento Esquerda-Esquerda

// Importa a nossa AVL Tree
import AVLTree from "./AVLTree.js";

// Instancia um objeto da nossa classe AVLTree
const arvore1 = new AVLTree();

// Inserindo os valores na árvore, percorrendo-a após cada inserção
const valores = [30, 20, 10];
valores.forEach(val => {
    console.log(`\nInserindo o valor ${val}...`);
    arvore1.insert(val);
    
    console.log(`Perocrrendo a árvore atual (In-Order):`);
    arvore1.inOrder();
});

/* 
    A árvore foi inserida da seguinte maneira:
            30
           /
        20
       /
    10

    A nossa implementação manual monitora o fator de balanceamento dos nós e, quando percebe um desbalanceamento, rotaciona a árvore.
    No momento em que o nó '10' foi inserido, o BF de raiz '30' deu 2, então a rotação para a direita foi executada, corrigindo o desbalanceamento esquerda-esquerda.
*/


// Indicando o fator de balanceamento de cada nó após a auto-rotação:
console.log("Altura final da árvore:", arvore1.getHeight(arvore1.root));

// Mostrando o BF de cada nó após a rotação
console.log("BF da Raiz (agora o nó de valor 20):", arvore1.getBalanceFactor(arvore1.root));
console.log("BF do Filho à Esquerda (nó de valor 10):", arvore1.getBalanceFactor(arvore1.root.left));
console.log("BF do Filho à Direita (nó de valor 30):", arvore1.getBalanceFactor(arvore1.root.right));

/* 
    Se agora tentarmos acessar o segundo filho a esquerda como a árvore era antes da rotação, não é possível, pois ele não existe mais naquela posição.

    A árvore agora está assim:
          20
         /  \
        10  30
*/