import ReadAndDisplayTodo from "./Store/Components/ReadDisplayTodo"
import TodoCreater from "./Store/Components/TodoCreater"

function App(){
  return (
    <div style={{padding: "20px"}}>
      <TodoCreater />
      <ReadAndDisplayTodo />
    </div>
  )
}
export default App