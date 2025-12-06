import { useState } from 'react'

function App() {
  const [count, countState] = useState(0)

  return(
    <CustomButton count={count} countState={countState}></CustomButton>
  )
}

//component
function CustomButton({count, countState}){

  function onClickHandler(){
      countState(count + 1)
  }

    return(
      <button onClick={onClickHandler}>Counter {count}</button>
    )
}
export default App

/*
We need two things to create a button in React: a state and a component.
React internally takes care of rendering.
First, we define the state where count = 0.
Then, in the return, we use <CustomButton count={count} setCount={setCount}></CustomButton>.
React sees this and says: “Render CustomButton with these props.”
CustomButton function runs and returns a button with text showing count and an onClick handler that increments count.
React uses this returned button to render the actual HTML button on the screen.
*/
