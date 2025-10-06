let arr = [{
    firstName : "vc",
    gender : "male"
},{
    firstName : "ac",
    gender : "male"
},
{
    firstName : "az",
    gender : "female",
    metadata : {
        age : 22,
        add : "xyz"
    }
}]

for(let i=0; i<arr.length; i++){
    if(arr[i] ["gender"] == "male"){
        console.log(arr[i]["firstName"]);
    }
    if (arr[i] ["gender"] == "female") {
        console.log(arr[i]["metadata"]["age"]);
    }
    if(arr[i] ["firstName"] == "az"){
        console.log(arr[i]["metadata"]["add"])
    }
}
