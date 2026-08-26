import { Router } from "express";
import TaskController from "../controllers/TaskController.js";

// Instancia um novo objeto do módulo de rotas
const taskRoutes = new Router();

taskRoutes.get("/getAll/task", TaskController.GetAll);
taskRoutes.post("/create/task", TaskController.Create);

export default taskRoutes;