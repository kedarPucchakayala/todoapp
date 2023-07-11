import React from 'react'
import { useState } from "react";

const Todo = () => {
    const [todo,setTodo] = useState([]);
    const [inputValue,setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleAddTodo = () =>{
        if(inputValue.trim() !== ''){
            const newTodo = {
                id:new Date().getTime(),
                text:inputValue,
            };

            setTodo([...todo,newTodo]);
            setInputValue('');
        }
    };
    const handleDeleteTodo = (id) =>{
            setTodo(todo.filter((todo)=> todo.id !== id));
            
    };
  return (
    <div>
         <h1>Todo App</h1>
         <input type="text"
          value={inputValue}
          onChange={handleInputChange} />
          <button onClick={handleAddTodo}>Add</button>
          <ul>
            {todo.map((todo) =>(
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={()=> handleDeleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
          </ul>
    </div>
  )
}

export default Todo
