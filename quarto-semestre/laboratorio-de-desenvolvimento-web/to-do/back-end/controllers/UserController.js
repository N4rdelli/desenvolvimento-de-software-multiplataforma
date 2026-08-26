// No controller, criamos os métodos da nossa entidade

import User from "../models/User.js";

import { Types } from 'mongoose';
import Argon2 from 'argon2';

export default class UserController {
    // Todos os métodos que interagem com o banco de dados devem ser assíncronos (async/await), para não travar a aplicação
    // Todos os métodos assíncronos devem ser tratados com try/catch, para capturar possíveis erros

    // Requisição do tipo POST, que cria um novo usuário no banco de dados
    static async Create(request, response) {
        // Puxa os dados do nosso usuário do corpo da requisição
        const { userName, userEmail, userPassword } = request.body;

        // Valida se todos os campos foram preenchidos. Podemos fazer outras validações depois.
        // Devemos fazer a validação tanto aqui no back-end quando no front-end
        if (!userName || !userEmail || !userPassword ) {
            return response.status(422).json({ message: "Preencha todos os campos para prosseguir." });
        }

        // Tenta criar o usuário no banco de dados. Caso dê erro, o catch captura e retorna para o front-end
        try {
            const hashedPassword = await Argon2.hash(userPassword);
            const user = new User({
                name: userName,
                email: userEmail,
                password: hashedPassword
            });
            const newUser = await user.save();
            return response.status(201).json({ message: "Usuário criado com sucesso!", newUser });

        } catch (error) {
            return response.status(500).json({ message: "Erro ao criar usuário.", error });
        }
    }
}