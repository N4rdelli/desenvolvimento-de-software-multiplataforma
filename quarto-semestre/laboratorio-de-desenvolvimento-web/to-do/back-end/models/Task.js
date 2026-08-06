// Aqui nós estamos criando a model de uma Tarefa do nosso To-Do
import mongoose from '../db/connection.js';

const {Schema} = mongoose;
const taskSchema = new Schema({
    // Em cada campo, nós definimos o tipo de dado e se ele é obrigatório ou não
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    finishDate: {
        type: Date,
        required: true
    },
    status:{
        type: String,
        required: true
    },
},{timestamp: true}); // timestamp: true → cria automaticamente os campos createdAt e updatedAt
const Task = mongoose.model('Task', taskSchema);
export default Task;