import {useState} from "react";


function App(){
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);
  return(
    <div>
      <h1> Todo App </h1>
      <input value={input} onChange={(e)=>{setInput(e.target.value)}}/> 
    </div>
  )
}


export default App;