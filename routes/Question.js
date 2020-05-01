const express=require('express')
const router=express.Router()
const gettingSoultuions= require('../Chegg')

let display
let soal;
router.post('/',async(req,res)=>{
    const question = await req.body.question
    let answers= await gettingSoultuions(question)
    res.send(answers)
})



router.get('/',(req,res)=>{
    res.send(display)
})


module.exports=router
