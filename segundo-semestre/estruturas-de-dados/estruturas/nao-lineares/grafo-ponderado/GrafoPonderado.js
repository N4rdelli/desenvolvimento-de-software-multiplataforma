export default class GrafoPonderado{
    constructor(){
        // Conjunto de vértices únicos do grafo
        this.vertices = new Set();

        // Mapa de adjacência
        // Cada vértice aponta para uma lista de objetos: { vertice, peso }
        this.adjacencia = new Map();
    }

    // Método para adicionar um novo vértice ao grafo.
    adicionarVertice(vertice) {
        // Adiciona o vértice ao conjunto de vértices (se ele já existir, nada é feito)
        this.vertices.add(vertice);

        if (!this.adjacencia.has(vertice)){
            // Se esse vértice ainda não tiver uma lista de adjacência, inicializa ela
            this.adjacencia.set(vertice, []);
        }
    }

    // Método para adicionar uma aresta ponderada entre dois vértices
    // Por padrão, é um grafo direcionado
    adicionarAresta(origem, destino, peso){
        // Verifica se os vértices passados como parãmetro realmente existem no grafo
        if (!this.adjacencia.has(origem)) this.adicionarVertice(origem);
        if (!this.adjacencia.has(destino)) this.adicionarVertice(destino);

        this.adjacencia.get(origem).push({vertice: destino, peso });

        // Se o grafo for não-direcionado, adiciona a aresta no sentido contrário
        // this.adjacencia.get(destino).push({vertice: origem, peso });
    }

    // Método para imprimir o grafo
    // Mostra a representação do grafo como uma lista de adjacência
    imprimirGrafo(){
        for (const [vertice, vizinhos] of this.adjacencia.entries()) {
            const lista = vizinhos.map(obj => `${obj.vertice}(${obj.peso})`).join(', ');
            console.log(`${vertice} → ${lista}`);
        }
    }

    // Gera e imprime a matriz de adjacÊncia do grafo
    // Usa infinity para representar a ausência de aresta
    imprimirMatrizAdjacencia(){
        const arrayVertices = Array.from(this.vertices);
        const n = arrayVertices.length;
        const matriz = Array.from({ length: n }, () => Array(n).fill(Infinity));

        arrayVertices.forEach((vertice, i) => {
            matriz[i][i] = 0; 
            const vizinhos = this.adjacencia.get(vertice) || [];
            for(const vizinho of vizinhos) {
                const j = arrayVertices.indexOf(vizinho.vertice);
                if (j !== -1) {
                    matriz[i][j] = vizinho.peso;
                }
            }
        });

        console.log('Matriz de Adjacência (valores de infinito representam ausência de aresta): ');
        console.log('   ', arrayVertices.join('   '));
        matriz.forEach((linha, i) => {
            console.log(arrayVertices[i], linha.map(x => x === Infinity ? '∞' : x).join('   '));
        });
    }

    // BUSCA EM PROFUNDIDADE (DEPTH-FIRST SEARCH) DFS
    // Percorre o grafo indo o mais fundo possível em cada caminho antes de voltar e explorar outras possibilidades.
    // Ela é feita de forma recursiva ou com o uso de uma pilha.
    // É útil para:
    // - Explorar todos os vértices alcançáveis a partir de um ponto
    // - Detectar ciclos
    // - Determiinar componentes conexos
    // - Resolver labirintos
    // - Construir árvores de espalhamento
    dfs(inicio) {
        const visitados = new Set();
        const resultado = [];

        const visitar = (vertice) => {
            visitados.add(vertice);
            resultado.push(vertice);

            const vizinhos = this.adjacencia.get(vertice) || [];
            for (const vizinho of vizinhos) {
                if (!visitados.has(vizinho.vertice)) {
                    visitar(vizinho.vertice);
                }
            }
        };

        visitar(inicio);
        console.log('DFS:', resultado.join(' → '));
    }

    // BUSCA EM LARGURA (BREADTH-FIRST SEARCH) BFS
    // Visita os vértices em camadas, ou seja, primeiro visita todos os vizinhos do vértice inicial, depois os vizinhos desses vizinhos, e assim por diante
    // É ideal para:
    // – Descobrir o menor número de passos até um nó (em grafos não ponderados).
    // – Explorar todos os nós acessíveis a partir de um ponto.
    // – Verificar conectividade.
    bfs(inicio){
        const visitados = new Set();
        const fila = [inicio];
        const resultado = [];

        visitados.add(inicio);

        while (fila.length > 0) {
            const atual = fila.shift();
            resultado.push(atual);

            const vizinhos = this.adjacencia.get(atual) || [];
            for (const vizinho of vizinhos){
                if (!visitados.has(vizinho.vertice)) {
                    visitados.add(vizinho.vertice);
                    fila.push(vizinho.vertice);
                }
            }
        }

        console.log('BFS:', resultado.join(' → '));
    }

    // ALGORITMO DE DIJKSTRA
    // Encontra o caminho mais curto de um vértice de origem para todos os outros vértices em um grafo ponderado.
    // Ele é eficiente para grafos com arestas de peso não-negativo e é amplamente utilizado em redes de computadores, sistemas de navegação e outros domínios onde a otimização de caminhos é crucial.
    dijkstra(inicio) {
        const distancias = {};
        const anteriores = {};
        const naoVisitados = new Set(this.vertices);

        for (const v of this.vertices) {
            distancias[v] = Infinity;
            anteriores[v] = null;
        }
        distancias[inicio] = 0;

        while (naoVisitados.size > 0){
            // Encontra o vértice não visitado com a menor distância
            const atual = [...naoVisitados].reduce((a, b) => distancias[a] < distancias[b] ? a : b);

            naoVisitados.delete(atual);

            // Atualiza as distâncias dos vizinhos do vértice atual
            for (const vizinho of this.adjacencia.get(atual)) {
                const alt = distancias[atual] + vizinho.peso;
                if (alt < distancias[vizinho.vertice]) {
                    distancias[vizinho.vertice] = alt;
                    anteriores[vizinho.vertice] = atual;
                }
            }
        }

        // Exibe o resultado
        console.log(`Menores distâncias a partir de ${inicio}:`);
        for (const v of this.vertices) {
            console.log(`${v}: ${distancias[v]}`)
        }
    }

    // ============================================================================
// ADAPTAÇÃO NECESSÁRIA NOS MÉTODOS INTERNOS DA SUA CLASSE (DENTRO DE GRAFOPONDERADO.JS)
// ============================================================================

    // Atualize o método dijkstra para receber o destino e interromper a busca ao encontrá-lo
    dijkstraEspecifico(inicio, destino = null) {
        const distancias = {};
        const anteriores = {};
        const naoVisitados = new Set(this.vertices);

        for (const v of this.vertices) {
            distancias[v] = Infinity;
            anteriores[v] = null;
        }
        distancias[inicio] = 0;

        while (naoVisitados.size > 0){
            const atual = [...naoVisitados].reduce((a, b) => distancias[a] < distancias[b] ? a : b);

            // SE ENCONTRAR O ALVO ('Nardelli'), PARA A BUSCA IMEDIATAMENTE (Igual aos outros testes do benchmark)
            if (destino && atual === destino) break;
            if (distancias[atual] === Infinity) break;

            naoVisitados.delete(atual);

            const vizinhos = this.adjacencia.get(atual) || [];
            for (const vizinho of vizinhos) {
                const alt = distancias[atual] + vizinho.peso;
                if (alt < distancias[vizinho.vertice]) {
                    distancias[vizinho.vertice] = alt;
                    anteriores[vizinho.vertice] = atual;
                }
            }
        }

        console.log(`Busca Dijkstra concluída até: ${destino || 'fim do grafo'}`);
    }
}