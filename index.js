const express = require("express")
const fs = require("fs")
const app = express()
const mongoose = require("mongoose")
// const users = require("./Database/MOCK_DATA.json")


// app.use((req , res) =>{
//     console.log("request received on ---->",req.url)
//     next()
// })

//  establishing connection with mongoDB

mongoose.connect('mongodb://127.0.0.1:27017/node-app')
.then(() => console.log("mongoDb connection established"))
.catch((err) => console.log("Mongo Error", err ));


// schema



app.use(express.urlencoded({extended:false}))

app.use((req , res , next) => {
    console.log("request recieved on the route --> ", req.url)
    fs.appendFile("log.txt" , `\n time: ${Date.now()} , path: ${req.url}`, (data , err) => {
        next()
    })
})




app.listen(8000, () => console.log("listening on port 8000"))