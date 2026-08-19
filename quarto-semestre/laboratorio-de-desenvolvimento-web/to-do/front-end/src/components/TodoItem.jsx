import React from "react";
export default function TodoItem({todo}){
    return(
        <div className="flex flex-col sm:flex-row sm:items-center 
            sm:justify-between p-3 border rounded hover:shadow-sm" >
                <div>
                    <div className="font-medium">{todo.title}</div>
                    <div className="text-sm text-gray-600">{todo.description}</div>
                    <div className="text-sm">Data Limite:{new Date(todo.finishDate).toLocaleDateString()}</div>
                    <div className="text-sm">Situação:{todo.status}</div>
                </div>
        </div>
    );
}