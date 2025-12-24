import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: idReceivingAsParameter => {
    return TODOS.find(item => item.id === idReceivingAsParameter)
  },
});

//If u think that .find syntax is weird then use this
// let findTodo = null
// for(let i=0; i<TODOS.length; i++){
//   if(TODOS[i].id == idReceivingAsParameter){
//     findTodo = TODOS[i]
//   }
// }
// return findTodo