// No controller, criamos os métodos da nossa entidade

// Importa a model criada manualmente
import Task from "../models/Task.js";

import { Types } from 'mongoose';

export default class TarefaController{
    static async Create(request, response){
        // Requisição do tipo POST, que cria uma nova tarefa no banco de dados
        
        // Puxa os dados da nossa Tarefa do corpo da requisição
        const {taskTitle, taskDescription, taskFinishDate, taskStatus} = request.body;
        
        // Valida se todos os campos foram preenchidos. Podemos fazer outras validações depois.
        // Devemos fazer a validação tanto aqui no back-end quando no front-end
        if (!taskTitle || !taskDescription || !taskFinishDate || !taskStatus) {
            return response.status(422).json({message: "Preencha todos os campos para prosseguir."});
        }

        // 
        try {
            const task = new Task({
                title: taskTitle,
                description: taskDescription,
                finishDate: taskFinishDate,
                status: taskStatus,
            });
            const newTask = await task.save();
            response.status(201).json({message: "Tarefa registrada com sucesso!", newTask});
            return;

        } catch (error){
            response.status(500).json({message: "Erro ao registrar a tarefa.", error});
        }
    }
}