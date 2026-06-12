class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Método para inserir um valor na árvore binária
    insert(value) {
        const newNode = new Node(value);
        // Se a árvore estiver vazia, o novo nó se torna a raiz
        if (this.root === null) {
            this.root = newNode;
        } else {
            // Caso contrário, chama o método auxiliar para encontrar a posição correta
            this._insertNode(this.root, newNode);
        }
    }

    // Método auxiliar para inserir um nó na posição correta
    _insertNode(node, newNode){
        // Se o novo valor for menor, vai para a subárvore esquerda
        if (newNode.value < node.value) {
            // Se o filho esquerdo estiver livre, insere o nó aqui
            if (node.left === null) {
                node.left = newNode;
            } else {
                // Caso contrário, continua descendo recursivamente pela esquerda
                this._insertNode(node.left, newNode);
            }
        } else {
            // Se o novo valor for maior ou igual, vai para a subárvore direita
            // Se o filho direito estiver livre, insere o nó aqui
            if (node.right === null) {
                node.right = newNode;
            } else {
                // Caso contrário, continua descendo recursivamente pela direita
                this._insertNode(node.right, newNode);
            }
        }
    }

    // Percurso em ordem (Esquerda, Raiz, Direita)
    inOrder(node = this.root){
        if (node !== null){
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    // Percurso pré-ordem (Raiz, Esquerda, Direita)
    preOrder(node = this.root){
        if (node !== null){
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    // Percurso pós-ordem (Esquerda, Direita, Raiz)
    postOrder(node = this.root){
        if (node !== null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }

    // Método público para buscar um valor na árvore
    search = (value) => this._searchNode(this.root, value);

    // Método auxiliar privado e recursivo para navegar pelos nós na busca
    _searchNode(node, value){
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

    // Método público para iniciar a impressão da árvore de maneira visual
    print() {
        this._print(this.root, "", true);
    }

    // Método auxiliar privado e recursivo para renderizar a estrutura da árvore
    _print(node, prefix, isLeft) {
        if (!node) return;

        // 1. Visita primeiro a subárvore direita (imprime no topo do console)
        this._print(node.right, prefix + (isLeft ? "│   " : "    "), false);

        // 2. Imprime o nó atual com a indentação correta
        console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

        // 3. Visita a subárvore esquerda (imprime na parte de baixo do console)
        this._print(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }

    // Método público para remover um valor da árvore
    remove(value){
        // Atualiza a raiz após a remoção recursiva
        this.root = this._removeNode(this.root, value);
    }

    // Método auxiliar recursivo para deletar o nó e reorganizar os ponteiros
    _removeNode(node, value){
        // Caso base: se o nó for nulo, o valor não foi encontrado
        if (node === null){
            return null;
        }

        // Navega pela árvore para encontrar o nó a ser removido
        if (value < node.value){
            node.left = this._removeNode(node.left, value);
            return node;
        } else if (value > node.value){
            node.right = this._removeNode(node.right, value);
            return node;
        } else {
            // Encontrou o nó a ser removido

            // Caso 1: Nó folha (sem filhos)
            if (node.left === null && node.right === null){
                node = null;
                return node;
            }

            // Caso 2: Nó com apenas um filho
            if (node.left === null){
                node = node.right; // Substitui o nó pelo seu filho direito
                return node;
            } else if (node.right === null){
                node = node.left; // Substitui o nó pelo seu filho esquerdo
                return node;
            }

            // Caso 3: Nó com dois filhos
            // Encontra o menor nó da subárvore direita (sucessor em ordem)
            const aux = this._findMinNode(node.right);
            // Substitui o valor do nó atual pelo valor do sucessor
            node.value = aux.value;
            // Remove o sucessor duplicado da subárvore direita
            node.right = this._removeNode(node.right, aux.value);
            return node;
        }
    }

    // Método auxiliar para encontrar o nó com o menor valor a partir de um ponto
    _findMinNode(node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    }
}