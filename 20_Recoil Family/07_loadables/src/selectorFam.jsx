import { selectorFamily } from "recoil";

export const todoSelectorfamily = selectorFamily({
    key : "todoSelectorfamily",
    get : (id) => async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        if(!res.ok){
            throw new Error("Failed to fetch")
        }
        const data = await res.json()
        return data
    }
})

//We are not performing CRUD on <Todo /> so, here we used selectorFamily
//If we have perform some operation then we would have used atomFamily ke andar selectorFamily

