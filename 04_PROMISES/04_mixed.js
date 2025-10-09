//Promise and .then
function sugar(){
let p = new Promise(function (resolve, reject){
    resolve("hi, there!")
})
return p;
}

sugar().then(function (data){
    console.log(data);
})


//OR
//Promise and async await
function sugar(){
let p = new Promise(function (resolve, reject){
    resolve("hi, there!")
})
return p;
}

async function main(){
    const response = await sugar()
    console.log(response);
}
main()
//async works only on function <like main func> await only works with async

//OR
//using only callback
function sugar(callback) {
    callback("hi, there!");
}

sugar(function (data) {
    console.log(data);
});