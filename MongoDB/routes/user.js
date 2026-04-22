const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const router = Router();
const { User, Course } = require("../db");

router.post("/signup", async (req, res) => {
    // Implement user signup logic 
    const username = req.body.username;
    const password = req.body.password;

    const result = await User.create({
        username,
        password
    })

    res.json({
        msg: "User Created successfully!!"
    })
})

router.get("/courses", async (req, res) => {
    // Implement listing all course logic 
    // Implement fetching all course logic
    const response = await Course.find({});

    res.json({
        Courses: response
    })
})

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    try {
        await User.updateOne({
            username: username,
        }, {
            "$push": {
                purchasedCourses: courseId
            }
        })
    } catch(e) {
        console.log(e)
    };

    res.json({
        msg: "Purchased complete!"
    })
})

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Implemet fetching purchased course logic
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