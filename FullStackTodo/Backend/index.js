// Write basic express boilerplate code with express.json middleware
const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input"
        })
        return;
    }
    // put it in mongoDb
    const todo = await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({
        msg: "Todo created",
        todo
    })
})

app.get("/todo", async (req, res) => {
    const result = await Todo.find({})
    res.json({
        result,
    })
})

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You send the wrong id."
        })
        return;
    }

    await Todo.update({
        _id: req.body.id,
    }, {
        completed: true   
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000, () => {
    console.log("Server is started");
})
