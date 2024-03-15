const UserService = require('../service/UserService.js')
const  uuidv4  = require('uuid')
// const hashPassword = require('../middleware/hashPassword.js')
// const UserService = require('../service/UserService.js')

async function createUser(req,res){
   try {

    reqBody={
        userId :uuidv4.v4(),
        userName :req.body.userName,
        role:req.body.role,
        email:req.body.email ,
        password:req.body.password
    }
    const result = await UserService.createUser(reqBody);
    res.status(201)
    .json({
        result 
    })

   } catch (err) {
    
    throw err ;
   }
}


async function userLogin(req,res){
    try {
        
        // reqBody={
            
        //     // userName:req.body.userName,
        //     email:req.body.email ,
        //     password:req.body.password
            
        // }
        const {email,password} = req.body ;
        const result = await UserService.userLogin(email,password)
        res.status(201)
        .json({
            result 
        })

    } catch (err) {
        throw err ;
    }
}

module.exports= {createUser,userLogin}