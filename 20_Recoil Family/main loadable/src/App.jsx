import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [loadable, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
   if (loadable.state === "loading") return <div>Loading...</div>
   if (loadable.state === 'hasError') return <p>Error!</p>

   const todo = loadable.contents

    function toggleCompletion(){
      setTodo({
        ...todo,                    //OR ...loadable.content
        completed : !todo.completed //OR !loadable.contents.completed
      })
    }

   return (
    <>
      {todo.title} <br />
      {todo.userId} <br />
      {todo.completed ? "Completed : Yes" : "Completed : No"}
      <br />
      <button onClick={toggleCompletion}>Toggle key</button>
      <br /> <br />
    </>
  )
}
export default App

/*what is loadable means and why we use it?
          Lodable is nothing but a loader suppose we are doing async data fetch then we get the actual data or whether
we don't there is no surity of getting right data always and as it is async call it might take few second to 
load the data, So, user will see the white screen for those seconds
So, to handle error or not showing the white screen to user we use loadables
Loadable has 3 states :
1.hasValue – The async data has successfully loaded, and you can access it via .contents
2.loading – The async data is still in progress. You know it’s not ready yet.
3.hasError – The async data failed to load, and the error is stored in .contents

So, in our code we have just define ki loadable.state is 'Loading' means fetching the data rn means user will not see white screen it will see "Loading..." text
loadable.state is "Error" means something is wrong sortUserPlugins, now user will see Error msg, app will not crash
If these 2 things didnt happens means loadble.state === "hasValue" means we can now access the value by .contents
Here, variable todo has value and todo variable can now use it
*/

//we're updating the completed from yes to no and viceversa. Thatswhy we're using atomFamily ke andar selectoFamily

