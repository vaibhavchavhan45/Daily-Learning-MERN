import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ParentComp count={count} setCount={setCount}/>
  )
}

function ParentComp({ count, setCount }) {
  return (
    <>
      <CountCom count={count}/>
      <ButtonsComp count={count} setCount={setCount}/>
    </>
  )
}

function CountCom({ count }) {
  return (
    <div>
      count {count}
    </div>
  )
}

function ButtonsComp({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment button</button>
      <button onClick={() => setCount(count - 1)}>Decrement button</button>
    </div>
  )
}

export default App

//This is the e.g. of prop drilling, here are 3 components one is parent and its 2 child components
//Because parent ke andar ye dono component render ho rhe hai
//Prop drilling means passing the prop from parent to it child
//Here parent dont need the props but without passing from parent how can we pass it to the child
//So, this is prop drilling

/*
                          parent

        child1                                child2


Grandchild1       Grandchild2         GrandChild3           Grandchild4

In the above tree Let say, if the state is defined in app and we have to pass that state from app to grandChild1 and grandChild4(parent is rendering in App)
No matter parent need that prop or not and child1, child2 need it or not
But, if we have to pass this to GrandChild4 then we have to passed it from parent and from Child1 and Child2 to the grandChild1 and grandChild4
This is prop-drilling
*/