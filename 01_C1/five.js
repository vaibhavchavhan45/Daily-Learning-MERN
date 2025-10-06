function arithmetic(a, b, arithmeticFinalfn){
    let ans = arithmeticFinalfn(a,b)
    return ans;
}

function sum(a, b){
    return a + b;
}

let value = arithmetic(5,4,sum)
console.log(value);
