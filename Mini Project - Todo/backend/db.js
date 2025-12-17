import "dotenv/config"

const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE_URL)

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}