export function Todos({todosArray}){
    return  <div>
        {todosArray.map(function (todo){
            return <div key={todo.id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "mark as completed"}</button>
                </div>      
        })}
        </div>
}


{/* <h1>Go to Gym</h1>
        <h2>You need to go to Gym</h2>
        <button>Mark as Completed</button> */}