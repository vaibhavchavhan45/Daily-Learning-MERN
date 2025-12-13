import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState(1)
  return (
    <div>
      <button onClick={()=>{setState(1)}}>1</button>
      <button onClick={()=>{setState(2)}}>2</button>
      <button onClick={()=>{setState(3)}}>3</button>
      <button onClick={()=>{setState(4)}}>4</button>
      <Component id={state} />
    </div>
  );
}

function Component({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id= " + id)
    .then((res) => {
    setTodo(res.data.todo);
    });
  }, []);

  return (
    <div>
      <h3>Title : {todo.title}</h3>
      <h4>description : {todo.description}</h4>
    </div>
  );
}

export default App;
