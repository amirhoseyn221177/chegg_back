const bcrypt= require('bcrypt')
const pool=require('../db/Pool')

const SALT= 8
const verifyuser = async (username, password) => {
  
    // get hashed password from DB
    const queryResult = await pool.query(`
            SELECT *
            FROM visitor
            WHERE username = '${username}'
            `)
    if (queryResult.rows.length === 0) throw new Error('No such a username')

    // extract hash from the query result
    const passwordHash = await queryResult.rows[0].passwordhash.toString()
    //compare hash and plaintext and return the result
    if (!await bcrypt.compare(password, passwordHash)){
        throw new Error('PASS');
    }
}

var addUser=async(username,password,ip)=>{
    let hashypassword= await bcrypt.hash(password,SALT)
       await pool.query(
            `insert into visitor values('${username}','${hashypassword}','${ip}')  `
        )
    
    
}



module.exports={
    verifyuser,
    addUser
}