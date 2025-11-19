const express = require("express")
const app = express()

const users = [
    { id : 1,name : "vc"},
    { id : 2,name : "ac"},
    { id : 3,name : "vac"},
    { id : 4,name : "aac"},
    { id : 5,name : "vca"} 
]

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to My API!",
        instructions: {
            allUsers: "/users",
            specificUser: "/users/:id"
        }
    })
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find((item) => item.id === id)
    if(user){
        res.json(user)
    }
    else{
        res.status(404).json({
            error : "User not found"
        })
    }
})

app.listen(3000, () => {
    console.log("App is running on port 3000");
})