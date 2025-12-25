import { RecoilRoot, useRecoilValueLoadable } from "recoil"
import {todoSelector} from "./selector"

function App() {
  return(
    <div>
      <RecoilRoot>
          <Todo />
      </RecoilRoot>
    </div>
  )
}

function Todo(){
  const load = useRecoilValueLoadable(todoSelector)

  switch (load.state) {
    case 'loading' :
      return <div>Loading...</div>
    case "hasError" :
      return <div>Error!</div>
    case "hasValue" :
      const todo = load.contents
  return(
    <div>
      {todo.title}
      <br />
      {todo.completed ? "Completed : Yes" : "Completed : No"}
    </div>
  )
    
    default : 
      return null
  }
}

export default App
