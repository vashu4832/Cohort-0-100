const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/health-checkup", (req, res) => {
    //Do health checkup
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "ashutosh" || password != "pass"){
        res.status(403).json({
            msg: "User not exists"
        })
        return;
    }

    if(kidneyId != 1 && kidneyId !=2){
        res.status(401).json({
            msg: "Invalid Input"
        })
        return;
    }

    res.send("Your heart is healthy");
});

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`);
})