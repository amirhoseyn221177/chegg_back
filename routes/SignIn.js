const express=require('express')
const {verifyuser,addUser}= require('../db/Authentication')
const jwtkey=require('../jwtkey')
const jwt=require('jsonwebtoken')
const router= express.Router()

router.post('/login',async(req,res)=>{
    try{
        console.log(req.body)
        const {username,password}= await req.body
        await verifyuser(username,password)
        let token =  jwt.sign({username},jwtkey,{
            algorithm: 'HS256',
            expiresIn:7200
        })
        
        res.json(token)
    }catch(e){
        res.status(404).send(' your username is taken or password is wrong')

    }
 

})

router.post('/signup',async(req,res)=>{
    try{
        const {username,password,ip}= await req.body
        await addUser(username,password,ip)    
        let token =  jwt.sign({username},jwtkey,{
            algorithm: 'HS256',
            expiresIn:7200
        })
        res.json(token)
    }catch(e){
        console.log(e)
        res.status(303).send('user already exists')

    }


})


module.exports=router