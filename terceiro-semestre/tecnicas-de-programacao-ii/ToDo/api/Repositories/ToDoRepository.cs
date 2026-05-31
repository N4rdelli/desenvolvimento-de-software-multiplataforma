using api.Models;
using api.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Serializers;

namespace api.Repositories
{
    public class ToDoRepository : ITodoRepository
    {
        // Implementa o contrato com a interface de maneira a definir a lógica de acesso ao MongoDB.
        // O Controller irá chamar os métodos dessa classe, mas não terá conhecimento dos comandos em MongoDB, apenas se a interface foi implementada ou não.
        private readonly IMongoCollection<ToDoItem> _collection;

        // Construtor para injetar as dependências do MongoDB
        public ToDoRepository(IOptions<MongoDbSettings> settings)
        {
            // Configurações do MongoDB para conectar ao banco de dados (passadas via appsettings.json)
            var mongoClient = new MongoClient(settings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(settings.Value.DatabaseName);

            // Configuração para obter a coleção de ToDoItems do MongoDB (estamos definindo a collection abaixo)
            _collection = mongoDatabase.GetCollection<ToDoItem>("ToDoItems");
        }

        // Métodos implementados de acordo com o contrato com a Interface
        // Método assíncrono para obter todos os itens
        public async Task<List<ToDoItem>>GetAllAsync() => await _collection.Find(_ => true).ToListAsync();

        // Método assíncrono para obter um item por Id
        public async Task<ToDoItem?> GetByIdAsync(string id) => await _collection.Find(item => item.Id == id).FirstOrDefaultAsync();

        // Método assíncrono para criar um novo item
        public async Task CreateAsync(ToDoItem item) => await _collection.InsertOneAsync(item);

        // Método assíncrono para atualizar um item existente por Id
        public async Task UpdateAsync(string id, ToDoItem item) => await _collection.ReplaceOneAsync(item => item.Id == id, item);

        // Método assíncrono para deletar um item por Id
        public async Task DeleteAsync(string id) => await _collection.DeleteOneAsync(x => x.Id == id);

        // Método para atualizar status de Completed de um item por Id
        public async Task UpdateCompletedStatusAsync(string id, bool isCompleted)
        {
            var update = Builders<ToDoItem>.Update.Set(item => item.IsCompleted, isCompleted);
            await _collection.UpdateOneAsync(item => item.Id == id, update);
        }

        // Método para atualizar status de Cancelled de um item por Id
        public async Task UpdateCancelledStatusAsync(string id, bool isCancelled)
        {
            var update = Builders<ToDoItem>.Update.Set(item => item.IsCancelled, isCancelled);
            await _collection.UpdateOneAsync(item => item.Id == id, update);
        }
    }
}
