// Restaurar o banco de dados com base em um backup

// ----------------------------------------------------------------------

// COMANDOS DE RESTORE

// Restaurar um banco inteiro
mongorestore /caminho_do_backup;

// Restaurar uma coleção específica
mongorestore --db nome_do_banco --collection nome_da_colecao /caminho_do_backup/nome_do_banco/nome_da_colecao.bson;

// Restaurar e sobreescrever dados existentes
// O --drop remove os dados existentes antes de restauras
mongorestore --drop /caminho_do_backup;

// ----------------------------------------------------------------------

// PARÂMETROS PARA DEFINIR A ORIGEM DOS DADOS

// Pasta contendo os arquivos
mongorestore ./meu_backup;

// Restaura a partir de um único arquivo
--archive=backup.archive;

// Lê arquivos compactados com gzip
--gzip --archive=backup.archive;

// ----------------------------------------------------------------------

// PARÂMETROS PARA FILTRAR A RESTAURAÇÃO

// Define EM QUAL banco de dados os dados do backup serão restaurados
--db nome_do_banco;

// Restaura uma única coleçãp
--collection produtos;

// Restaura namespaces específicos (banco.coleção)
--nsInclude loja.vendas;

// Exclui namespaces esecíficos
--nsExclude localStorage.*;

// ----------------------------------------------------------------------

// PARÂMETROS DE COMPORTAMENTOS DE RESTAURAÇÃO

// Remove coleções existentes antes de restauras
--drop;

// Mantém a ordem dos documentos
--maintainInsertionOrder;

// Preserva o UUID das coleções (útil em shared clusters)
--preserveUUID;

// Interrompe a restauração ao primeiro erro
--stopOnError;

// ----------------------------------------------------------------------

// PARÂMETROS DE CONEXÃO E AUTENTICAÇÃO

// Conecta com a URI completa
--uri="mongodb://usuario:senha@localhost:27017";

// Define o host manualmente
--host localhost:27017;

// Autentica manualmennte
--username admin --authenticationDatabase admin

// ----------------------------------------------------------------------

// PARÂMETROS DE AJUSTE DE DESEMPENHO

// Número de threads de inserção por coleção
--numInsertionWorkersPerCollection 4;

// Define o nível de confirmação de escrita
--writeConcern=majority;

// Número de documentos por lote de inserção
--batchSize=1000;

// ----------------------------------------------------------------------

// PARÂMETROS DE DEPURAÇÃO DE AJUDA

// Exibe mais detalhes
--verbose

// Oculta saídas
--quiet

// Mostra todos os parâmetros disponíveis
mongorestore --help

// ----------------------------------------------------------------------

// EXEMPLOS

mongorestore
--uri="mongodb://usuario:senha@localhost:27017"
--db loja
--collection vendas
--drop
--gzip
--archive=vendas2025.archive