const db = require('../Connection/db_config.js')
const hashedPassword =require('../middleware/hashPassword.js')
const userValidation = require('../validation/userValidation.js')


async function createUser(reqBody){
    try {       
      const pass  =   await hashedPassword.hashPassword(reqBody.password)
      const  response =  await new Promise((resolve, reject) => {
            const myQuery = `insert into Users (userId, userName ,role, email, password ) values
            (?, ?, ?, ?, ?)`
            db.query(myQuery,[reqBody.userId, reqBody.userName,reqBody.role, reqBody.email , pass],(err,data)=>{
                if(err){
                    reject(err);
                }
                else{
                    // validation (data)
                  resolve(data)    
                }
            })
        })
    return response

    } catch (err) {
     
     throw err ;
    }
 }

 async function userLogin(email,password){
    try {
       const userMail = await userValidation.mailValidation(email)
    //    console.log('<><>><><>',userMail);
       if(!userMail){
         throw Error('user not found')
       }
    // console.log("pwd",password);
    console.log("====>",userMail.password);
    
       const validPassword = await userValidation.comparePasswords(password,userMail.password)
       console.log("rettttt",validPassword);
    //    const token = jwt.sign({ userName: user.userName }, process.env.TOKEN_SEC);
    //    res.header('auth-token', token).send(token)
       if(!validPassword){
        throw Error ('invalid password') ;
       }
       return 'logged in'
        
    } catch (err) {
        throw err ;
    }
 }


module.exports= {createUser,userLogin}
