import axios from "axios"
import { selector } from "recoil"

export const todoSelector = selector({
    key : "todoSelector",
    get : async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
        return res.data
    }
})


//we're fetching only one todo and dont making a change to <Todo /> component
//If we were need to change the <Todo /> then would have used atom ke andar selector
//And, more importantly saying again we are fetching one todo of id=1 (check url)
//if we're fetching many todos with different id we would have used selectorfamily
//If we need to change those any one of the todos then we would have used atomfamily ke andar selectorFamily for fetching
