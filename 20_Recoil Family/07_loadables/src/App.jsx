import { useRecoilValueLoadable } from "recoil"
import { todoSelectorfamily } from "./selectorFam"

function App() {
  return (
    <>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={4} />
    </>
  )
}

function Todo({id}){
  const loadable = useRecoilValueLoadable(todoSelectorfamily(id))

  if(loadable.state === "loading") return <div>Loading...</div>
  if(loadable.state === "hasError") return <div>Error!</div>

  const todo = loadable.contents
  return(
    <div>
      {todo.userId}
      <br />
      {todo.title}
      <br />
      {todo.completed ? "Completed : Yes" : "Completed : No"}
      <br /> <br />
    </div>
  )
}

export default App
