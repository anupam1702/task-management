const express=require("express");
const homeRoute=require("./router/home");
const loginRoute=require("./router/login");
const resgisterRoute=require("./router/register")
const dotenv=require("dotenv")
const mongoose=require("mongoose");


const app=express();

app.use(express.json()); 


app.use(express.urlencoded({ extended: true }));


const PORT=process.env.PORT || 8000;

dotenv.config();

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("connection is sucessfull");
    
}).catch((err)=>console.log(`Error : ${err}`));




app.use("/",homeRoute)
app.use("/login",loginRoute)
app.use("/register",resgisterRoute)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} `);
})