const express=require("express");
const mongoose=require("mongoose");
const Users=require("../models/RegisterSchema")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")



const router=express.Router();

router.post("/", async (req,res)=>{
    const {username,password}=req.body;
    

    if(!username || !password) return res.status(400).json({error:"Please provide valid username or password"});


    try {

        const user= await Users.findOne({username:username});
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        console.log("yo");
        

        const isMatch= await bcrypt.compare(password,user.password || '');
       
        
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const jwtToken=jwt.sign({username:user.username,_id:user._id},"anpam",{expiresIn:'1h'})

        return res.status(201).json({ message: "Login successfully" ,
            success:true,
            jwtToken,
            username:user.username
        });

        
    } catch (err) {
        console.error("Error in login:", err);
        return res.status(500).json({ error: "Server error" });
    }

    

    // Users.findOne({username:username}).then((user)=>{
       
    //     if(!user) return res.status(404).json({error:"User not found"});
    //     if(String(password)!==user.password) return  res.status(401).json({error:"Invalid credentials"});

    //     return res.status(201).json({message:"Login succesfully"});
    // }).catch((err)=>{
    //     console.log("error in login ", err);
    //     return res.status(500).json({error:"Server error"})
        
    // })


    
})

module.exports=router