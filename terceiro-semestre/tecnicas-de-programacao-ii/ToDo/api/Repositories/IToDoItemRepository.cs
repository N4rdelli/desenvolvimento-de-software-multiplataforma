using api.Models;

namespace api.Repositories;

public interface ITodoRepository
{
    // Estou definindo o contrato através de uma Interface para desacoplar o Controller do MongoDB
    Task<List<ToDoItem>> GetAllAsync();
    Task<ToDoItem?> GetByIdAsync(string id);
    Task CreateAsync(ToDoItem item);
    Task UpdateAsync(string id, ToDoItem item);
    Task DeleteAsync(string id);
    Task UpdateCompletedStatusAsync(string id, bool isCompleted);
    Task UpdateCancelledStatusAsync(string id, bool isCancelled);
}