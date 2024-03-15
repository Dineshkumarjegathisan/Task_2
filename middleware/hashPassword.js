const bcrypt = require('bcrypt');

async function hashPassword (password){
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
       return hashedPassword ;
    } catch (err) {
        throw err ;
    } 
}



// const hashedPassword = (password, salt) => {
//     return new Promise((resolve, reject) => {
//         bcrpyt.hash(password, salt, (err, hash) => {
//             if (err) reject();
//             resolve(hash);
//         });
//     });
// };


// async function comparePassword(password,hashedPassword){
//         try {

//          const pwd = await bcrypt.compare(password,hashPassword);
//          return pwd ;
            
//         } catch (err) {
//             throw err ;
//         }
// }

module.exports = {hashPassword}