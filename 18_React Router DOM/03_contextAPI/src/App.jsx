import { createContext, useContext, useState } from "react";

const countContext = createContext(0);
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <countContext.Provider value={{ count, setCount }}>
        <Parent />
      </countContext.Provider>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <Count />
      <Buttons />
    </div>
  );
}

function Count() {
  const { count } = useContext(countContext);
  return <div>count {count}</div>;
}

function Buttons() {
  const { count, setCount } = useContext(countContext);
  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}> Increment </button>
      <button onClick={() => {setCount(count - 1)}}>  Decrement </button>
    </div>
  );
}
export default App;

//This problem statement is like prop-drilling ki we have send props(includes state variable) to child 
//In prop-drilling we pass it as prop from parent to child but parent don't need as we discussed in prop-drilling
//So, contextAPI gets rid of it, Without passing a prop to parent pass directly to child
//If parent wants to use the props so, it can use but, if parent don't need props then using contextAPI we pass directly to child
//How?
//Firstly, u have to create context like this const countContext = createContext(0);
//And when we have to use that context then we do in APP's return do this :
{/* <countContext.Provider value={{ count, setCount }}>
        <Parent />
</countContext.Provider> */}
//meaning : countContext is context we created is an object provides us by React which lets us use the property Provider
//And it wraps the parent component of children(to which we have to pass props)
//and write the things which we have to pass to children like this value={{ count, setCount }}
//now u can use these states or any props directly in child
//Who are the childs of parent ? Count and Buttons
//So, in these 2 children if we have to use these count and setCount (basically prop) then u have to write it like this
//const { count } = useContext(countContext);
//if we need setCount also then const { count, setCount } = useContext(countContext); (Note : useContext is a hook which lets us use the context we have created i.e. countContext and the syntax is like this)
//And finally our props are passed to child without passing through parents



/*<countContext.Provider value={{ count, setCount }}>
        <Parent />
</countContext.Provider> 

How to read above thing?
“Here, CountContext.Provider is a component created by React’s createContext.
It takes a value prop, which is an object containing count and setCount.
It wraps ParentComp as its child.
The purpose is to make count and setCount available to all child components via useContext, without passing them as props.”
*/