const fs = require('fs')

function readFile(){
    return new Promise(function (resolve){
        fs.readFile("a.txt", "utf-8", function (err, data){
            resolve(data)
        })
    })
}

let onDone = function (data){
    console.log(data)
}
readFile().then(onDone)
