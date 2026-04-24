// Write basic express boilerplate code with express.json middleware
const express = require("express");
const app = express();
const {createTodo, updateTodo} = require("./types"); 

app.use(express.json());

app.post("/todo", (req, res) => {
     
})

app.get("/todos", (req,res) => {

})

app.put("/completed", (req, res) => {

})

app.listen(3000, () => {
    console.log("Server is started");
})
