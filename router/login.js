const express=require("express");
const mongoose=require("mongoose");
const Users=require("../models/RegisterSchema")



const router=express.Router();

router.post("/",(req,res)=>{
    const {username,password}=req.body;
    

    if(!username || !password) return res.status(400).json({error:"Please provide valid username or password"});

    

    Users.findOne({username:username}).then((user)=>{
        // console.log(user)
        if(!user) return res.status(404).json({error:"User not found"});
        console.log(typeof(password),typeof(user.password))
        if(String(password)!==user.password) return  res.status(401).json({error:"Invalid credentials"});

        return res.status(201).json({message:"Login succesfully"});
    }).catch((err)=>{
        console.log("error in login ", err);
        return res.status(500).json({error:"Server error"})
        
    })


    
})

module.exports=router