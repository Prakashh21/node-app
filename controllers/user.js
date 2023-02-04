const User = require('../models/user')

async function handleGetAllUsers(req , res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers)
}

async function getUsersById(req , res){
    const user = await User.findById(req.params.id)
    if(!user) {
            return res.status(404).json({error: "user not found"});
       }

    return res.send(user)
}

async function patchUsersById(req, res){
    const user = await User.findById(req.params.id)
    return res.status(200).send({status:"success"})
}

async function deleteUsersById(req , res){
    await User.findByIdAndDelete(req.params.id)
    return res.status(200).send({status:"success"})
}

async function handleCreateNewUser(req , res){

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

    return res.status(201).json({message: "success", id: result._id})

}

module.exports = {
    handleGetAllUsers,
    getUsersById,
    patchUsersById,
    deleteUsersById,
    handleCreateNewUser,
}