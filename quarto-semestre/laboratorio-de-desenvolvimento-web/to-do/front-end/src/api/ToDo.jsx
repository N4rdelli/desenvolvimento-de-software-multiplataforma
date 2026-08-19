import axios from "axios";
const api = axios.create({
    baseURL: "http:localhost:5000/todo",
    headers: {
        "Content-Type": "application.json"
    }
})
export const getToDos=()=>api.get("/getAll/tasks");
export const createToDo=()=>api.post("/create/task");
export default api;