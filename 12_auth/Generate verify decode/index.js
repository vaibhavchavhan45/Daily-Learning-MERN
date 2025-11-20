//Generate the jwt token
const jwt = require("jsonwebtoken")

const value = {
    name : "vc",
    password : "123"
}

const token = jwt.sign(value, "secret")
console.log(token);


//decode
/*Let say intruder got this jwt token created by user and got credentials through jwt.io still intruder
dont able to figure out the secret key which we mentioned that's why decoded jwt cannot be verified by the server
if the original secret key is missing, so that NO ONE can fishes the account and send the request
*/
const jwt = require("jsonwebtoken")

const decodedValue = {
    name : "vc",
    password : "123"
}

const decode = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmMiLCJwYXNzd29yZCI6IjEyMyIsImlhdCI6MTc1NjcwMjkzN30._9eUwXzvx2IJLbV7ncJ5ALYM4POWH-Bl0kEjC0OCHnk", "secreta")
console.log(decode);


//verify
const jwt = require("jsonwebtoken")

const decodedValue2 = {
    name : "vc",
    password : "123"
}

const decoded2 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmMiLCJwYXNzd29yZCI6IjEyMyIsImlhdCI6MTc1NjcwMjkzN30._9eUwXzvx2IJLbV7ncJ5ALYM4POWH-Bl0kEjC0OCHnk", "secret")
console.log(decode);
//token is verified and the secret key is also verified then server says yes thats the real user let me send him the reply back 

//Note : The user itself dont know the secret key, server puts the secret key somewhere and verify jwt
//If jwt is correct, then user is able to send a req to gpt i.e. 2+2 = ? otherwise not