const mongoose =require("mongoose");

const loginSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("Userlogin",loginSchema);