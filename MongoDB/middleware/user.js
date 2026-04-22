const {User} = require("../db");

function userMiddleware(req, res, next){
    // Implement user auth logic 
    // You need to check the headers and validate the admin fro the admin Db.

    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({
        username: username,
        password: password,
    })
    .then((value) => {
        if(value){
            next();
        } else {
            res.status(403).json({
                msg: "User doesn't exists"
            })
        }
    })
}

module.exports = userMiddleware;