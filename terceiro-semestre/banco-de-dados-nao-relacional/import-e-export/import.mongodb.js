// Insere dados em uma coleção a partir de um arquivo externo
mongoimport;

// ----------------------------------------------------------------------

// IMPORTANDO DADOS

// Importa um arquivo JSON (um JSON por linha)
mongoimport --db nome_do_banco --collection nome_da_colecao --file nome_do_arquio.json;

// Importa um arquivo JSON se for um array de objetos  [{...}, {...}, {...}]
mongoimport --db nome_do_banco --collection nome_da_colecao --file nome_do_arquio.json --jsonArray;

// Importa CSV com cabeçalho
mongoimport --db nome_do_banco --collection nome_da_colecao --type csv --file nome_do_arquio.csv --headerline;

// Importa CSV sem cabeçalho
mongoimport --db nome_do_banco --collection nome_da_colecao --type csv --file nome_do_arquio.csv --fields campo_1, campo_2, campo_3;

// Importa com autenticação
mongoimport --uri="mongodb://usuario:senha@localhost:20017/nome_do_banco" --collection nome_da_colecao --file nome_do_arquio.json;

// ----------------------------------------------------------------------

// PARÂMETROS GERAIS DE IMPORTAÇÃO

// Conecta utilizando um URI completa (útil para autenticação e conexão remotas)
--uri;

// Endereço do servidor MongoDB
--host;

// Porta de conexão
--port;

// Autenticação (quando exigida)
--username;
--password;

// Define o banco de autenticação
--authenticationDatabase;

// ----------------------------------------------------------------------

// CONTROLE DOS ARQUIVOS

// Caminho para o arquivo de entrada
--file;

// Tipos de arquivo (json, cssv ou tsv)
--type;

// Para arquivos CSV/TSV, usa a primeira linha como nomes dos campos
--headerline;

// Lista os campos explicitamente (usado com CSV/TSV se não houver headline)
--fields;

// Indica que o arquivo JSON é um array de documentos
--jsonArray;

// ----------------------------------------------------------------------

// COMPORTAMENTOS DE INSERÇÃO

// Remove a coleção antes de importar os dados. Apaga dados existentes
--drop;

// Atualiza documentos com base em um campo chave; insere se não existir
--upsert;

// Lista os campos que serão usados como chave para o upsert
--upsertFields;

// Controla o modo de escrita: insert, upsert, ou merge
--mode;

// Interrompe a importação se ocorrer um erro
--stopOnError;

// Mantém a ordem original dos documentos durante a inserção
--maintainInsertionOrder;

// ----------------------------------------------------------------------

// PERFORMANCE E CONFIGURAÇÃO

// Número de threads de inserção paralela
--numInsertionWorkers;

// Define a política de gravação (ex: {w:1}, {w:"majority"})
--writeConcern

// Ignora validações definidas em schema da coleção
--bypassDocumentValidation;

// Ignora campos em branco ao importar em arquivos CVS
--ignoreBlanks;

// ----------------------------------------------------------------------

// EXEMPLO DE MONGOIMPORT

mongoimport
--db escola
--collection alunos
--file alunos.csv
--type csv
--headerline
--drop
--numInsertionWorkers 4
--stopOnError;