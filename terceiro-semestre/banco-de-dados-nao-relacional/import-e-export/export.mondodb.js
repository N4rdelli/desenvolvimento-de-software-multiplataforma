// Exporta dados de uma coleção do MongoDB para um arquivo .json ou .csv
mongoimport;

// ----------------------------------------------------------------------

// EXPORTANDO DADOS

// Exporta uma coleção inteira para JSON
mongoexport --db nome_do_banco --collection nome_da_colecao --out nome_do_arquivo.json

// Exporta uma coleção com filtro 
mongoexport --db nome_do_banco --collection nome_da_colecao --query '{"campo": valor}' --out nome_do_arquivo.json

// Exportar para CSV com campos específicos
mongoexport --db nome_do_banco --collection nome_da_colecao --type=csv --fields campo_1, campo_2, campo_3 --out nome_do_arquivo.csv

// Exportar com autenticação
mongoimport --uri="mongodb://usuario:senha@localhost:20017/escola" --collection nome_da_colecao --out nome_do_arquio.json;

// ----------------------------------------------------------------------

// CONTROLES DE SAÍDA

// Caminho e nome do arquivo de saída
--out;

// Tipo de saída: json (padrão) ou csv
--type;

// Exporta os documentos como um array JSON (usado apenas no tipo json)
--jsonArray;

// Formata o JSON com indentação legível
--pretty;

// ----------------------------------------------------------------------

// EXPORTANDO DADOS

// Filtra os documentos com uma condição (em formato JSON)
--query;

// Lista de campos a serem exportados, separados por vírgula. Obrigatório para CSV.
--fields;

// Caminho para um arquivo .txt contendo os nomes dos campos, um por linha.
--fieldFile;

// Ordena os documentos antes de exportar (ex: {"nome": 1})
--sort;

// Pula os N primeiros documentos
--skip;

// Limita a quantidade de documentos exportados
--limit;

// Não exporta o cabeçalho com os nomes dos campos no .CSV
--noHeaderLine;

// ----------------------------------------------------------------------

// EXEMPLO DE MONGOEXPORT
mongoexport
--db escola
--collection alunos
--type=csv
--fields nome,idade,curso
--query '{"curso": "Informática"}'
--sort '{"idade": -1}'
--out alunos_informatica.csv;