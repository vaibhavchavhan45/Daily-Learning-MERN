const express = require("express")
const app = express()

app.use(express.json())

app.post('/health-checkup', function (req, res){
  const kidneys = req.body.kidneys  //body {key : array}
  const kidneyLength = kidneys.length
  res.send("You have " +kidneyLength+ " Kidneys")
})

//Global catches
app.use(function (err, req, res, next){
    res.status(500).json({
        msg : "Sorry for the Inconvinience! Something is up with our server"
    })
})

//Why we need global catches?
//Because we know ki if user send some gibrish through the body, our server may crash due to this and user will be able to see some HTML type code which we don't want to show to the end users on our websites. So, global catches ensures that if there is an error like thingy then it will run and print the clean message which we send through res.send("") or res.json({})
app.listen(3000)