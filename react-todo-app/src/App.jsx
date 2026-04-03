import {useState,useEffect} from "react";


function App(){
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);

  function addTodo(){
    let newTodo = {text : input, done : false}
    setTodos([...todos,newTodo]);
    setInput("");
  }

  useEffect(()=>{
    let stored = localStorage.getItem("todos");
    if(stored){
      setTodos(JSON.parse(stored));
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  function mark(clickedIndex){
    setTodos(
      todos.map((t,i)=>{
          if(i===clickedIndex){
            return{
              ...t,done : !t.done
            }
          }
          return t;
        }
      )
    )
  }

  return(
    <div>
      <h1> Todo App </h1>
      <input value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <button onClick={addTodo}> Add Todo </button>
      {todos.map((todo,index)=>{
        return(
        <div key={index}>
          <input type="checkbox" checked={todo.done} onChange={()=>{mark(index)}}/>
          <span style={{textDecoration : todo.done ? "line-through" : "none"}}>
            {todo.text}
          </span>
        </div>)
      })}
    </div>
  )
}


export default App;