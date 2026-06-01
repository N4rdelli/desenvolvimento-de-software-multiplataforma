<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// O axios aponta para a API .NET
const api = axios.create({
  baseURL: 'http://localhost:5091/api/todo'
})

// Estados Relativos
const tasks = ref([]);
const newTitle = ref('');
const newDescription = ref('');
const newDueDate = ref('');
const editingTask = ref(null);

// Buscar tarefas (GET)
const fetchTasks = async () => {
  try {
    const response = await api.get('/');
    tasks.value = response.data;
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
  }
};

// Criar nova tarefa (INSERIR)
const createTask = async () => {
  if (!newTitle.value.trim()) {
    alert("Por favor, digite um título!");
    return;
  }

  try {
    const payload = {
      title: newTitle.value,
      description: newDescription.value,
      dueDate: newDueDate.value ? new Date(newDueDate.value).toISOString() : null
    };

    // Alerte para testar se a função chega até aqui
    console.log("Enviando dados:", payload);

    await api.post('/', payload);

    newTitle.value = '';
    newDescription.value = '';
    newDueDate.value = '';
    fetchTasks(); // Atualiza a lista na tela
  } catch (error) {
    // Se a API rejeitar, isso vai te dizer exatamente o motivo (Ex: erro 400, 404 ou 500)
    console.error("Erro completo da API:", error.response);
    alert(`Erro ao salvar tarefa: ${error.response?.status} - ${error.response?.data?.title || error.message}`);
  }
};

// Preparar campos para edição
const startEdit = (task) => {
  // Se a tarefa tiver prazo, convertemos o formato ISO vindo do banco para o formato aceito pelo input local (YYYY-MM-DDThh:mm)
  let formattedDate = null;
  if (task.dueDate) {
    formattedDate = new Date(task.dueDate).toISOString().slice(0, 16);
  }

  editingTask.value = {
    ...task,
    dueDate: formattedDate
  };
};

// Salvar alteração (EDITAR)
const saveEdit = async () => {
  try {
    await api.put(`/${editingTask.value.id}`, editingTask.value);
    editingTask.value = null;
    fetchTasks();
  } catch (error) {
    console.error("Erro ao editar tarefa:", error);
  }
};

// Marcar como Concluída (CONCLUIR)
const completeTask = async (task) => {
  try {
    // Inverte o estado atual ou força true. Vamos passar como query string para o .NET mapear no parâmetro 'isCompleted'
    const nextStatus = !task.isCompleted;
    await api.patch(`/${task.id}/complete?isCompleted=${nextStatus}`);
    fetchTasks();
  } catch (error) {
    console.error("Erro ao concluir tarefa:", error);
  }
};

// Marcar como Cancelada
const cancelTask = async (task) => {
  try {
    const nextStatus = !task.isCancelled;
    await api.patch(`/${task.id}/cancel?isCancelled=${nextStatus}`);
    fetchTasks();
  } catch (error) {
    console.error("Erro ao cancelar tarefa:", error);
  }
};

// Excluir permanentemente do Banco de Dados
const deleteTask = async (id) => {
  if (confirm("Tem certeza que deseja excluir permanentemente esta tarefa?")) {
    try {
      await api.delete(`/${id}`);
      fetchTasks(); // Atualiza a listagem na tela
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  }
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  // O método toLocaleString converte o UTC do banco automaticamente para o fuso horário da máquina do usuário
  return date.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
};

// Buscar as tarefas assim que o componente for montado na tela
onMounted(fetchTasks);
</script>

<template>
  <div class="container">
    <h1>Gerenciador de Tarefas (To-Do List)</h1>

    <div class="card form-section">
      <h3>{{ editingTask ? 'Editar Tarefa' : 'Nova Tarefa' }}</h3>
      <div class="form-group">
        <input v-if="editingTask" v-model="editingTask.title" placeholder="Editar título da tarefa..." type="text" />
        <input v-else v-model="newTitle" placeholder="Título da tarefa..." type="text" />

        <input v-if="editingTask" v-model="editingTask.description" placeholder="Editar descrição detalhada..."
          type="text" />
        <input v-else v-model="newDescription" placeholder="Descrição detalhada..." type="text" />
        <div class="date-group">
          <label>Prazo Limite (Opcional):</label>
          <input v-if="editingTask" v-model="editingTask.dueDate" type="datetime-local" />
          <input v-else v-model="newDueDate" type="datetime-local" />
        </div>
        <button v-if="!editingTask" @click="createTask" class="btn-primary">Adicionar</button>
        <div v-else class="action-buttons">
          <button @click="saveEdit" class="btn-success">Salvar</button>
          <button @click="editingTask = null" class="btn-secondary">Cancelar Edição</button>
        </div>
      </div>
    </div>

    <div class="task-list">
      <div v-for="task in tasks" :key="task.id" class="card task-item"
        :class="{ 'status-completed': task.isCompleted, 'status-cancelled': task.isCancelled }">
        <div class="task-content">
          <h4>{{ task.title }}</h4>
          <p>{{ task.description }}</p>
          <p v-if="task.dueDate" class="text-due-date">
            📅 <strong>Prazo:</strong> {{ formatDate(task.dueDate) }}
          </p>
          <span class="badge">
            {{ task.isCompleted ? 'Concluída' : task.isCancelled ? 'Cancelada' : 'Pendente' }}
          </span>
        </div>

        <div class="task-actions" v-if="!task.isCompleted && !task.isCancelled">
          <button @click="startEdit(task)" class="btn-secondary-outline">Editar</button>
          <button @click="completeTask(task)" class="btn-success">Concluir</button>
          <button @click="cancelTask(task)" class="btn-secondary">Cancelar</button>
          <button @click="deleteTask(task.id)" class="btn-danger">🗑️ Excluir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilização Simples e Moderna */
.container {
  max-width: 600px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
  padding: 0 1rem;
}

h1 {
  text-align: center;
  color: #333;
}

.card {
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-success {
  background: #28a745;
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-danger {
  background: #dc3545;
  color: white;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 5px solid #ffc107;
}

.status-completed {
  border-left-color: #28a745;
  opacity: 0.7;
}

.status-cancelled {
  border-left-color: #dc3545;
  opacity: 0.5;
  text-decoration: line-through;
}

.task-content h4 {
  margin: 0 0 0.25rem 0;
}

.task-content p {
  margin: 0 0 0.5rem 0;
  color: #666;
}

.badge {
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  background: #eee;
  border-radius: 12px;
}

.task-actions {
  display: flex;
  gap: 0.25rem;
}

.date-group {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 0.9rem;
  color: #555;
}
.text-due-date {
  font-size: 0.85rem;
  color: #d9534f; /* Cor avermelhada discreta para o prazo */
  margin-top: 0.25rem;
}
.btn-danger-outline {
  background: transparent;
  border: 1px solid #dc3545;
  color: #dc3545;
  padding: 0.5rem;
}
.btn-danger-outline:hover {
  background: #dc3545;
  color: white;
}
</style>