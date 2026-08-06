// COMANDOS DE BACKUP
mongodump --out /pendrive;

mongodump --db nome_do_banco --collection nome_da_colecao --out /pendrive/pasta;

mongodump --uri="mongodb://usuario:senha@host:porta/nome_do_banco" --out /pendrive/pasta;

// ----------------------------------------------------------------------

// PARÂMETROS DE BACKUP

// Define o banco a ser exportado
--db nome_do_banco

// Exporta apenas uma coleção específica
--collection nome_da_colecao;

// Aplica um filtro nos documentos
--query '{ "isActive": true }';

// ----------------------------------------------------------------------

// PARÂMETROS DE EXCLUSÃO

// Exclui uma ou mais coleções
--excludeCollection logs;

// Exclui coleções que começam com certo prefixo
--excludeCollectionsWithPrefix tmp_;

// ----------------------------------------------------------------------

// PARÂMETROS DE AUTENTICAÇÃO E CONEXÃO

// Conecta via URI padrão MongoDB
--uri="mongodb://usuario:senha@localhost:27017/nome_do_banco";

// Conecta definindo o endereço e a porta
--host localhost:27017;

// Conecta com autenticação manual
--username admin --password 123 --authenticationDatabase admin;

// Conecta utilizando uma conexão segura (TSL/SSL)
--ssl

// ----------------------------------------------------------------------

// PARÂMETROS PARA DEFINIR O DESTINO DO BACKUP

// Define o diretório onde salvará os arquivos BSON
// É melhor se passarmos o caminho definitvo (C:/.../.../meu_backup)
--out ./meu_backup;

// Gera um único arquivo de backup, é o ideal
--archive=nome_do_arquivo.archive;

// Comprime ainda mais o arquivo de backup
--gzip --archive=nome_do_arquivo.archive;

// ----------------------------------------------------------------------

// PARÂMETROS PARA CONTROLE DE CONSISTÊENCIA E TEMPO

// Mostra quantos backups foram feitos
--oplog;

// Número de coleções a serem exportadas simultaneamente
--numParallelCollections 4;

// Escolhe de qual nó ler
--readPreference=secondary;

// ----------------------------------------------------------------------

// PARÂMETROS DE TESTE E DEBUG

// Oculta saídas no terminal, não aparece nada enquanto está fazendo 
--quiet;

// Exibe detalhes da operações, aparece tudo enquanto está fazendo
--verbose

// Mostra todos os parâmetros disponíveis
mongodump --help;

// ----------------------------------------------------------------------

// Comando completo

mongodump
--uri="mongodb://usuario:senha@localhost:27017/loja"
--collection vendas
--query '{"ano": 2025}'
--out ./backups/loja
--gzip
--archive=vendas2024.archive