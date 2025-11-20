const express = require("express")
const app = express()
const mongoose = require("mongoose")
mongoose.connect("db url")

app.use(express.json())

const User = mongoose.model('Users', 
{
 name : String,
 email : String,
 password : String
})

app.post('/signup', async function (req, res){
  let username = req.body.username
  let password = req.body.password
  let name = req.body.name

  const existingUser = await User.findOne({email : username})

  if(existingUser){
    return res.status(400).send("Username already exist")
  }

  const data = new User({
    name : name,
    email : username,
    password : password
  })

  await data.save() //return promise, if we don't await flow will go to below line

  res.json({
    msg : "User created successfully"
  })
  
})
app.listen(3000)

//Created a mongoose model whose collection name is "users", data should be stored in users 
// is of its defined format that's what moongoose model means
//making an post req receiving data, checking that user exist or not
//if not exist then its new user if the format of the data is correct then stored it in users collection
//In code user is pointing to users collection
//the data we want to store in db of new user should be done only if we did save that data
//Everything pin point, user created successfully


