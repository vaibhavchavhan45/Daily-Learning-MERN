import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      return res.data;
    },
  })
});

//async call thing is the same as we mention in file : async data calls
//we can't perform CRUD if we dont make from atomfamily ke andar selector family

//Basic diff in async call from atom & selector and async call from atomFamily and selectorFamily is
//In atom and selector only one fetch call happens, if we have array of todos means we get all todos 
//at a single time then if we have to update it, edit it and delete it then we need to use map, find, filter based on id or unique value
//which is very non-convinient because if let say we update one todo then all things from array re-renders
//So, performance issues rises
//Meanwhile, if we do async data fetch/call from atomFamily and selector Family then we get only that singl todo
//in a variable on basis of id we provided e.g. id=1 we provided, so in todo variable we'll only get 
//that specific todo..Now, we can update it, edit it whatever we want and as we're getting this single todo
//then only this todo gets re-render not whole array(because we didnt get whole array)