const {Pool} = require('pg')


const pool= new Pool({
    host:'drona.db.elephantsql.com',
    user:'ljgwepby',
    database:'ljgwepby',
    password:'dJO6_o0UlL_oc7u4qIyannGz4pcJrEGW',
    port:5432
})


module.exports=pool
