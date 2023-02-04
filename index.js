const express = require("express")
const fs = require("fs")
const app = express()
const mongoose = require("mongoose")
const { connectMongoDb } = require("./connection")
const {logReqRes} = require("./middlewares")
const userRouter = require("./routes/user")

// Connecting to mongoDB

connectMongoDb('mongodb://127.0.0.1:27017/node-app').then(() => console.log("mongoDb connected !!"))

// Middlewares

app.use(express.urlencoded({extended:false}))

app.use(logReqRes('log.txt'))

// Routes

app.use("/api/user", userRouter)


app.listen(8000, () => console.log("listening on port 8000"))


