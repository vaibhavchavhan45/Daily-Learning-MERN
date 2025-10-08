const fs = require("fs")
fs.readFile("a.txt", "utf-8", function(err, data){
    if(err){
        console.log("error in reading the file");
        return 
    }
    console.log(data);
})


//OR (using wrap in a function)
function rf(){
    fs.readFile("a.txt", "utf-8", function (err, data){
        if(err){
            console.log("error");
            return
        }
        console.log(data);
    })
}
rf()