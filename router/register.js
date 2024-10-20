const express=require("express");
const User =require("../models/RegisterSchema")
const bcrypt=require("bcrypt");

const router=express.Router();

router.post("/", async(req,res)=>{
    const {email,username,password}=req.body;


    try{
        const userExist=await User.findOne({email:email});
        if(userExist){
          return res.status(422).json({error:"email already exists"})
         }

         const hashedPassword=await bcrypt.hash(password,10);

         const user=new User({
            email,
            username,
            password:hashedPassword
         })
         await user.save();
         return res.status(201).json({message:"user register successfully"})


    }catch(err){
        console.error(`Error during registration: ${err}`);
        return res.status(500).json({ error: `Failed to register: ${err}` });
    }

    // User.findOne({email:email}).then((userExist)=>{
    //     if(userExist){
    //         return res.status(422).json({error:"email already exists"})
    //     }
    //     const hashedPassword=await

    //     const user=new User({email,username,password});
    //     user.save().then(()=>{
    //         return res.status(201).json({message:"user register successfully"})
    //     }).catch((err)=>{
    //        return  res.status(500).json({error:`failed to register ${err}`})
    //     })
    // }).catch((err)=>console.log(`error in findOne ${err}`)
    // )
       

})

module.exports=router;