const express=require('express')
const router= express.Router()

router.post('/',async(req,res)=>{
    const {username,password}= await req.body
    console.log(username,password)
})



module.exports=router