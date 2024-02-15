import React,{useState} from 'react';
import './index.css';

function Game (){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange (event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }
    return(
        <>
            <div className="container">
                <h1>TO-DO-LIST</h1>
            

            <div className="input">
                <input type="text" placeholder='Enter Task...' value={newTask} onChange={handleInputChange} />
                <button className='add-btn' onClick={addTask}>ADD</button>
            </div>

            <ol>
                {tasks.map((task,index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delet' onClick={()=>deleteTask(index)}>Delete</button>
                    <button className='move' onClick={()=>moveTaskUp(index)}>☝️</button>
                    <button className='move' onClick={()=>moveTaskDown(index)}>👇</button>
                </li>
                )}
            </ol>
            </div>
        </>
    )
}

export default Game