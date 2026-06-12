// Importando as classes necessárias para o benchmark
// Array, Pilha, Fila, LinkedList, DoublyLinkedList, BinaryTree e AVLTree
import Array from "../estruturas/lineares/arrays/Array.js";
import Stack from "../estruturas/lineares/pilha/Stack.js";
import Queue from "../estruturas/lineares/fila/Queue.js";
import LinkedList from "../estruturas/lineares/lista-encadeada/LinkedList.js";
import DoublyLinkedList from "../estruturas/lineares/lista-duplamente-encadeada/DoublyLinkedList.js";
import BinaryTree from "../estruturas/nao-lineares/arvore-binaria/BinaryTree.js";
import AVLTree from "../estruturas/nao-lineares/arvore-binaria-avl/AVLTree.js";
import Graph from "../estruturas/nao-lineares/grafo/Graph.js";
import GrafoPonderado from "../estruturas/nao-lineares/grafo-ponderado/GrafoPonderado.js";

// Instanciando as classes
const array = new Array();
const stack = new Stack();
const queue = new Queue();
const linkedList = new LinkedList();
const doublyLinkedList = new DoublyLinkedList();
const binaryTree = new BinaryTree();
const avlTree = new AVLTree();
const graph = new Graph();
const grafoPonderado = new GrafoPonderado();

// Função para gerar um número inteiro aleatório dentro de um intervalo
function getRandomIntRange(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tamanho do teste (diminuí para evitar que o teste demore muito)
const size = 1000;

let valor_a_ser_buscado = "Nardelli";

console.log("\nINICIANDO A BENCHMARK\nValor a ser buscado:", valor_a_ser_buscado);
console.log("\n\nTESTES DE INSERÇÃO\nPopulando as estruturas, inserindo dados...");

console.log("\nArray");
console.time("timerInsercaoArray");
for (let i = 0; i < size; i++) {
    if (i == (size-1)) {
        console.log(i);
        array.adicionarElemento(valor_a_ser_buscado);
    } else array.adicionarElemento(getRandomIntRange(i, size));
}
console.timeEnd("timerInsercaoArray");

console.log("\nPilha");
console.time("timerInsercaoPilha");
for (let i = 0; i < size; i++) {
    if (i == (size-1)) {
        console.log(i);
        stack.adicionarElemento(valor_a_ser_buscado);
    } else stack.adicionarElemento(getRandomIntRange(i, size));
}
console.timeEnd("timerInsercaoPilha");

console.log("\nFila");
console.time("timerInsercaoFila");
for (let i = 0; i < size; i++) {
    if (i == (size-1)) {
        console.log(i);
        queue.enqueue(valor_a_ser_buscado);
    } else queue.enqueue(getRandomIntRange(i, size));
}
console.timeEnd("timerInsercaoFila");

console.log("\nLista Encadeada");
console.time("timerInsercaoLinkedList");
for (let i = 0; i < size; i++) {
    if (i == (size-1)) {
        console.log(i);
        linkedList.insertAtEnd(valor_a_ser_buscado);
    } else linkedList.insertAtEnd(getRandomIntRange(i, size));
}
console.timeEnd("timerInsercaoLinkedList");

console.log("\nLista Duplamente Encadeada");
console.time("timerInsercaoDoublyLinkedList");
for (let i = 0; i < size; i++) {
    if (i == (size-1)) {
        console.log(i);
        doublyLinkedList.append(valor_a_ser_buscado);
    } else doublyLinkedList.append(getRandomIntRange(i, size));
}
console.timeEnd("timerInsercaoDoublyLinkedList");

console.log("\nÁrvore Binária");
console.time("timerInsercaoBinaryTree");
for (let i = 0; i < size; i++) {
    if (i == (size-1)) {
        console.log(i);
        binaryTree.insert(valor_a_ser_buscado);
    } else binaryTree.insert(getRandomIntRange(i, size));
}
console.timeEnd("timerInsercaoBinaryTree");

console.log("\nÁrvore AVL");
console.time("timerInsercaoAVLTree");
for (let i = 0; i < size; i++) {
    if (i == (size-1)) {
        console.log(i);
        avlTree.insert(valor_a_ser_buscado);
    } else avlTree.insert(getRandomIntRange(i, size));
}
console.timeEnd("timerInsercaoAVLTree");

console.log("\nGrafo Não Ponderado");
console.time("timerInsercaoGraph");
// Popula o grafo criando uma estrutura linear de conexões encadeadas (i -> i+1)
for (let i = 0; i < size; i++) {
    if (i === size - 1) {
        console.log(i);
        graph.adicionarAresta(i.toString(), valor_a_ser_buscado);
    } else {
        graph.adicionarAresta(i.toString(), (i + 1).toString());
    }
}
console.timeEnd("timerInsercaoGraph");

console.log("\nGrafo Ponderado");
console.time("timerInsercaoGrafoPonderado");
// Popula o grafo ponderado gerando conexões direcionadas lineares com pesos aleatórios
for (let i = 0; i < size; i++) {
    const pesoAleatorio = getRandomIntRange(1, 10);
    if (i === size - 1) {
        console.log(i);
        grafoPonderado.adicionarAresta(i.toString(), valor_a_ser_buscado, pesoAleatorio);
    } else {
        grafoPonderado.adicionarAresta(i.toString(), (i + 1).toString(), pesoAleatorio);
    }
}
console.timeEnd("timerInsercaoGrafoPonderado");

console.log("\n\nTESTES DE BUSCA\nProcurando o valor 'Nardelli'...");
console.log("\nArray");
console.time("timerBuscaArray");
array.obterIndiceDoElemento(valor_a_ser_buscado);
console.timeEnd("timerBuscaArray");

console.log("\nPilha");
console.time("timerBuscaPilha");
// Nesse caso aqui, nós já sabemos que o valor está no topo da pilha e que vai ser o primeiro a retorar
// A busca abaixo simula o processo de desempilhar até encontrar o valor, caso não estivesse no topo
while (!stack.estaVazia() && stack.removerElemento() !== valor_a_ser_buscado);
console.timeEnd("timerBuscaPilha");

console.log("\nFila");
console.time("timerBuscaFila");
// Nesse caso aqui, nós já sabemos que o valor está no final da fila e que vai ser o último desenfileirado
// Essa busca também simula o processo de desenfileirar até encontrar o valor
while (!queue.isEmpty() && queue.dequeue() !== valor_a_ser_buscado);
console.timeEnd("timerBuscaFila");

console.log("\nLista Encadeada");
console.time("timerBuscaLinkedList");
linkedList.find(valor_a_ser_buscado);
console.timeEnd("timerBuscaLinkedList");

console.log("\nLista Duplamente Encadeada");
console.time("timerBuscaDoublyLinkedList");
doublyLinkedList.find(valor_a_ser_buscado);
console.timeEnd("timerBuscaDoublyLinkedList");

console.log("\nÁrvore Binária");
console.time("timerBuscaBinaryTree");
binaryTree.search(valor_a_ser_buscado);
console.timeEnd("timerBuscaBinaryTree");

console.log("\nÁrvore AVL");
console.time("timerBuscaAVLTree");
avlTree.search(valor_a_ser_buscado);
console.timeEnd("timerBuscaAVLTree");

console.log("\nGrafo Não Ponderado");
console.time("timerBuscaGraph");
// Executa a busca a partir do vértice inicial "0", passando o seu nome 
// como o alvo (target) que interromperá o percurso assim que for encontrado
graph.buscaLarguraEspecifica("0", valor_a_ser_buscado);
console.timeEnd("timerBuscaGraph");

console.log("\nGrafo Ponderado");
console.time("timerBuscaGrafoPonderado");
// Executa o algoritmo de Dijkstra calculando as distâncias a partir de "0",
// mas passando o seu nome como destino para limitar e avaliar a rota até ele
grafoPonderado.dijkstraEspecifico("0", valor_a_ser_buscado);
console.timeEnd("timerBuscaGrafoPonderado");