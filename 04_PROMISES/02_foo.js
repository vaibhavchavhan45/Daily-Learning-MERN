let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo")
    },1000)
})

console.log(p); //1.promise pending
console.log("vc"); //2.vc

p.then(() => {  //once promise is resolved then it will print foo
    console.log(p)
})
