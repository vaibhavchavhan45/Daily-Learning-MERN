import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async () => {
      await new Promise(r => setTimeout(r, 5000));
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      return res.data;
    },
  })
});

//Here, Instead of atomFamily we can use selectorFamily only without atomFamily
//because in app.jsx we are not updating,deleting,editing any data just reading the data
//If we are doing CRUD operations on data then we have to use atomfamily
