import { useState, memo, useCallback } from "react"

function App() {
  const [count, setCount] = useState(0)

  const demo = useCallback(() => {
    console.log("demo function called");
  }, [])
  
  return (
   <div>
      <Component props={demo}/> 
      <button onClick={()=> {setCount(count+1)}}>Counter : {count}</button>
   </div>
  )
}

const Component = memo(() => {
  console.log("Child clicked");
  
  return (
    <div>
      <button>Button Clicked!</button>
    </div>
  )
})

export default App


//If the code is like this without function and passing function as props:
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <div>
//       <Component /> 
//       <button onClick={()=> {setCount(count+1)}}>Counter : {count}</button>
//    </div>
//   )
// }

// const Component = memo(() => {
//   console.log("Child clicked");
  
//   return (
//     <div>
//       <button>Button Clicked!</button>
//     </div>
//   )
// })

//Then 
// 1.Without using memo : If we clicked on Counter button(upper btn) then log happens as "Child clicked"
// we know ki as re-render of app happens the child also gets re-renders thatswhy logged happens irrespective
// of that ki log and Counter button(upper btn) are not related
// 2.With memo : memo gets rid of it ki bhai app will re-render if something small thing has changes
// But, i will protect my component like that ki when app re-renders I will not let the logged happens
// from my component
// If component gets re-render means if something dynamically changed in component, then toh logged will happens
/*
But our original problem is that ki when we pass the function as props to the component then memo can't
stop the logged, "Child logged" gets printed although, the component has not dynamically changed
Why it happens ?
When re-renders happens any re-render not only component, React create New function(content is same but reference is different)
We know ki we are passing function as props in component
But, when we clicked the upper btn re-render happens react create a new function which is passes as a props
So, what happens is ki memo check the function(props) we got in our component is similar to previous props or not?
No, memo says ki bhai prev prop and this new prop is not same because their reference is different
(We think like that ki the content of both the functions are similar and the function is the same naa)
then why can't memo stop "Child from getting logged" and why memo says ki prev props and new props are different 
memo let the flow inside component and Child gets logged

So, overall memo miunderstood itself ki bhai ref is diff means props has changed and let the component re-render

This is the main problem can be overcomed by useCallback hook, ki props toh same tha then why re-rendered?
useCallback tells React:
“Don’t create a new function on every render.
Reuse the same function reference until dependencies change.”
Now, re-render happens as we click on upper btn then without useCallback() hook component re-renders
Now, this hook tells react ki bhai dependencies is same So, no need to create a new function
puraana wala hi use krte hai
*/
//Basically, not only function as props same happens with arrays and objects