const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course, User } = require("../db/index");
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");


router.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username,
        password,
    })

    res.json({
        msg: "Admin created successfully"
    })
})

router.post("/signin", async (req, res) => {
    // Implement admin signup llogic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token,
        })
    } else {
        res.status(411).json({
            msg: "Incorrect email and password "
        })
    }
})

router.post("/courses", adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,   //title: title    => Both can works if key and value pair are the sam ethen we can write like that
        description,
        imageLink,
        price
    })
    res.json({
        msg: "Course created siccessfully!!", courseId: newCourse._id
    })

})

module.exports = router