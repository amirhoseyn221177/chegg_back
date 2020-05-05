const crypto= require('crypto')

let jwtkey=crypto.randomBytes(64).toString('hex')



module.exports=jwtkey