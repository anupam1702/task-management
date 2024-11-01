const router=require("express").Router();
const authen=require("../middleware/auth")

router.get("/",authen,(req,res)=>{
    res.status(201).json({
        message:"shi h"
    })
})

module.exports=router;