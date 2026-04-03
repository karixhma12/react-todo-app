import {useState} from "react";


function App(){
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);

  function addTodo(){
    let newTodo = {text : input, done : false}
    setTodos([...todos,newTodo]);
    setInput("");
  }

  return(
    <div>
      <h1> Todo App </h1>
      <input value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <button onClick={addTodo}> Add Todo </button>
      {todos.map((todo,index)=>{
        return(
        <div key={index}>
          {todo.text}
        </div>)
      })}
    </div>
  )
}


export default App;