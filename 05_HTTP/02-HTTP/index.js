const express = require("express")
const app = express()

app.get('/', function (req, res){
    const num = req.query.num
    const ans = sum(num)
    res.send(`Hey your output is ${ans}`)
})

function sum(n){
    let ans = 0
    for(let i=0; i<=n; i++){
        ans += i
    }
    return ans
}

const port = 3000
app.listen(port, function(){
    console.log(`Listening on port ${port}`);
})
