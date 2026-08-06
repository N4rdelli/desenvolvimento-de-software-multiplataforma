// ----------------------------------------------------------------------

// EXERCÍCIO 1
// Contagem de Vendas por Cliente:
// Objetivo: Calcular quantas vendas cada cliente realizou. Dica: Use $group com cliente_id.

db.vendas.aggregate([
    // Estágio 1: Agrupamento
    {
        $group: {
            _id: "$cliente_id", // Agrupa por cliente_id
            total_vendas: { $sum: 1 } // Conta o número de vendas para cada cliente
        }

    },
    // Estágio 2: Ordenação
    {
        $sort: { total_vendas: -1 } // Ordena os resultados por total_vendas em ordem decrescente
    }
]);

// ----------------------------------------------------------------------

// EXERCÍCIO 2
// Média de Vendas por Produto:
// Objetivo: Determinar a média de vendas para cada tipo de produto.
// Dica: Agrupe por produto e utilize $avg.

db.item.aggregate([
    // Estágio 1: Agrupamento
    {
        $group:{
            _id: "$produto", // Agrupa por tipo de produto
            media_atd_vendida: { $avg: "$quantidade" } // Calcula a média de vendas para cada produto
        }
    },
    // Estágio 2: Ordenação
    {
        $sort: { media_atd_vendida: -1 } // Ordena os resultados por média de vendas em ordem decrescente
    }
]);