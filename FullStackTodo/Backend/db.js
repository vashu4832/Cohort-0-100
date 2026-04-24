const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/todoDb")
    .then((res) => {
        console.log("Connected to db")
    })
    .catch((err) => {
        console.log(err);
    })

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {Todo}