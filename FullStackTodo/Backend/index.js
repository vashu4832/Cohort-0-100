// Write basic express boilerplate code with express.json middleware
const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");

app.use(express.json());

app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input"
        })
        return;
    }

    // put it in mongoDb

})

app.get("/todos", (req, res) => {

})

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload );
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You send the wrong id."
        })
        return;  
    }
})

app.listen(3000, () => {
    console.log("Server is started");
})
