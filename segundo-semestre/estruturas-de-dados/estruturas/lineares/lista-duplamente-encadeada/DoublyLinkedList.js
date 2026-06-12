// o nó da nossa classe

class Node {
    constructor(value){
        this.value = value;
        this.next = undefined;
        this.prev = undefined;
    }
}

export default class DoublyLinkedList{
    #head = undefined;
    #tail = undefined;
    #length = 0;

    // Adiciona um nó no final da nossa lista encadeada
    append(value){
        const newNode = new Node(value);

        if (this.#head == undefined){
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode;
            newNode.prev = this.#tail;
            this.#tail = newNode;
        }

        this.#length++;
    }

    // Adiciona um nó no início da nossa lista encadeada
    preppend(value){
        const newNode = new Node(value);

        if (this.#head == undefined){
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.next = this.#tail;
            this.#head.prev = newNode;
            this.#head = newNode;
        }

        this.#length++;
    }
    
    // Remove o nó no final da nossa lista
    removeLast(){
        // Se a lista estiver vazia, não há o que remover
        if (this.#tail == undefined) return undefined;

        // Armazena o nó que vamos remover
        const removedNode = this.#tail;
        // Se ele for o único nó da lista, ela passa a ser vazia
        if (this.#tail == this.#head){
            this.#head = undefined;
            this.#tail = undefined;
        } else {
            // Senão, o ponteiro de tail dela agora pula o nó que removemos e aponta para o anterior
            this.#tail = this.#tail.prev;
            this.#tail.next = undefined;
        }

        // Decrementa o tamanho da lista e retorna o nó removido
        this.#length--;
        return removedNode.value;
    }
    
    // Remove o nó no início da nossa lista
    removeFirst(){
        // Se a lista estiver vazia, não há o que remover
        if (this.#head == undefined) return undefined;

        // Armazena o nó que vamos remover
        const removedNode = this.#head;
        // Se ele for o único nó da lista, ela passa a ser vazia
        if (this.#head == this.#tail){
            this.#head = undefined;
            this.#tail = undefined;
        } else {
            // Senão, o ponteiro de head agora pula o nó que estamos removendo e aponta para o próximo 
            this.#head = this.#head.next;
            this.#head.prev = undefined;
        }

        // Decrementa o tamanho da lista e retorna o nó removido
        this.#length--;
        return removedNode.value;
    }
    
    // Percorre a lista do início ao fim
    traverse(){
        if(this.isEmpty()){
            console.log("A lista está vazia.");
            return;
        }

        // Instanciamos uma variável para iterar sob a nossa lista partindo do head
        let current = this.#head;
        // Enquanto o nó que estivermos existir (não for undefined), printa o valor no console e passa para o próximo
        while (current){
            console.log(current.value);
            current = current.next;
        }
    }
    
    // Percorre a lista do fim ao início
    traverseReverse(){
                if(this.isEmpty()){
            console.log("A lista está vazia.");
            return;
        }

        // Instanciamos uma variável para iterar sob a nossa lista partindo do tail
        let current = this.#tail;
        // Enquanto o nó que estivermos existir (não for undefined), printa o valor no console e passa para o anterior
        while (current){
            console.log(current.value);
            current = current.prev;
        }
    }
    
    insertAt(value, index){
        // Verifica se o índice é valido
        if (index < 0 || index > this.#length) return undefined;

        // Instancia um novo objeto da classe nó a ser inserido
        const newNode = new Node(value);

        // Se o índice for o primeiro, insere com o método específico pra isso
        if (index === 0){
            this.preppend(value);
            return;
        }

        // Se o índice for o último, insere com o método específico pra isso
        if (index === this.#length){
            this.append(value);
            return;
        }

        // Instancia algumas variáveis para iteramos sob a lista e inserirmos o valor
        let current  = this.#head;
        let previous;
        let count = 0;

        // Enquanto o nó que estivermo for menor que o índice
        while (count < index){
            // Passa para o próximo
            previous = current;
            current = current.next;
            count++;
        }

        // Ao inserir o nó, mudamos os ponteiros dos nós anterior e posterior a ele
        newNode.next = current;
        newNode.prev = previous;
        previous.next = newNode;
        current.prev = newNode;

        this.#length++;
    }
    
    // Encontrar o índice de um valor específico
    indexOf(value){
        let crrent = this.#head;
        let index = 0;

        while(current){
            if (current.value === value) return index;
            current = current.next;
            index++;
        }

        return -1;
    }
    
    removeAt(index){
        if (index < 0 || index > this.#length) return undefined;
        
        if (index === 0) return this.removeFirst();
        if (index === this.#length -1) return this.removeLast();

        let current = this.#head;
        let count = 0;

        while (count < index){
            current = current.next;
            count++;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;

        this.#length--;
        return current.value;
    }

    size = () => this.#length;

    isEmpty = () => this.#length === 0;

    toString(){
        let current = this.#head;
        let list = '';
        while (current !== undefined){
            list += current.value + ' → ';
            current = current.next;
        }
        console.log(list + 'undefined');
    }
    
    // Remove um nó por um valor
    removeByValue(value) {
        if (this.isEmpty()) return undefined;

        let current = this.#head;

        // Percorre a lista procurando o valor
        while (current) {
            if (current.value === value) {
                // Se for o primeiro nó
                if (current === this.#head) {
                    return this.removeFirst();
                }
                // Se for o último nó
                if (current === this.#tail) {
                    return this.removeLast();
                }
                // Se estiver no meio: o anterior aponta para o próximo e vice-versa
                current.prev.next = current.next;
                current.next.prev = current.prev;

                this.#length--;
                return current.value;
            }
            current = current.next;
        }
        return undefined; // Valor não encontrado
    }

    // Busca um valor na lista
    find(value) {
        let current = this.#head;

        while (current) {
            if (current.value === value) {
                return current; // Retorna o nó encontrado
            }
            current = current.next;
        }
        return undefined;
    }
}