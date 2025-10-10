const express = require("express")
const port = 3000
const app = express()

app.get('/', function (req, res){
    res.send("Hello World")
})

app.get("/route-handler", (req, res) =>{
    //headers, body, query parameters
    res.json({
        name : "vaibhav",
        age : 18
    })
})

//POSTMAN
app.post("/conversations", (req, res)=>{
    console.log(req.headers);
    console.log(req.body);
    res.send({
        msg : "2 + 2 = 4"
    })
})

app.listen(port, () => {
    console.log("App listening on port " +port);  
})

