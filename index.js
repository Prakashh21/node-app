const express = require("express")

const app = express()

app.get("/" , (req , res) => {
    console.log(req.url)
    res.send("hello from root")
})

app.listen(8000, () => console.log("listening on port 8000"))