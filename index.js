const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// function userMiddleware(req, res, next) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if(username != "ashutosh" || password != "pass"){
//         res.status(403).json({
//             msg: "Incorrect inputs"
//         })
//     } else {
//         next();
//     }
// }

// function kidneyMiddleware(req, res, next){
//     const kidneyId = req.query.kidneyId;
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(403).json({
//             msg: "Incorrect inputs"
//         })
//     } else {
//         next();
//     }
// }

// let numberOfRequest = 0;
// function calculateRequest(req, res, next){
//     numberOfRequest++;
//     console.log(numberOfRequest);
//     next();
// }

// app.get("/health-checkup", userMiddleware, kidneyMiddleware, calculateRequest, (req, res) => {
//     //Do health checkup

//     res.send("Your heart is healthy");
// });



app.post("/kidney-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send(`You have ${kidneyLength} kidneys`);
})

// Global Catches
app.use(function (err, req, res, next) {
    res.json({
        msg: "Sorry... something is up with our server."
    })
})

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`);
})