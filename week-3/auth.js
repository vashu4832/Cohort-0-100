const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test")
    .then((res) => {
        console.log("Connected to DB.")
    })
    .catch((err) => {
        console.log(err);
    })

const User = mongoose.model("User",{
    email: String,
    password: String,
    name: String
});

app.post("/signin", async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});

    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const newUser = new User({
        email: username,
        password: password,
        name: name
    })

    const response = await newUser.save();

    res.json({
        msg: "User created successfully"
    })

})

app.listen(3000);