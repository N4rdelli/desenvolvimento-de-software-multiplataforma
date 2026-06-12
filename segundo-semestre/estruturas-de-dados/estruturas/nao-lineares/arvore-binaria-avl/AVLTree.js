// Nó da Árvore Binária AVL
class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        // Todo nó começa com altura 1
        this.height = 1;
    }
}

export default class AVLTree {
    constructor() {
        this.root = null;
    }

    // Método para obter a altura de um nó
    getHeight(node) {
        // Se node for diferente de true (ou seja, se for null ou undefined), retorna zero
        // Se node for true (se existir), retorna a altura armazenada no nó
        return node ? node.height : 0;
    }

    // Método para calcular o fator de balanceamento de um nó
    // Esse método indica se o nó está equilibrado (entre -1 e 1), ou se precisa de rotação (< -1 ou > 1)
    getBalanceFactor(node) {
        // Se node for diferente de true (ou seja, se for null ou undefined), retorna zero
        // Se o nó existir, subtrai a altura da subárvore direita (armazenada no nó filho direito)
        // da altura da subárvore esquerda (armazenada na nó filho esqerdo)
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Método para atualizar a altura de m nó com base nas alturas dos nós filhos
    updateHeight(node) {
        // Soma a altura de um nó (1, ele mesmo) + a maior altura entre cada um de seus filhos
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    // Método para rotacionar à direita
    // Utilizando quando o BF > 1 e o valor a ser inserido está na subárvore esquerda do filho esquerdo
    rotateRight(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    // Método para rotacionar à esquerda
    // Utilizando quando o BF < -1 e o valor a ser inserido está na subárvore direita do filho direito
    rotateLeft(x) {
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    // Método para inserir com balanceamento avl
    // Chama a função recursiva a partir da raiz
    // Se necessário, substitui a raiz após possíveis rotações
    insert(value) {
        this.root = this._insert(this.root, value);
    }

    // Método recursivo para inserir um nó
    _insert(node, value) {
        // Se não existir nó, instancia um novo AVLNode com o valor passado
        if (!node) return new AVLNode(value);

        // Compara para sabermos em qual subárvore inserir o nó
        if (value < node.value) {
            // Se o valor a ser inserido for menor que o valor do nó passado
            // Tenta inserir o nó na subárvore da esquerda
            // Chamar a função recursiva significa que vamos fazer essa mesma comparação passando a próxima subárvore, mas com esse mesmo valor
            node.left = this._insert(node.left, value);
        } else if (value > node.value) {
            // Se o valor a ser inserido for maior que o valor do nó passado
            // Tenta inserir o nó na subárvore da direita
            node.right = this._insert(node.right, value);
        } else {
            // Se o nó existir e não for nem menor nem maior, ele é igual
            // Valor duplicado não é inserido
            return node;
        }

        // Assim que o nó for adicionado, atualiza a altura
        this.updateHeight(node);
        const balance = this.getBalanceFactor(node);

        // Em casos de desbalanceamento
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node); // Esquerda-Esquerda
        }

        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node); // Direita-Direita
        }

        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node); // Esquerda-Direita
        }

        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node); // Direita-Esquerda
        }

        return node;
    }

    // Percorre a árvore da esquerda para a direita
    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    // Método público para iniciar a impressão da árvore
    print() {
        this._print(this.root, "", true);
    }

    // Método auxiliar privado e recursivo
    _print(node, prefix, isLeft) {
        if (!node) return;

        // 1. Visita primeiro a subárvore direita (imprime no topo do console)
        this._print(node.right, prefix + (isLeft ? "│   " : "    "), false);

        // 2. Imprime o nó atual com a indentação correta
        console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

        // 3. Visita a subárvore esquerda (imprime na parte de baixo do console)
        this._print(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }

    // Método público para buscar um valor na árvore AVL
    search = (value) => this._searchNode(this.root, value);

    // Método auxiliar privado e recursivo para navegar pelos nós
    _searchNode(node, value) {
        // Caso base: se o nó for nulo, o valor não existe na árvore
        if (node === null) {
            return false;
        }

        // Se o valor for igual ao do nó atual, encontramos o elemento
        if (value === node.value) {
            return true;
        }
        // Se o valor procurado for menor, busca na subárvore esquerda
        else if (value < node.value) {
            return this._searchNode(node.left, value);
        }
        // Se o valor procurado for maior, busca na subárvore direita
        else {
            return this._searchNode(node.right, value);
        }
    }

    // Método público para remover um valor da árvore AVL
    remove(value) {
        this.root = this._removeNode(this.root, value);
    }

    // Método auxiliar privado e recursivo para remover um nó
    _remove(node, value) {
        // Se o nó for nulo, o valor não existe na árvore
        if (node === null) {
            return node;
        }

        if (value < node.value) {
            // Se o valor a ser removido for menor que o valor do nó passado
            node.left = this._remove(node.left, value);
        } else if (value > node.value) {
            // Se o valor a ser removido for maior que o valor do nó passado
            node.right = this._remove(node.right, value);
        } else {
            // Encontramos o nó a ser removido

            // Caso 1 e 2: Nó com um filho ou nenhum filho
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            // Caso 3: Nó com dois filhos
            // Obter o sucessor em ordem (menor nó da subárvore direita)
            const aux = this._findMinNode(node.right);
            // Copia o valor do sucessor para o nó atual
            node.value = aux.value;
            // Remove o sucessor recursivamente
            node.right = this._remove(node.right, aux.value);
        }

        // Se a árvore tinha apenas um nó e ele foi removido, retorna null
        if (node === null) return node;

        // Passo 2: Atualizar a altura do nó atual
        this.updateHeight(node);

        // Passo 3: Obter o fator de balanceamento para verificar desbalanceamento
        const balance = this.getBalanceFactor(node);

        // Passo 4: Tratar os 4 casos de desbalanceamento pós-remoção

        // Caso Esquerda-Esquerda (Rotaciona à direita)
        if (balance > 1 && this.getBalanceFactor(node.left) >= 0) {
            return this.rotateRight(node);
        }

        // Caso Esquerda-Direita (Dupla rotação: Esquerda depois Direita)
        if (balance > 1 && this.getBalanceFactor(node.left) < 0) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Caso Direita-Direita (Rotaciona à esquerda)
        if (balance < -1 && this.getBalanceFactor(node.right) <= 0) {
            return this.rotateLeft(node);
        }

        // Caso Direita-Esquerda (Dupla rotação: Direita depois Esquerda)
        if (balance < -1 && this.getBalanceFactor(node.right) > 0) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    // Método auxiliar para encontrar o nó com o menor valor a partir de um nó dado.
    _findMinNode(node) {
        let current = node;
        while (current && current.left !== null) {
            current = current.left;
        }
        return current;
    }

    // Método público para contar a quantidade total de nós na árvore AVL.
    countNodes() {
        return this._countNodes(this.root);
    }

    // Método auxiliar recursivo para contagem de nós.
    _countNodes(node) {
        // Caso base: se o nó for nulo, conta zero
        if (node === null) {
            return 0;
        }
        // Retorna 1 (o nó atual) + a contagem da esquerda + a contagem da direita
        return 1 + this._countNodes(node.left) + this._countNodes(node.right);
    }

    // Método público para verificar se a estrutura atual mantém a propriedade de balanceamento AVL.
    isBalanced() {
        return this._isBalanced(this.root);
    }

    // Método auxiliar recursivo para validar o balanceamento de cada nó.
    _isBalanced(node) {
        // Uma árvore vazia está balanceada
        if (node === null) {
            return true;
        }

        // Calcula o Fator de Balanceamento do nó atual
        const balance = this.getBalanceFactor(node);

        // O fator de balanceamento deve estar estritamente entre -1 e 1
        if (Math.abs(balance) > 1) {
            return false;
        }

        // Verifica recursivamente se ambas as subárvores também estão balanceadas
        return this._isBalanced(node.left) && this._isBalanced(node.right);
    }

    // Procura o menor valor contido na árvore AVL.
    findMin() {
        if (this.root === null) return null;

        let current = this.root;
        // O menor valor sempre estará no nó mais à esquerda da árvore
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }

    // Procura o maior valor contido na árvore AVL.
    findMax() {
        if (this.root === null) return null;

        let current = this.root;
        // O maior valor sempre estará no nó mais à direita da árvore
        while (current.right !== null) {
            current = current.right;
        }
        return current.value;
    }
}