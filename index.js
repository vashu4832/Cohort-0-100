const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "ashutosh" || password != "pass"){
        res.status(403).json({
            msg: "Incorrect inputs"
        })
    } else {
        next();
    }
}

function kidneyMiddleware(req, res, next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg: "Incorrect inputs"
        })
    } else {
        next();
    }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    //Do health checkup

    res.send("Your heart is healthy");
});

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`);
})