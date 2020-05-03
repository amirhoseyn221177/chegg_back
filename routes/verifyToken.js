const express= require('express')
const router= express.Router()
const jwt = require('jsonwebtoken')
const jwtkey=require('../jwtkey')

router.get('/',async(req,res)=>{
    await verifyToken(req,res)
})

var verifyToken=async(req,res)=>{
    try{
        console.log(12)
        const authorization = await req.headers['authorization'];
        const userToken = await authorization.split(' ')[1];
         jwt.verify(userToken,jwtkey)
         res.send(true)
         console.log(16)
    }catch (e){
        console.log(e)
        res.status(404).send('UNAUTHORIZED')
    }
}

module.exports=router

