const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/newDb")
    .then((res) => {
        console.log("Connected to DB")
    })
    .catch((err) => {
        console.log(err)
    })

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    purchasedCourse: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})
const User = mongoose.model("User", UserSchema)


const CourseSchema = new mongoose.Schema({
    title: String,
    price: Number
})

const Course = mongoose.model("Course", CourseSchema);