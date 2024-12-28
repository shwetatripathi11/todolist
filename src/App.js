import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {

  const [todoList,setTodoList]=useState([]);
  const [newTask,setNewTask]=useState("");

  const handleChange = (event) =>{
    setNewTask(event.target.value);

  };

  const addTask = () =>{
    setTodoList([...todoList,newTask]);
     
  };

  const deleteTask = (taskName) =>{
    const newTodoList =todoList.filter((task) =>{
      if(task===taskName)
      {
        return false;
      }else{
        return true;
      }
    });
    setTodoList(newTodoList);

  }

 
  return(
  <div className="App">

    <h1>TODO LIST</h1>
    <div className="addTaskk">
      
      <input className="idd" placeholder="Enter Your Task" onChange={handleChange}/>
      <button className="idd" id="submit" onClick={addTask}>Submit</button>

    </div>
    <div className="list">
      {todoList.map((task) =>{
        return(
        <div>
          <h4 className="listtt" >{task}</h4>
          <button className="listtt" id="delete" onClick={()=>deleteTask(task)}>✗
          </button>
          
          </div>);
      }
      )}

    </div>
  </div>
);
}
    

export default App;
