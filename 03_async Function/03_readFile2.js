const fs = require("fs")
fs.readFile("a.txt", "utf-8", function (err, data){
    console.log(data);
})
console.log("vc");


//E.g.2 ---->As readfile is async func so firstly "vc" then "vac" gets printed as async func gets 
// calculated after the printing of "vc" but it will not run async function have to wait, 
// when everything gets done then and then only async can run 

fs.readFile("a.txt", "utf-8", function (err, data){
    console.log(data);
})
console.log("vc");

for(let i=0; i<=100000000; i++){
    if(i == 1000000000){
        console.log("vc");
    }
}
console.log("vac");
