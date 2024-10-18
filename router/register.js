const express=require("express");
const User =require("../models/RegisterSchema")

const router=express.Router();

router.post("/",(req,res)=>{
    const {email,username,password}=req.body;

    User.findOne({email:email}).then((userExist)=>{
        if(userExist){
            res.status(422).json({error:"email already exists"})
        }
        const user=new User({email,username,password});
        user.save().then(()=>{
            res.status(201).json({message:"user register successfully"})
        }).catch((err)=>{
            res.status(500).json({error:`failed to register ${err}`})
        })
    }).catch((err)=>console.log(`error in findOne ${err}`)
    )
       

})

module.exports=router;