const db = require('./Connection/db_config')
const jwt = require('jsonwebtoken')
// const comparePassword = require('/m/');


async function checkValidation(values){
    try {
        console.log('*****)',values);
        // const pwd = await 
        const valid = await new Promise((resolve, reject) => {
            const myQuery = `select  email,  password from Users where  email = '${values.email}'`
            db.query(myQuery,(err,data)=>{
                if(err)
                {
                    reject (err)
                }
                else{
                    resolve(data)
                }
            })
        })
        console.log("4$$$$$$$$4" , valid);
        return valid ;
        
    } catch (err) {
        throw err ;
    }
}

module.exports = checkValidation ;