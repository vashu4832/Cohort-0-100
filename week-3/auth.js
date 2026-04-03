const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

app.use(express.json());
const ALL_USERS = [
    {
        username: "vashu4832@gmail.com",
        password: "ashu2003",
        name: "Ashutosh Vishwakarma"
    },
    {
        username: "navin23@gmail.com",
        password: "navin2003",
        name: "Navinn Sharma"
    },
    {
        username: "alok420@gmail.com",
        password: "alok2003",
        name: "Alok Garadiya"
    },
    {
        username: "ayush@gmail.com",
        password: "ayush2003",
        name: "Ayush Mishra"
    }
];

function userExists(username, password){
    // Write logic to return true or false if this user exists
    // in ALL_USER array
    let userExists = false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
        } 
    } 
    return userExists;
}

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User does not exists in our memory db"
        })
    }

    let token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token
    })
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try{
            const decode = jwt.verify(token, jwtPassword);
            const username = decode.username;
            // return a list of user other than this username
            res.json({
                users: ALL_USERS.filter(function(value) {
                    if(value.username == username){
                        return false
                    } else {
                        return true
                    }
                })
            })
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token"
        })
    }
});

app.listen(3000);