// Enunciado:
// Simule uma fila de impressão onde diferentes documentos são adicionados à fila. Cada documento deve ter um
// nome e um tamanho em páginas. Ao processar a fila, exiba no console qual documento está sendo impresso e 
// remova-o da fila após a "impressão".

// Importa a nossa classe Queue personalizada
import Fila from "./Queue.js";

// Instancia um novo objeto da classe Queue para representar a fila de impressão
const filaDeImpressao = new Fila();

// Criamos uma classe para representar um documento
class Documento {
    constructor(nome, paginas){
        this.nome = nome; // Nome do documento
        this.paginas = paginas; // Número de páginas do documento
    }
}

// Adicionamos documentos à fila de impressão
filaDeImpressao.enqueue(new Documento("Relatório", 5));
filaDeImpressao.enqueue(new Documento("TCC", 20));
filaDeImpressao.enqueue(new Documento("Contrato", 10));
filaDeImpressao.enqueue(new Documento("Apresentação", 15));
filaDeImpressao.enqueue(new Documento("Resumo", 3));

// Enquanto a fila não estiver vazia, imprimimos os documentos
while (!filaDeImpressao.isEmpty()) {
    // Remove o primeiro documento da fila
    let doc = filaDeImpressao.dequeue(); 

    // Simula a impressão
    console.log(`Imprimindo ${doc.nome} (${doc.paginas} páginas)...`); 
}

// Quando todos os documentos são impressos, exibimos uma mensagem final
console.log("Todos os documentos foram impressos!");