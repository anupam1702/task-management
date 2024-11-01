const express=require("express");
const homeRoute=require("./router/home");
const loginRoute=require("./router/login");
const resgisterRoute=require("./router/register")
const dotenv=require("dotenv")
const mongoose=require("mongoose");
const cors=require("cors")
const tryRoute=require("./router/Try")


const app=express();    

app.use(cors());

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
app.use("/try",tryRoute)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} `);
})