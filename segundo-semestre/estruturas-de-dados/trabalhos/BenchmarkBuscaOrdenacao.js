// Importando as classes necessárias para o benchmark
import Sorter from "../algoritmos/Ordenacao.js";
import Searcher from "../algoritmos/Busca.js";

// Tamanho do vetor para o benchmark: 100 mil elementos
// Diminuí  para que fosse possível rodar a Benchmark sem que o tempo de execução fosse muito longo
const tamanhoVetor = 99999;
const vetor = Array.from({ length: tamanhoVetor }, () => Math.floor(Math.random() * tamanhoVetor));
const valorProcurado = "Nardelli";
vetor.push(valorProcurado); // Adiciona meu nome no final do vetor
console.log("Vetor de", vetor.length, "elementos criado.");

// Início do Benchmark
console.log("\n\nIniciando o benchmark de busca e ordenação...");

// -------------------------------------------------------------

// Ordenação Bubble Sort
console.log("\nBubble Sort:");
console.time("OrdenacaoBubbleSort")
const vetorOrganizadoBubble = Sorter.bubbleSort(vetor);
console.timeEnd("OrdenacaoBubbleSort");

// Busca Sequencial no vetor ordenado com Bubble Sort
console.time("BuscaSequencialBubbleSort");
Searcher.sequencial(vetorOrganizadoBubble, valorProcurado);
console.timeEnd("BuscaSequencialBubbleSort");

// Busca Binária no vetor ordenado com Bubble Sort
console.time("BuscaBinariaBubbleSort");
Searcher.binaria(vetorOrganizadoBubble, valorProcurado);
console.timeEnd("BuscaBinariaBubbleSort");

// Busca por Interpolação no vetor ordenado com Bubble Sort
console.time("BuscaInterpolacaoBubbleSort");
Searcher.interpolacao(vetorOrganizadoBubble, valorProcurado);
console.timeEnd("BuscaInterpolacaoBubbleSort");

// -------------------------------------------------------------

// Ordenação Quick Sort
console.log("\nQuick Sort:");
console.time("OrdenacaoQuickSort")
const vetorOrganizadoQuick = Sorter.quickSort(vetor);
console.timeEnd("OrdenacaoQuickSort");

// Busca Sequencial no vetor ordenado com Quick Sort
console.time("BuscaSequencialQuickSort");
Searcher.sequencial(vetorOrganizadoQuick, valorProcurado);
console.timeEnd("BuscaSequencialQuickSort");

// Busca Binária no vetor ordenado com Quick Sort
console.time("BuscaBinariaQuickSort");
Searcher.binaria(vetorOrganizadoQuick, valorProcurado);
console.timeEnd("BuscaBinariaQuickSort");

// Busca por Interpolação no vetor ordenado com Quick Sort
console.time("BuscaInterpolacaoQuickSort");
Searcher.interpolacao(vetorOrganizadoQuick, valorProcurado);
console.timeEnd("BuscaInterpolacaoQuickSort");

// -------------------------------------------------------------

// Ordenação Merge Sort
console.log("\nMerge Sort:");
console.time("OrdenacaoMergeSort")
const vetorOrganizadoMerge = Sorter.mergeSort(vetor);
console.timeEnd("OrdenacaoMergeSort");

// Busca Sequencial no vetor ordenado com Merge Sort
console.time("BuscaSequencialMergeSort");
Searcher.sequencial(vetorOrganizadoMerge, valorProcurado);
console.timeEnd("BuscaSequencialMergeSort");

// Busca Binária no vetor ordenado com Merge Sort
console.time("BuscaBinariaMergeSort");
Searcher.binaria(vetorOrganizadoMerge, valorProcurado);
console.timeEnd("BuscaBinariaMergeSort");

// Busca por Interpolação no vetor ordenado com Merge Sort
console.time("BuscaInterpolacaoMergeSort");
Searcher.interpolacao(vetorOrganizadoMerge, valorProcurado);
console.timeEnd("BuscaInterpolacaoMergeSort");