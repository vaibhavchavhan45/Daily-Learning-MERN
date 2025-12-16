import { useContext, useState } from "react"
import { CountContext } from "./Context";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
          <Count />
      </CountContext.Provider>
    </div>
  )
}

//count also can use props as a parent but, anything which is not child of count(parent) can't use these props 
function Count() {
  const {count} = useContext(CountContext)
  return <div>
    <h1>Count is shown by parent {count}</h1>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const {count} = useContext(CountContext)
  return <div>
    count : {count}
  </div>
}

function Buttons() {
    const {count, setCount} = useContext(CountContext)
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App