export default class Array {

    // Atributos da nossa classe Array

    // Utilizamos um vetor para armazenar os elementos do nosso Array
    #itensDoArray = [];

    // Utilizamos uma variável para armazenar o tamanho do nosso Array
    #tamanhoDoArray = 0;

    // Construtor da nossa classe Array
    constructor(){

    }

    // Métodos da nossa classe Array

    // Método para adicionar um elemento no final do Array
    adicionarElemento(elemento){
        // // Pergunta 2 do segundo exercício:
        // // Intera sob o Array
        // for (let i = 0; i < this.#tamanhoDoArray; i++){
        //     // Acessa o valor do elemento na posição atual e compara com o elemento que queremos adicionar
        //     if (this.#itensDoArray[i] === elemento){
        //         return undefined;
        //     }
        // }

        // Acessa a posição do array em que o índice é igual ao tamanho atual do array e atribui o elemento a essa posição
        this.#itensDoArray[this.#tamanhoDoArray] = elemento;
        
        // Incrementa o tamanho do array, já que adicionamos um novo elemento
        this.#tamanhoDoArray++;
    }

    // Método para remover o elemento no final do Array
    removerElemento(){
        // Verifica se o array não está vazio: se estiver, não há nada para remover
        if (this.#tamanhoDoArray === 0){
            return null;
        }

        // Se o array não estiver vazio, armazenamos o item na última posição com base no tamanho atual do array
        const itemRemovido = this.#itensDoArray[this.#tamanhoDoArray - 1];

        // Removemos esse item que está na última posição do array
        delete this.#itensDoArray[this.#tamanhoDoArray - 1];
        
        // Decrementamos o tamanho do array, já que removemos um elemento
        this.#tamanhoDoArray--;

        // Retornamos o item removido
        return itemRemovido;
    }

    // Método para acessar o elemento em uma posição específica do array
    acessarElementoPorIndice(indice){
        // Verifica se o índice é válido: deve ser maior ou igual a 0 e menor que o tamanho do array
        if (indice < 0 || indice >= this.#tamanhoDoArray){
            return undefined;
        }

        // Retorna o elemento na posição do índice solicitado
        return this.#itensDoArray[indice];
    }

    // Método para limpar o Array
    limparArray(){
        // Reseta o array para um vetor vazio
        this.#itensDoArray = [];

        // Reseta o tamanho do array para 0
        this.#tamanhoDoArray = 0;
    }

    // Método para ver o tamanho do Array
    verTamanhoDoArray = () => this.#tamanhoDoArray;

    // Método para visualizar os itens do Array
    verItensDoArray = () => this.#itensDoArray;

    // Exercício 3: implemente dois novos métodos: para editar um valor e para obter o índice de um valor
    // Método para editar um elemento em uma posição específica
    editarElementoPorIndice(indice, novoValor){
        // Verifica se o índice é válido
        if (indice < 0 || indice >= this.#tamanhoDoArray){
            return false;
        }

        // Acessa a posição do array em que o índice é igual ao índice solicitado e atribui o novo valor a essa posição
        this.#itensDoArray[indice] = novoValor;
        return true;
    }

    // Método para obter o índice de um elemento em específico
    obterIndiceDoElemento(elemento){
        // Itera sob o array
        for (let i = 0; i < this.#tamanhoDoArray; i++){
            // Acessa o valor do elemento na posição atual e compara com o elemento que queremos encontrar
            if (this.#itensDoArray[i] === elemento){
                return i;
            }
        }
        // Se o elemento não for encontrado, retorna -1
        return undefined;
    }
}