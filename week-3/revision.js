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

app.get("/ride1",isEnoughAgeMiddleware, (req, res) => {
    res.json({
        msg: "You have successfully riden the ride1"
    })
})

app.get("/ride2",isEnoughAgeMiddleware, (req, res) => {
    res.json({
        msg: "You have successfully riden the ride2"
    })
})

app.listen(3000);