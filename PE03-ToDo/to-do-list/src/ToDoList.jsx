import React, { useState } from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(){
        setNewTask(event.target.value);
    }

    function addTask(){

    } 

    function deleteTask(index){

    }

    return(<div className="todo-list-app">

        <h1>ToDo List App</h1>

        <div>
            <input
                type="text"
                input_task="Task1"
                value={newTask}
                onChange={handleInputChange}/>
            <button
                className="add-button"
                onClick={addTask}>
                Add
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
export default ToDoList