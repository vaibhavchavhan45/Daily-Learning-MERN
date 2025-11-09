//arrow func
const sum = (a,b) => {
    return a+b
}
const ans = sum(1,2)
console.log(ans);


//Given an array where I need a new array where the values of prev arr is multiplied by 2
//Conventional way
let arr = [1,2,3,4,5]
let newArr = []
for(let i=0; i<arr.length; i++){
    newArr.push(arr[i] * 2 ) 
}
console.log(newArr);

//convinient way
let input = [1,2,3,4,5]
const Ans = input.map(function (i){
    return i*2
})
console.log(Ans);

//Print the even numbers from the given array
let myArr = [1,2,3,4,5]
let myNewArr = []
for(let i=0; i<myArr.length; i++){
    if(myArr[i] % 2 == 0){
        myNewArr.push(myArr[i])
    }
} 
console.log(myNewArr);


//convinient way
let thisArr = [1,4,7,5,4]
let myAns = thisArr.filter(function (n){
    if(n % 2 ==0) return true
    return false
})
console.log(myAns);
