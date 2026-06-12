export default class Stack{
    // Atributos da nossa classe Stack

    // Utilizamos um vetor para armazenar os elementos da nossa pilha
    #itensDaPilha = [];

    // Utilizamos uma variável para armazenar o tamanho da nossa pilha
    #tamanhoDaPilha = 0;

    // Métodos da nossa classe Stack

    // Método para adicionar um elemento na pilha (adiciona no topo da pilha)
    adicionarElemento(elemento) {
        // Acessa a posição do array em que o índice é igual ao tamanho atual da pilha e atribui o elemento a essa posição
        this.#itensDaPilha[this.#tamanhoDaPilha] = elemento;
        
        // Incrementa o tamanho da pilha, já que adicionamos um novo elemento
        this.#tamanhoDaPilha++;
    }

    // Método para remover o elemento do topo da pilha
    removerElemento() {
        // Verifica se a pilha não está vazia: se estiver, não há nada para remover
        if (this.#tamanhoDaPilha === 0){
            return null;
        }
        // Se a pilha não estiver vazia, armazenamos o item no topo com base no tamanho atual da pilha
        const itemRemovido = this.#itensDaPilha[this.#tamanhoDaPilha - 1];

        // Removemos esse item que está no topo da pilha
        delete this.#itensDaPilha[this.#tamanhoDaPilha - 1];
        
        // Decrementamos o tamanho da pilha, já que removemos um elemento
        this.#tamanhoDaPilha--;

        // Retornamos o item removido
        return itemRemovido;
    }

    // Método para acessar o elemento no topo da pilha sem removê-lo
    acessarElementoNoTopo() {
        // Verifica se a pilha não está vazia: se estiver, não há um elemento no topo para acessar
        if (this.#tamanhoDaPilha === 0){
            return undefined;
        }
        // Retorna o item que está no topo da pilha com base no tamanho atual da pilha
        return this.#itensDaPilha[this.#tamanhoDaPilha - 1];
    }

    // Método para verificar se a pilha está vazia
    estaVazia = () => this.#tamanhoDaPilha === 0;

    // Método para obter o tamanho atual da pilha
    acessarTamanhoDaPilha = () => this.#tamanhoDaPilha;

    // Método para limpar a pilha
    limparPilha() {
        // Limpa o array que armazena os itens da pilha
        this.#itensDaPilha = [];

        // Reseta o tamanho da pilha para 0
        this.#tamanhoDaPilha = 0;
    }
}