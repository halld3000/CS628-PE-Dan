import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList(){

    const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){ 
        setTasks(t =>[...tasks, newTask]);  
        setNewTask("");
    } 

    function deleteTask(index){

        const updateTask = tasks.filter((_, i) => i !== index);
        setTasks(updateTask);
    }

    return(<div className="todo-list-app">

        
        <div>
            <input
                type="text"
                placeholder="Enter task description"
                input_task="Task1"
                value={newTask}
                onChange={handleInputChange}/>
             
        </div>

        <div>
            <button
                className="add-button"
                onClick={addTask}>
                Add Task
            </button>  
        </div>
        
        <ol>
            {tasks.map((task, index) =>
               <li key={index}>
                    <span className="text">{task}</span>
                    <button
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    
               </li>
            )}
        </ol>


    </div>);
}
export default TodoList