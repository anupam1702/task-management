const jwt=require("jsonwebtoken");


const authen=(req,res,next)=>{
    const auth=req.headers['authorization'];
    if(!auth){
        return res.status(401).json({message:"jwt token required"})
    }

    try {

        const decoded=jwt.verify(auth,"anpam");
        req.user=decoded;
        next();

        
    } catch (error) {
        res.status(401).json({message:"Catch:jwt token requtrier"})
    }
}
module.exports=authen