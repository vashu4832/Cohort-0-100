// const express = require("express");
// const app = express();
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const jwtPassword = "123456";

// app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/test")
//     .then((res) => {
//         console.log("Connected to DB.")
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// const User = mongoose.model("User",{
//     email: String,
//     password: String,
//     name: String
// });

// app.post("/signin", async(req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     const name = req.body.name;

//     const existingUser = await User.findOne({email: username});

//     if(existingUser){
//         return res.status(400).send("Username already exists");
//     }

//     const newUser = new User({
//         email: username,
//         password: password,
//         name: name
//     })

//     const response = await newUser.save();

//     res.json({
//         msg: "User created successfully"
//     })

// })

// app.listen(3000);

// const jwt = require("jsonwebtoken");

// // Generate a JWT
// const value = {
//     name: "Ashutosh",
//     accountNumber: 123456789
// }
// const token = jwt.sign(value, "secret"); // This token can generate using this secret, and hence this token can only be verified using this secret
// console.log(token);


// // This is how we verify the token
// const verifiedValue = jwt.verify(token, "secret");
// console.log(verifiedValue);

// Q1. Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using Zod library here.
const z = require("zod");
const jwt = require("jsonwebtoken");
const jwtSecret = "jhgfjkyfhjkiuytgbjtfcvbjghj";

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6);

function signJwt(username, password) {
    const userValue = emailSchema.safeParse(username);
    const passValue = passwordSchema.safeParse(password);
    if (!userValue.success || !passValue.success) {
        return null;
    }
    const token = jwt.sign({ username }, jwtSecret);
    return token;
}

function verifyJwt(token){
    const verified = jwt.verify(token, jwtSecret); 
    if(verified){
        return true;
    } else {
        return false;
    }
}

function decodeJwt(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    } else {
        return false;
    }
}