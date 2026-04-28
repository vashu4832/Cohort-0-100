const express = require("express");
const app = express();
const PORT = 3000;

function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfSomething(a,b, fn){
    const val1 = fn(a);
    const val2 = fn(b);

    let ans = val1+val2;
    return ans;

}

console.log(sumOfSomething(2,3,cube));

// let users = [{
//     name: 'John',
//     kidneys: [{
//         healthy: false,
//     }]
// }]

// app.use(express.json());

// app.get("/", (req, res) => {
//     const johnKidney = users[0].kidneys;
//     const numberOfKidneys = johnKidney.length;
//     let numberOfHealthyKidneys = 0;
//     for(let i=0; i<johnKidney.length;i++){
//         if(johnKidney[i].healthy){
//             numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
//         }
//     }

//     let numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

//     res.json({
//         numberOfKidneys,
//         numberOfHealthyKidneys,
//         numberOfUnHealthyKidneys
//     })
// });

// app.post("/", (req, res) => {
//     const isHealthy = req.body.isHealthy;
//     users[0].kidneys.push({
//         healthy: isHealthy 
//     })
//     res.json({
//         msg: "Done!"
//     })
// })

// app.put("/", (req, res) => {
//     for(let i=0;i<users[0].kidneys.length;i++){
//         users[0].kidneys[i].healthy = true;
//     }
//     res.json({});
// })

// app.delete("/", (req, res) => {
//     const newKidneys = [];
//     for(let i=0;i<users[0].kidneys.length;i++){
//         if(users[0].kidneys[i].healthy) {
//             newKidneys.push({
//                 healthy: true
//             })
//         }
//     }

//     users[0].kidneys = newKidneys;
//     res.json({
//         msg: "Deleted"
//     })
// });

// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// })