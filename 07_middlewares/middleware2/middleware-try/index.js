const express = require("express")
const app = express()

//Middleware
function checkAgeMiddleware(req, res, next){
    const age = req.query.age
    if(age >= 14){
        next()
    }
    else{
        res.status(403).json({
            msg : "You are not eligible for the ride"
        })
    }
}

app.use(checkAgeMiddleware)
//You can either write this middleware after the route in a HTTP req
//And if u have to use the same middleware for all of the requests then you can add the middleware 
// before the req means it is now usable for all the requests

app.get('/ride1', function (req, res){
  res.json({
    msg : "you are eligible to rode the ride1"
  })
})

app.get('/ride2', function (req, res){
  res.json({
    msg : "you are eligible to rode the ride2"
  })
})

app.listen(3000)

