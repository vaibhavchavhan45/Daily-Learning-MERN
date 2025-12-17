import { useEffect, useState } from 'react'
import { Todos } from './Components/todoos'


function App() {
  const [todosArray, setTodosArray] = useState([])

  useEffect(() => {
    fetch('http://localhost/3000/todos')
    .then((response) => response.json())
    .then((data) => setTodosArray(data.todos))
    .catch((e) => console.error("Failed to fetch todos:", e));
  }, [])

  return (
    <>
      <Todos todosArray={todosArray}/>
    </>
  )
}

export default App
