import { Router } from "express";
import TaskController from "../controllers/TaskController.js";

// Instancia um novo objeto do módulo de rotas
const routes = new Router();

routes.get("/getAll/tasks/", TaskController.GetAll);
routes.post("/create/task", TaskController.Create);

export default routes;