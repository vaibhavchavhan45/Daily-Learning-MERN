import { useMemo, useState } from "react";

function App() {
  const [state, setState] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let total = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= Number(inputValue); i++) {
      sum += i;
    }
    return sum
  }, [inputValue]);

  return (
    <div>
      <input
        type="Number"
        placeholder="Enter no."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>
        Sum from 1 to {inputValue} is {total}
      </h1>
      <button onClick={() => setState(state + 1)}>Counter {state}</button>
    </div>
  );
}
export default App;



//here the thing is without memo if button changes then also for loop runs, for loop and button are ir-related to each other,
//loop is related to input field, it should not be happened like when button re-renders
//for loop should run
//So, useMemo like that when the dependency(here input field value) changes I will compute the for loop value
//otherwise I will remember the value previously calculated, will not re-compute it when button re-renders


//useEffect like that ki when any sideEffect occurs I will get rid of it
//In fetch call like that thingy we use useEffect because we want ki fetch call should not fetch the api link
//again and again, It should happen once irrespective of how many things are re-rendering

//High level :
//useMemo : memoise the high computation 
//useEffect : handles side effect

