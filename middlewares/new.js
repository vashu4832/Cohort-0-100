const express = require("express");
const app = express();
const PORT = 3000;

app.get("/health-checkup", (req,res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "Ashutosh" && password != "pass"){
        res.status(403).json({
            msg: "User doesn't exists"
        })
        return;
    }

    if(kidneyId != 1 && kidneyId !=2){
        res.status(411).json({
            msg: "Wrong input"
        });
        return;
    }

    res.send("Your heart is healthy");

})

app.listen(PORT, () => {
    console.log(`Server is started onn port ${PORT}`);
})