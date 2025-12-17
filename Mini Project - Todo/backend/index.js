const express = require("express")
const {createTodo, updateTodo} = require("./types")
const {todo} = require("./db")
const app = express()

app.use(express.json())


app.post('/todo', async function (req, res){
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong input"
        })
        return
    }

    try{
        await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        msg : "todo created"
    })
    }

    catch(e){
        res.status(500).json({
            msg : "db error"
        })
    }  
})

app.get('/todos', async function(req, res){
    const todos = await todo.find() //can use try catch for more safety
    res.json({
        todos
    })
})

app.put('/completed', async function (req, res){
    const updatepayload = req.body
    const parsedPayload = updateTodo.safeParse(updatepayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong input"
        })
        return
    }

    await todo.updateOne(
        { _id: req.body.id }, //ORR --> _id : updatepayload.id(means wo todo update karo jiska _id match ho input se)
        { completed: true }  
    )
})    
app.listen(3000)


