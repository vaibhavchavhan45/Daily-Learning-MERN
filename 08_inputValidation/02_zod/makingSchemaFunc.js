//Learning to make schema for input validation
const z = require("zod")

function validate(obj){
  const schema = z.object({
    email : z.string().email(),
    password : z.string().min(8)
  })
  const response = schema.safeParse(obj)
  console.log(response)
  
}

validate({
  email : "vc@gmail.com",
  password : "1234568"
})