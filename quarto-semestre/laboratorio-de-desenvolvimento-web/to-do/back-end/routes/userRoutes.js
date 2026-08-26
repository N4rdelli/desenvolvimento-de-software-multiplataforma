import { Router } from "express";
import UserController from "../controllers/UserController.js";

// Instancia um novo objeto do módulo de rotas
const userRoutes = new Router();

userRoutes.post("/create/user", UserController.Create);

export default userRoutes;