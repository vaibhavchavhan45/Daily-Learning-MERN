//Simple callback
function square(n){
    return n * n
}

function sum(a, b, callback){
    console.log(callback); //function : sq
    let v1 = callback(a)
    let v2 = callback(b)
    return v1 + v2
}
console.log(sum(5,5,square));

//Anonymous function
let ans = sum(2,2, function (n){
    return n*n*n
});
console.log(ans);