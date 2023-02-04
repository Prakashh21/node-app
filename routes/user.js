const express = require("express")

const router = express.Router()
const {handleGetAllUsers, getUsersById , patchUsersById , deleteUsersById, handleCreateNewUser} = require("../controllers/user")


router.get("/", handleGetAllUsers)


router
.route("/:id")

.get(getUsersById)
.patch(patchUsersById)
.delete(deleteUsersById)

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser)


module.exports = router


    //  In the below code we were writing  the created user object to MOCK_DATA.json
    //  now since we are using a database we will add the user object in the database

    // users.push({...data , id: users.length + 1});
    // fs.writeFile("./Database/MOCK_DATA.json",  JSON.stringify(users) , (data , error) => {
    //     res.send({status: "success" , id: users.length})
    // })





    // router.get("/" , (req , res) => {
        //     // console.log("request received on the route --> ",req.url)
        //     res.send("hello from root")
        // })

        // /users route disbled temporarily
        // router.get("/users", async (req , res) => {
            //     const allDbUsers = await User.find({})
            //     // const HTML = users.map(data => {
                //     //     return `
                //     //             <div>
                //     //                 <ol>
                //     //                        <li> ${data.id} </li>
                //     //                        <li> ${data.first_name} </li>
                //     //                 </ol>
                //     //             </div>

                //     //             `
                //     // })
                //     // this is wrong because it returns the entire array , and it was not understood by the broweser



//     const HTML = `<div> ${allDbUsers.map( (data) => `<ul> <li> ${data.firstName} ${data.lastName}</li> </ul>`).join('')}</div>`
//     return res.send(HTML)
// })

                /**

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



            router.patch("/:id",(req , res) => {
                return res.send({status: pending})
            })

            router.delete("/:id",(req , res) => {
                return res.send({status: pending})
            })


            */