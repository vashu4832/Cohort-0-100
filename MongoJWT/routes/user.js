const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {Course, User} = require("../db/index")
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })

    res.json({
        msg: "User created successfully!!"
    })

})

router.post("/signin", async (req, res) => {
    // Implement user signin logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user){
        const token = jwt.sign({
            username
        },JWT_SECRET)
        res.json({
            token
        })
    } else {
        res.status(411).json({
            msg: "Incorrect username and password"
        })
    }
})

router.get("/courses", async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        Courses: response
    })
})

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Implement course purchased logic
    const username = req.headers.username;
    const courseId = req.params.courseId;
    try{
        await User.updateOne({
            username,
        },{
            "$push": {
                purchasedCourses: courseId
            }
        })
    } catch (e) {
        console.log(e)
    }

    res.json({
        msg: "Purchased completely!!"
    })
})

router.get("/purchasedCourses", userMiddleware, async(req, res) => {
    // Implement fetching purchased course logic
    const user = await User.findOne({
        username: req.headers.username
    })

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.json({
        courses: courses
    })
})

module.exports = router;