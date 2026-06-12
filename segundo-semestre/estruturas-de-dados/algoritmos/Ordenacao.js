export default class Sorter{
    // ----------------------------------------------------------------
    
    // ORDENAÇÃO BUBBLE SORT

    static bubbleSort(arr){
        // Faz uma cópia do array recebido para não alterar o original
        const array = [...arr];
        let n = array.length;
        let trocou;

        do {
            trocou = false;
            // Percorre o array comparando elementos
            for (let i  = 0; i < n - 1; i++){
                if (array[i] > array[i + 1]){
                    // Troca os elementos
                    [array[i], array[i + 1]] = [array[i + 1], array[i]];
                    trocou = true;
                }
            }
            // Após cada passagem, o maior elemento está no final
            // Reduz o tamanho do array a ser percorrido
            n--;
        } while (trocou);

        return array;
    }

    // ----------------------------------------------------------------
    
    // ORDENAÇÃO QUICK SORT

    static quickSort(arr){
        // Se o array tiver 0 ou 1 elemento, já está ordenado
        if (arr.length <= 1) return arr;

        const pivot = arr[arr.length - 1]; // Escolhe o último elemento como pivô
        const menores = [];
        const maiores = [];

        // Particiona o array em menores e maiores que o pivô
        for (let i = 0; i < arr.length - 1; i++){
            if (arr[i] < pivot) {
                menores.push(arr[i]);
            } else {
                maiores.push(arr[i]);
            }
        }

        // Recursivamente ordena os menores e maiores, e concatena com o pivô
        return [...Sorter.quickSort(menores), pivot, ...Sorter.quickSort(maiores)];
    }

    // ----------------------------------------------------------------

    // ORDENAÇÃO MERGE SORT

    static mergeSort(arr){
        // Se o array tiver 0 ou 1 elemento, já está ordenado
        if (arr.length <= 1) return arr;

        const meio = Math.floor(arr.length / 2);
        const esquerda = arr.slice(0, meio);
        const direita = arr.slice(meio);

        return Sorter.mergeSort(esquerda, direita)
    }

    static merge(esquerda, direita){
        const resultado = [];
        let i = 0, j = 0;

        while (i < esquerda.length && j < direita.length){
            if (esquerda[i] < direita[j]) {
                resultado.push(esquerda[i++]);
            } else {
                resultado.push(direita[j++]);
            }
        }

        // Concatena os elementos restantes
        return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
    }
}