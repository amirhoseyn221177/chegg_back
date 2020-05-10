const crypto= require('crypto')

let jwtkey=crypto.randomBytes(64).toString('hex')
console.log('cr')



module.exports=jwtkey