export default class Queue {
    // Atributos da nossa classe Queue

    // Utilizamos um vetor para armazenar os elementos da nossa fila
    #itensDaFila = [];

    // Utilizamos duas variáveis para controlar o início e o fim da fila
    #inicio = 0;
    #fim = 0;

    // Métodos da nossa classe

    // Método para adicionar um elemento na fila (adiciona no fim da fila)
    enqueue(elemento) {
        // Acessa a posição do array em que o índice é igual ao valor atual de fim e atribui o elemento a essa posição
        this.#itensDaFila[this.#fim] = elemento;

        // Incrementa o valor de fim, já que adicionamos um novo elemento no final da fila
        this.#fim++;
    }

    //Método para remover um elemento da fila (remove do início da fila)
    dequeue() {
        // Verifica se a fila está vazia: se estiver, não há nada para remover
        if (this.isEmpty()) {
            return undefined;
        }

        // Se a fila não estiver vazia, armazenamos o item no início da fila com base no valor atual de início
        const itemRemovido = this.#itensDaFila[this.#inicio];

        // Removemos esse item que está no início da fila
        delete this.#itensDaFila[this.#inicio];

        // Incrementamos o valor de início, já que removemos um elemento do início da fila
        this.#inicio++;

        // Se o início e oo fim estiverem alinhados, redefine a fila
        if (this.#inicio === this.#fim) {
            this.#inicio = 0;
            this.#fim = 0;
        }

        // Retornamos o item removido
        return itemRemovido;
    }

    // Método para acessar o elemento no início da fila sem removê-lo
    front() {
        // Verifica se a fila está vazia: se estiver, não há um elemento no início para acessar
        if (this.isEmpty()) {
            return undefined;
        }
        // Retorna o item que está no início da fila com base no valor atual de início
        return this.#itensDaFila[this.#inicio];
    }

    // Verifica se a fila está vazia comparando os valores de início e fim
    isEmpty = () => this.#fim === this.#inicio;

    // Retorna o número de elementos na fila calculando a diferença entre fim e início
    size = () => this.#fim - this.#inicio;

    // Limpa a fila
    clear() {
        this.#itensDaFila = [];
        this.#inicio = 0;
        this.#fim = 0;
    }
}