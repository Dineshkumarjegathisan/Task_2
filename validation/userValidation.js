const db = require('../Connection/db_config.js');
const bcrypt = require('bcrypt');
const hashedPassword = require('../middleware/hashPassword.js')

async function mailValidation(email) {
    try {
        const user = await new Promise((resolve, reject) => {
            const myQuery = `select  email from Users where  email = '${email}'`;
            db.query(myQuery, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    if(data.length==0)
                    {
                        resolve('provide correct emailid');
                    }
                    else{
                        console.log('???????',data[0]);
                        resolve(data[0])
                    }  
                }
            });
        });
        return user;
    } catch (err) {
        console.error('Error in validateUser:', err);
        throw err;
    }
}


// async function validPass(password){
//     try {

//         const pass =await new Promise((resolve, reject) => {
//         const myQuery = `select * from Users where password = '${password}'`;
//         db.query(myQuery,(err,data)=>{
//             if(err)
//             {
//                 reject(err);   
//             }
//             else{
//                 resolve(data[0])
//             }
//         })
//     })

//   const b = bcrypt.compare(password,pass)
//   console.log("OP---",b);
//   return b;
        
//     } catch (err) {
//         throw err ;
//     }

// }
async function comparePasswords(password,hashedPassword ) {
    try {

        console.log('=pass=>',password);
         console.log('has==)',hashedPassword);
       const ret = await new Promise((resolve, reject) => {
           resolve( bcrypt.compare(password,hashedPassword))
        })
        return ret ;
    } catch (err) {
        throw err ;
    }
   
}

module.exports = { mailValidation,comparePasswords}; 
