function sumTilln(n){
    let sum = 0;
    for(let i=0; i<n; i++){
        sum += i;
    }
    return sum
}

function demo(){
    console.log(sumTilln(50));
}

setTimeout(demo, 1000)
console.log("vaibhav");



//OR
function sumTilln(n){
    let sum = 0;
    for(let i=0; i<=n; i++){
        sum += i;
    }
    return sum
}

setTimeout(() => {
    console.log(sumTilln(100));
}, 1000)
console.log("vaibhav");