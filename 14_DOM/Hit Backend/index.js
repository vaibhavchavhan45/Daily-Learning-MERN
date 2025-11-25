const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.get('/signup', function (req, res){
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)

    const sum = a + b
    res.send(sum.toString())
})

app.listen(3000)