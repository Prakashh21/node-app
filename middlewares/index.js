const fs = require("fs")

function logReqRes(fileName){
return (req , res , next) => {
    console.log("request recieved on the route --> ", req.url)
        fs.appendFile(fileName , `\n time: ${Date.now()} , path: ${req.url}`, (data , err) => {
            next()
        })

    }
}

module.exports = {
    logReqRes,
};