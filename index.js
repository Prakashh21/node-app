const express = require("express")

const app = express()

 const users = require("./Database/MOCK_DATA.json")


// app.use((req , res) =>{
//     console.log("request received on ---->",req.url)
//     next()
// })


app.get("/" , (req , res) => {
    console.log("request received on the route --> ",req.url)


    res.send("hello from root")
})

app.get("/users", (req , res) => {
    // const HTML = users.map(data => {
    //     return `
    //             <div>
    //                 <ol>
    //                        <li> ${data.id} </li>
    //                        <li> ${data.first_name} </li>
    //                 </ol>
    //             </div>

    //             `
    // })
    // this is wrong because it returns the entire array , and it was not understood by the broweser

    const HTML = `<div> ${users.map( (data) => `<ul> <li> ${data.first_name} ${data.last_name}</li> </ul>`).join('')}</div>`
    return res.send(HTML)
})

app.get("/api/users", (req , res) =>{
    return res.json(users)
})

app.get("/api/users/:user_id",  (req, res) => {
    const user_id = Number(req.params.user_id)
    const user = users.find(data => data.id === user_id)

    res.send(user)
})

app.get("/user/:id", (req, res) => {
    const id = Number(req.params.id)
    const user = users.find(data => data.id === id)

    async function getHtml(user){
        const HTML = `
        <div>
          <li>  ${user.first_name} ${user.last_name} </li>
          <li> ${user.ip_address} </li>
        </div>
    `

    return HTML
    }

    const result = getHtml(user).then(data => {
        res.send(data)
    })

    // res.send(user)
})

app.listen(8000, () => console.log("listening on port 8000"))