export default class Searcher{
    // ----------------------------------------------------------------

    // BUSCA SEQUENCIAL

    static sequencial(arr, valorProcurado){
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === valorProcurado) return i; // Retorna o índice do elemento encontrado
        }

        return -1; // Retorna -1 se o elemento não for encontrado
    }

    // ----------------------------------------------------------------

    // BUSCA BINÁRIA

    static binaria(arr, valorProcurado){
        let inicio = 0;
        let fim = arr.length - 1;

        while (inicio <= fim){
            let meio = Math.floor((inicio + fim) / 2);

            if (arr[meio] === valorProcurado) return meio; // Retorna o índice do elemento encontrado
            else if (arr[meio] < valorProcurado) inicio = meio + 1;
            else fim = meio - 1;
        }

        return -1; // Retorna -1 se o elemento não for encontrado
    }

    // ----------------------------------------------------------------

    // BUSCA POR INTERPOLAÇÃO

    static interpolacao(arr, valorProcurado){
        let inicio = 0;
        let fim = arr.length - 1;

        while (
            inicio <=  fim &&
            valorProcurado >= arr[inicio] &&
            valorProcurado <= arr[fim]
        ){
            if (inicio === fim){
                return arr[inicio] === valorProcurado ? inicio : -1; // Verifica se o elemento é o único restantes
            }

            const pos = inicio + Math.floor(
                ((valorProcurado - arr[inicio]) * (fim - inicio)) / (arr[fim] - arr[inicio])
            );

            if (arr[pos] === valorProcurado) return pos; // Retorna o índice do elemento encontrado

            if (arr[pos] < valorProcurado) inicio = pos + 1;
            else fim = pos - 1;
        }

        return -1; // Retorna -1 se o elemento não for encontrado
    }
}