// Cada elemento de uma lista encadeada é chamado de nó
class Node {
    constructor(value){
        // Valor armazenado
        this.value = value;
        // Ponteiro para o próximo nó
        this.next = undefined;
    }
}

export default class LinkedList {
    // Atributos privados da nossa classe LikedList
    #head = undefined;
    #length = 0;

    // Método para inserir um novo nó no início da nossa lista encadeada
    insertAtBeginning(value){
        // Instancia um novo objeto da classe nó
        let newNode = new Node(value);

        // O novo nó aponta para o antigo head, que vai se tornar o próximo elemento da lista
        newNode.next = this.#head;

        // Atualiza o valor da variável head: agora o ínicio da lista é o nó que criamos
        this.#head = newNode;

        // Incrementa o tamanho da nossa lista
        this.#length++;
    }

    // Método para inserir um nó no final da nossa lista encadeada
    // Percorremos a lista até o último nó, ou seja, o no cuja o ponteiro de próximo .next aponta para undefined
    insertAtEnd(value){
        // Instanciamos nosso novo nó
        let newNode = new Node(value);

        // Se a lista estiver vazia, o novo nó se torna o "head"
        if (this.#head === undefined){
            this.#head = newNode;
            return;
        }

        // Instanciamos uma variável para iterar sob a lista encadeada
        let current = this.#head;
        // Enquanto o nó que estivermos não apontar para undefined, passa para o próximo nó
        while (current.next !== undefined){
            current = current.next;
        }

        // Quando encontrarmos o nó que aponta para undefined, fazemos ele apontar para nosso novo nó
        current.next = newNode;

        this.#length++;
    }

    // Método para remover um nó por valor
    // Como estamos em uma lista encadeada simples, para remover um ó, precisamos encontrar o nó anterior a esse 
    // A ideia é pular o nó que está sendo removido
    removeByValue(value){
        // Se a lista estiver vazia, retorna undefined
        if (this.#head === undefined){
            return undefined;
        }

        // Se o nó a ser removido for o primeiro nó
        if (this.#head.value === value){
            // Atualiza o valor da variável que aponta para o head (agora aponta para o próximo nó)
            this.#head = this.#head.next;
            this.#length--;
        }

        // Se o nó a ser removido não for o primeiro, vamos percorrer a lista completamente
        // Instanciamos uma variável para iterar sob a lista encadeada
        let current = this.#head;
        // Enquanto o nó que estivermos não apontar para undefined e o valor do próximo a ele não for a valor que queremos remover, passa para o próximo nó
        while (current.next !== undefined && current.next.value !== value){
            current = current.next;
        }

        // Se o nó foi encontrado, ajustamos o ponteiro para plar o nó removido
        if (current.next !== undefined){
            current.next = current.next.next;
            // E decrementamos o tamanho da lista
            this.#length--;
        }
    }

    // Busca onde está um nó pelo valor
    find(value){
        let current = this.#head;

        // Itera sobre a nossa lista encadeada até encontrar o nó com o valor o até o final
        while(current !== undefined){
            if (current.value === value){
                return current; // O nó foi encontrado
            }
            // Se o nó não foi encontrado, passa para o próximo e repete
            current = current.next;
        }

        return undefined; // Se o nó não for encontrado, retorna undefined
    }

    // Método para encontrar o tamanho atual da lista (sem depender do length)
    size(){
        let count = 0;
        let current = this.#head;
        while(current !== undefined){
            count++;
            current = current.next;
        }
        return count;
    }

    // Método para verificar se a lista está vazia
    isEmpty = () => this.#head === undefined;

    // Exibe a lista
    toString(){
        let current = this.#head;
        let list = '';
        while (current !== undefined){
            list += current.value + ' → ';
            current = current.next;
        }
        console.log(list + 'undefined');
    }
}