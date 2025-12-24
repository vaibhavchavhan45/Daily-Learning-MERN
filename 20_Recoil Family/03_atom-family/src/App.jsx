import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

   function updateTitle(){
    setTodo({
      ...todo,
      title : todo.title + "✅"
    })
   }

  return (
    <>
      {todo.title}
      <br />
      {todo.description}
      <br />
      <button onClick={updateTitle}>Mark as done!</button>
      <br /> <br />
    </>
  )
}

export default App

//What was the logic behind the atomFamily is -it means ki u have multiple things in a array or in objects
//when the multiple things present which share same property but we want everyone should have its own identity
//means if we tell ki bhai id=2 ka component render ho jaaye toh that for that things we use atom family
//In this e.g. we had TODOS we want ki id I say ki todo with id=1 should rendered how it will rendered
//simple logic is that create atom family when u use atom family in app.jsx it asks a parameter as id
//If we provide that id to that atomFamily then in atomFamily we can write logic like this ki give me todo whose id is this(given parameterized id)
//other things are rendered of title and description just simple stuffs

//Why we preferred atomFamily ?
//because if we store all todos in the array in db(or other file) then we use atom to manipulate things
//like updatingTodo, deleting and editing todo
//As we change only one todo but that change reflects in a whole array means whole array i.e. whole list of todo got re-rendered just because of one todo
//So, we don't want that we want ki if single todo change, only that should just re-rendered not all todos


//Which file to write first : 
//--Usually atomFamily, UI in App,jsx and ofcourse we have a db File(in memory or actual db file here TODOS.js)