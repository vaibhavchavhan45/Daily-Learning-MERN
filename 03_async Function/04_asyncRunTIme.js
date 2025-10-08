console.log("vc");

let a = 0
for(let i=0; i<10000000; i++){
    a++
}
console.log(a);

setTimeout(function (){
    console.log("Async fn");
}, 5000)

console.log(1);

setTimeout(function(){
    console.log("delegated later reached first");
}, 1000)

//Firstly, code runs "vc" prints then for loop runs it prints, we know set Timeout is ready but it will not print, It has to wait
//then 1 prints
//Now its time of async func which function we will see first?
//obv the func which done with the calculating first will be displayed first
//Here, 2nd async func will run first then the first one 



//E.g. 2
setTimeout(function (){
    console.log(343);
    setTimeout(function (){
        console.log(999);
    },3000)
},5000)
//first timeout will run after 5 second
//Second callback is ready in 3 sec with it output when cb1 waiting for 5 sec
//once cb1 exeutes and display o/p then cb2 immediately shows its o/p because cb2 is ready with its op