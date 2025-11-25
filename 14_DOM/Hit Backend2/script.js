const express = require("express")
const app = express()

app.get('/interest', (req,res) => {
    const principle = parseInt(req.query.principle)
    const rate = parseInt(req.query.rate)
    const time = parseInt(req.query.time)

    const si = (principle * rate * time) / 100
    let total = si + principle

    res.send({
        total : total,
        si : si
    })
})

app.listen("App is listening on port 3000"+3000)