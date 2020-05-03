const express=require('express')
const router=express.Router()
const gettingSoultuions= require('../Chegg')

router.post('/chegg',async(req,res)=>{
    try{
        // throw new Error()
        console.log(27)
        const question = await req.body.question
        let answers= await gettingSoultuions(question)
        res.send(answers)
    }catch(e){
        res.status(303).send('Unable to compelete ')
    }

})





module.exports= router

