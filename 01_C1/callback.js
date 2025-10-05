/*
Callback function : A callback is simply a function you pass as an argument to another function 
so that the other function can call it later when it needs to.
*/


//Here we are using same of logic of adding again and again, to prevent this we use callback
function sq(n){
    return n * n
}

// function add(a,b) {
//     let v1 = sq(a)
//     let v2 = sq(b)
//     return v1+v2
// }
// console.log(add(2,3)); //calling add



function cube(n){
    return n * n * n
}

// function sum (a, b){
//     let v1 = cube(a)
//     let v2 = cube(b)
//     return v1 + v2
// }
// console.log(sum(2,2)); //calling sum

//Callback
function TotalSum(a, b, fn){
    let v1 = fn(a)
    let v2 = fn(b)
    return v1 + v2
}

let z = TotalSum(5,5,sq)
console.log(z);

let y = TotalSum(2,3,cube)
console.log(y);
