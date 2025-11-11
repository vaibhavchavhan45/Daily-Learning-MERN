const express = require("express")
const zod = require("zod")
const app = express()

app.use(express.json())
const schema = zod.array(zod.number())

app.post('/health-checkup', function (req, res){
  const kidneys = req.body.kidneys
  const response = schema.safeParse(kidneys)
  res.send({response})
})

app.listen(3000)


/*
Creating a zod schema for real-world websites which takes email, password, country, name

 {
    email : string => email
    password : atleast 8 letters
    country : India , US
    name : XYZ
  }

//Creating schema :

    const schema = zod.object({
        email : zod.string().email()
        password : zod.string().min(8)
        country : zod.literal("IN").or(zod.literal("US"))
        name : zod.string()
    })

 */
    

//Better code for error handling

// const express = require("express")
// const zod = require("zod")
// const app = express()

// app.use(express.json())
// const schema = zod.array(zod.number())

// app.post('/health-checkup', function (req, res){
//   const kidneys = req.body.kidneys
//   const response = schema.safeParse(kidneys)
//   if(!response.success){
//     res.status(411).json({
//       msg : "Invalid input"
//     })
//   }
//   else{
//      res.send({response})
//   }
// })

// app.listen(3000)
