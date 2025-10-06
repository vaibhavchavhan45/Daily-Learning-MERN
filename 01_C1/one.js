let arr = [10020,120,254]
let max = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i] > max) {
        max = arr[i];
    }
}
console.log(max)
