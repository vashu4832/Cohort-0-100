const express = require("express");
const app = express();

function isEnoughAge(age){
    if(age>=14){
        return true;
    } else {
        return false;
    }
}

app.get("/ride1", (req, res) => {
    if(isEnoughAge(req.query.age)){
        res.json({
            msg: "You have successfully riden the ride1"
        })
    } else {
        res.status(503).json({
            msg: "Sorry you are not eligible"
        })
    }
})

app.listen(3000);