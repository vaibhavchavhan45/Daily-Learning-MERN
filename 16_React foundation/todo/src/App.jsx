import {useState} from "react";

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-10",
    completed: true
  }, {
    title: "Study Devops",
    description: "Study Devops from 10-11",
    completed: true
  }, ]); 

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodos([...todos, {
      title: "new Todo",
      description: "description of new todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}

    </div>
  )
}

//component
function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}


export default App


/*
We use useState to create a state variable todos holding an array of todo objects.

Each todo has title, description, and completed properties.

setTodos is used to update the todos whenever a new todo is added.

A <button> is rendered with an onClick handler that calls addTodo.

addTodo creates a new array using the spread operator [...todos, newTodo] and updates the state.

React automatically re-renders the component when state changes.

To display todos, we use todos.map(), where todo is the current item in the array.

Each todo is rendered as a <Todo> component, passing title and description as props.

The <Todo> component receives props and displays them using JSX.

Every click of the button adds a new todo and updates the UI dynamically without refreshing.*/