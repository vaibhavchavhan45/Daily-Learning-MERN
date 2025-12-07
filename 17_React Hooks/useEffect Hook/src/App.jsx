import { useEffect, useState } from "react";
import Todos from "./todos";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(async function (res) {
      const json = await res.json();
      setState(json);
    });
  }, []);

  return (
    <div>
      {state.map((iTodo) => (
        <Todos key={iTodo.id} title={iTodo.title} userId={iTodo.userId}></Todos>
      ))}
    </div>
  );
}

export default App;
