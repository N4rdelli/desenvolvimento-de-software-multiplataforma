export default class Graph{
    // Inicializa um grafo vazio usando uma lista de adjacências
    constructor(){
        // Estrutura para armazenar os vértices e suas conexões
        this.adjacencia = {};
    }

    // Método para adicionar um vértice ao grafo
    // Verifica se o vértice já existe no grafo, se não existir, adiciona o vértice com uma lista vazia,
    // que será usada para armazenar as arestas conectadas a ele.
    adicionarVertice(vertice){
        if (!this.adjacencia[vertice]) {
            this.adjacencia[vertice] = [];
        }
    }

    // Método para adicionar uma aresta entre dois vértices
    // Verifica se ambos os vértices existem no grafo. Se não existirem, eles são adicionados.
    // Se existirem, adiciona vertice 2 à lista de adjacências de vertice 1 e vice-versa
    adicionarAresta(vertice1, vertice2){
        if (!this.adjacencia[vertice1]){
            this.adicionarVertice(vertice1);
        }
        if (!this.adjacencia[vertice2]){
            this.adicionarVertice(vertice2);
        }
        this.adjacencia[vertice1].push(vertice2);
        this.adjacencia[vertice2].push(vertice1);
    }

    // Método para remover uma aresta entre dois vértices
    // Verifica se ambos os vértices existem no grafo. Se existirem, remove vertice 2 da lista de adjacências de vertice 1 e vice-versa
    removerAresta(vertice1, vertice2){
        if (this.adjacencia[vertice1] && this.adjacencia[vertice2]){
            this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v !== vertice2);
            this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v !== vertice1);
        }
    }

    // Método para remover um vértice do grafo
    removerVertice(vertice){
        while (this.adjacencia[vertice]?.length){
            const adjacente = this.adjacencia[vertice].pop();
            this.removerAresta(vertice, adjacente);
        }
        delete this.adjacencia[vertice];
    }

    // Método para exibir o grafo
    imprimirGrafo(){
        for (let vertice in this.adjacencia){
            console.log(`${vertice} -> ${this.adjacencia[vertice].join(', ')}`);
        }
    }

    // Retorna o número total de vértices contidos no grafo
    contarVertices() {
        return Object.keys(this.adjacencia).length;
    }

    // Retorna o número total de arestas únicas (dividido por 2 devido à bidirecionalidade)
    contarArestas() {
        let total = 0;
        for (let vertice in this.adjacencia) {
            total += this.adjacencia[vertice].length;
        }
        return total / 2;
    }

    // Percorre o grafo em largura (BFS) a partir de um vértice inicial
    buscaLargura(verticeInicial) {
        if (!this.adjacencia[verticeInicial]) return [];

        const fila = [verticeInicial];
        const visitados = {};
        const resultado = [];

        visitados[verticeInicial] = true;

        while (fila.length) {
            const verticeAtual = fila.shift();
            resultado.push(verticeAtual);

            this.adjacencia[verticeAtual].forEach(adjacente => {
                if (!visitados[adjacente]) {
                    visitados[adjacente] = true;
                    fila.push(adjacente);
                }
            });
        }
        return resultado;
    }

    // Percorre o grafo em profundidade (DFS) de forma iterativa utilizando uma pilha
    buscaProfundidade(verticeInicial) {
        if (!this.adjacencia[verticeInicial]) return [];

        const pilha = [verticeInicial];
        const visitados = {};
        const resultado = [];

        visitados[verticeInicial] = true;

        while (pilha.length) {
            const verticeAtual = pilha.pop();
            resultado.push(verticeAtual);

            // Inverte para manter a ordem de vizinhos consistente na varredura
            [...this.adjacencia[verticeAtual]].reverse().forEach(adjacente => {
                if (!visitados[adjacente]) {
                    visitados[adjacente] = true;
                    pilha.push(adjacente);
                }
            });
        }
        return resultado;
    }

    // Verifica se existe um caminho viável entre um vértice de origem e um de destino
    possuiCaminho(origem, destino) {
        if (!this.adjacencia[origem] || !this.adjacencia[destino]) return false;
        const alcancaveis = this.buscaLargura(origem);
        return alcancaveis.includes(destino);
    }

    // Método público para iniciar uma impressão visual em árvore/árvore geradora a partir de uma raiz
    visualizarEstrutura(verticeInicial) {
        if (!this.adjacencia[verticeInicial]) {
            console.log("Vértice inicial inválido.");
            return;
        }
        const visitados = {};
        this._visualizarEstrutura(verticeInicial, "", true, visitados);
    }

    // Método auxiliar privado e recursivo para renderizar visualmente as ramificações do grafo
    _visualizarEstrutura(vertice, prefixo, ehUltimo, visitados) {
        // Marca o nó atual para evitar loops infinitos em grafos cíclicos
        visitados[vertice] = true;

        console.log(prefixo + (ehUltimo ? "└── " : "├── ") + vertice);

        // Filtra vizinhos para focar apenas nas conexões que ainda não foram exibidas/visadas neste ramo
        const vizinhosParaImprimir = this.adjacencia[vertice].filter(v => !visitados[v]);

        for (let i = 0; i < vizinhosParaImprimir.length; i++) {
            const proximoVertice = vizinhosParaImprimir[i];
            const ultimoFilho = i === vizinhosParaImprimir.length - 1;
            const novoPrefixo = prefixo + (ehUltimo ? "    " : "│   ");
            
            this._visualizarEstrutura(proximoVertice, novoPrefixo, ultimoFilho, visitados);
        }
    }

    // Para o exercício 3
    // Método de detecção de ciclos utilizando DFS iterativo com rastreamento de nós pais
    contemCiclo() {
        const visitados = {};
        
        // Loop para garantir a varredura em grafos desconexos ou florestas
        for (let vertice in this.adjacencia) {
            if (!visitados[vertice]) {
                // Estrutura da pilha armazena: [vértice_atual, vértice_pai]
                const pilha = [[vertice, null]];
                
                while (pilha.length > 0) {
                    const [atual, pai] = pilha.pop();
                    visitados[atual] = true;

                    for (let adjacente of this.adjacencia[atual]) {
                        // Se o adjacente foi visitado e não é o pai imediato, encontramos um ciclo
                        if (visitados[adjacente] && adjacente !== pai) {
                            return true;
                        }
                        if (!visitados[adjacente]) {
                            pilha.push([adjacente, atual]);
                        }
                    }
                }
            }
        }
        return false;
    }

    // ============================================================================
// ADAPTAÇÃO NECESSÁRIA NOS MÉTODOS INTERNOS DA SUA CLASSE (DENTRO DE GRAPH.JS)
// ============================================================================

    // Atualize o método buscaLargura para aceitar o alvo e parar assim que achar o seu nome
    buscaLarguraEspecifica(verticeInicial, alvo = null) {
        if (!this.adjacencia[verticeInicial]) return [];

        const fila = [verticeInicial];
        const visitados = { [verticeInicial]: true };
        const resultado = [];

        while (fila.length > 0) {
            const verticeAtual = fila.shift();
            resultado.push(verticeAtual);

            // SE ENCONTRAR O SEU NOME, PARA A BUSCA IMEDIATAMENTE
            if (alvo && verticeAtual === alvo) break;

            const vizinhos = this.adjacencia[verticeAtual] || [];
            for (const adjacente of vizinhos) {
                if (!visitados[adjacente]) {
                    visitados[adjacente] = true;
                    fila.push(adjacente);
                }
            }
        }
        return resultado;
    }
}