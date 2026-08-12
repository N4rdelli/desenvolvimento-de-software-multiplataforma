// No controller, criamos os métodos da nossa entidade

// Importa a model criada manualmente
import Task from "../models/Task.js";

import { Types } from 'mongoose';

export default class TarefaController {
    // Todos os métodos que interagem com o banco de dados devem ser assíncronos (async/await), para não travar a aplicação
    // Todos os métodos assíncronos devem ser tratados com try/catch, para capturar possíveis erros
    
    // Requisção do tipo GET, que busca todas as tarefas no banco de dados
    static async GetAll(request, response) {
        try {
            const tasks = await Task.find();
            return response.status(200).json({ message: "Tarefas encontradas com sucesso!", tasks });
        } catch (error){
            return response.status(500).json({ message: "Erro ao buscar tarefas.", error });
        }
    }

    // Requisição do tipo POST, que cria uma nova tarefa no banco de dados
    static async Create(request, response) {
        // Puxa os dados da nossa Tarefa do corpo da requisição
        const { taskTitle, taskDescription, taskFinishDate, taskStatus } = request.body;

        // Valida se todos os campos foram preenchidos. Podemos fazer outras validações depois.
        // Devemos fazer a validação tanto aqui no back-end quando no front-end
        if (!taskTitle || !taskDescription || !taskFinishDate || !taskStatus) {
            return response.status(422).json({ message: "Preencha todos os campos para prosseguir." });
        }

        // Tenta criar a tarefa no banco de dados. Caso dê erro, o catch captura e retorna para o front-end
        try {
            const task = new Task({
                title: taskTitle,
                description: taskDescription,
                finishDate: taskFinishDate,
                status: taskStatus,
            });
            const newTask = await task.save();
            return response.status(201).json({ message: "Tarefa registrada com sucesso!", newTask });

        } catch (error) {
            return response.status(500).json({ message: "Erro ao registrar a tarefa.", error });
        }
    }
}