const express = require("express")
const app = express()

function userMiddleware(req, res, next){
    const username = req.headers.username
    const password = req.headers.password
    if(username != 'vaibhav' || password != "pass"){
        res.status(403).json({
            msg : "Invalid credentials"
        })
    }
    else{
        next()
    }
}

function kidneyMiddleware(req, res, next){
    const kidneyId = req.query.kidneyId
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg : "Invalid inputs"
        })
    }
    else{
        next()
    }
}

app.get('/kidney-health', userMiddleware, kidneyMiddleware, function (req, res){
    //Do some logic here

    res.send("Your Kidney is fine")
})

app.get('/overall-health', userMiddleware, kidneyMiddleware, function(req, res){
    //Write logic for overall health

    res.json({
        msg : "Your health is good"
    })
})

app.get('/heart-health', userMiddleware, function (req, res){
    //Write the logic for heart health

    res.json({
        msg : "Your heart is healthy"
    })
})



