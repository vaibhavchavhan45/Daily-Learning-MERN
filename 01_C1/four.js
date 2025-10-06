// function sum(num1, num2){
//     let result = num1 + num2;
//     return result;
// }

// function displayResult(data){
//     console.log("Result of the sum is : " +data);  
// }

// function displayResultPassive(data){
//     console.log("Sum's result is : " +data);  
// }
// //You are only allow to call one function after this
// //How will u displayResult/displayResultPassive of sum

// let ans = sum(3,4)
// displayResult(ans)
// displayResultPassive(ans)


//Convinient method
function sum(num1, num2, fnToCall){
    let result = num1 + num2;
    return fnToCall(result)
}

function displayResult(data){
    console.log("Result of the sum is : " +data); 
}

function displayResultPassive(data){
    console.log("Sum's result is : " +data);  
}

let res = sum(5,5, displayResult)
console.log(res);

