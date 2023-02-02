const express = require("express")

const router = express.Router()



router.get("/" , (req , res) => {
    // console.log("request received on the route --> ",req.url)
    res.send("hello from root")
})

router.get("/users", async (req , res) => {
    const allDbUsers = await User.find({})
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



    const HTML = `<div> ${allDbUsers.map( (data) => `<ul> <li> ${data.firstName} ${data.lastName}</li> </ul>`).join('')}</div>`
    return res.send(HTML)
})

router.get("/api/users", async (req , res) =>{
    const allDbUsers = await User.find({})
    return res.status(200).json(allDbUsers)
})


router.route("/api/users/:id")
.get(async (req , res) =>{
    const user = await User.findById(req.params.id)
    // const user_id = Number(req.params.id)
    // const user = users.find(data => data.id === user_id)
    if(!user) return res.status(404).json({error: "user not found"});
    res.send(user)
})
.patch(async (req , res) => {
    const user = await User.findById(req.params.id)
    console.log("user object from patch request -->",user )
    // if request is according to the schema
    return res.send({status: "pending"})
})
.delete(async (req , res) => {
    await User.findByIdAndDelete(req.params.id)
    return res.status(200).send({status: "success"})
})

router.post("/api/users", async(req , res) => {
    const data = req.body
        console.log("data body --> ",data)

    if(
        !data ||
        !data.first_name ||
        !data.last_name ||
        !data.email ||
        !data.gender ||
        !data.ip_address
    ){
        return res.status(400).json({message: "All fields are required.."})
    }


    const result = await User.create({
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        gender: data.gender,
        ip_address: data.ip_address

    });

    console.log("loggin result --> ", result)

    return res.status(201).json({message: "success"})


    //  In the below code we were writing  the created user object to MOCK_DATA.json
    //  now since we are using a database we will add the user object in the database

    // users.push({...data , id: users.length + 1});
    // fs.writeFile("./Database/MOCK_DATA.json",  JSON.stringify(users) , (data , error) => {
    //     res.send({status: "success" , id: users.length})
    // })


})

router.get("/user/:id", (req, res) => {
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



router.patch("/api/users/:id",(req , res) => {
    return res.send({status: pending})
})

router.delete("/api/users/:id",(req , res) => {
    return res.send({status: pending})
})


module.exports = router