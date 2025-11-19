const axios = require("axios")

//.then()
.then()
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((res) => {
    console.log(res.data);
})
.catch((err) => {
    console.log("err")
})

//async await 
async function demo(){
    const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
    console.log(response.data);
}
demo()

//try/catch
async function ax(){
try{
    const res = await axios.get("https://v2..jokeapi.dev/joke/Programming")
    console.log(res.data);
}
catch(err) {
    console.log("ERROR");
}
}
ax()

