using api.Models;
using api.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ToDoController : Controller
    {
        private readonly ITodoRepository _repository;

        public ToDoController(ITodoRepository repository)
        {
            _repository = repository;
        }

        // GET/api/todo
        // Método para obter todos os itens
        [HttpGet]
        public async Task<ActionResult<List<ToDoItem>>> Get()
        {
            var toDoItems = await _repository.GetAllAsync();
            return Ok(toDoItems);
        }

        // GET/api/todo/{id}
        // Método para obter um item por Id
        [HttpGet("{id:length(24)}")]

        public async Task<ActionResult<ToDoItem>> Get(string id)
        {
            var item = await _repository.GetByIdAsync(id);
            if (item is null) return NotFound();
            return Ok(item);
        }

        // POST/api/todo
        // Método para criar um novo item
        [HttpPost]
        public async Task<IActionResult> Post(ToDoItem newItem)
        {
            await _repository.CreateAsync(newItem);
            return CreatedAtAction(nameof(Get), new { id = newItem.Id }, newItem);
        }

        // PUT/api/todo/{id}
        // Método para atualizar um item existente por Id. Edita o título, descrição ou status do item. Atualiza o item inteiro.
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Put(string id, ToDoItem updatedItem)
        {
            var existingItem = await _repository.GetByIdAsync(id);
            if (existingItem is null) return NotFound();

            updatedItem.Id = existingItem.Id; // Garante que o Id permaneça o mesmo
            await _repository.UpdateAsync(id, updatedItem);
            return NoContent();
        }

        // PATCH/api/todo/{id}/complete
        // Método para marcar um item como concluído. Atualiza apenas o status do item.
        [HttpPatch("{id:length(24)}/complete")]
        public async Task<IActionResult> PatchComplete(string id, bool isCompleted)
        {
            var existingItem = await _repository.GetByIdAsync(id);
            if (existingItem is null) return NotFound();
            
            existingItem.IsCompleted = isCompleted;
            await _repository.UpdateCompletedStatusAsync(id, isCompleted);
            return NoContent();
        }

        // PATCH/api/todo/{id}/cancell
        // Método para marcar um item como concluído. Atualiza apenas o status do item.
        [HttpPatch("{id:length(24)}/cancel")]
        public async Task<IActionResult> PatchCancel(string id, bool isCancelled)
        {
            var existingItem = await _repository.GetByIdAsync(id);
            if (existingItem is null) return NotFound();

            existingItem.IsCancelled = isCancelled;
            await _repository.UpdateCancelledStatusAsync(id, isCancelled);
            return NoContent();
        }
    }
}
