const express= require('express')
const router= express.Router()
const jwt = require('jsonwebtoken')
const jwtkey=require('../jwtkey')

router.get('/',async(req,res)=>{
    try{
        console.log(7)
       let response= await verifyToken(req,res)
       res.send(response)
    }catch (e){
        console.log(e)
        res.status(404).send('UNAUTHORIZED')
    }
})

var verifyToken=async(req,res)=>{
        const authorization = await req.headers['authorization'];
        const userToken = await authorization.split(' ')[1];
         jwt.verify(userToken,jwtkey)
         return true
    }



module.exports=router

