const express = require("express");
const app = express();

function isEnoughAgeMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.status(411).json({
            msg: "User not eligible yet for ride"
        })
    }
}

app.get("/ride1", isEnoughAgeMiddleware, (req, res) => {
    res.json({
        msg: "You have successfully riden the ride1"
    })
})

app.get("/ride2", isEnoughAgeMiddleware, (req, res) => {
    res.json({
        msg: "You have successfully riden the ride2"
    })
})


// Count number of incoming request to the server
let reqCount = 0;
app.use(function (req, res, next) {
    reqCount++;
    next();
    console.log(reqCount);
})


// Create rate limiter middleware for user not send more than 5 req per minute
let numberOfRequestForUser = {};
setInterval(() => {
    numberOfRequestForUser = {};
}, 1000);

app.use(function (req, res, next) {
    const userId = req.headers["user-id"];
    if(numberOfRequestForUser[userId]){
        numberOfRequestForUser[userId] = numberOfRequestForUser[userId]+1;
        if(numberOfRequestForUser[userId] > 5){
            res.status(404).send("No entry")
        } else {
            next();
        }
    } else {
        numberOfRequestForUser[userId] = 1;
        next();
    }
})


// Create an error middleware if an error occurs it shows an status code instead of internal details of error also count the number of error in any route
let errorCount = 0;
app.use(function(err, req, res, next){
    res.status(404).send({});
    errorCount++;
})

app.listen(3000);