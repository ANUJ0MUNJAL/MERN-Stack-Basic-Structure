const express=require("express");
const app=express();

const dotenv=require('dotenv');

dotenv.config({path:'./config.env'});

const PORT=process.env.PORT;

require("./db/conn");
app.use(express.json());
app.use(require("./route/auth"));


const User=require("./model/userSchema");


const middleware=(req,res,next)=>{
   console.log("Hello middleware bhai");
   next();
}
app.get("/",(req,res)=>{
    res.send("Hello Anuj Bhai");
})

app.get("/about",middleware,(req,res)=>{
    res.send("Hello About Bhai");
})

app.get("/contact",middleware,(req,res)=>{
    res.send("Hello contact Bhai");
})

app.get("/signin",(req,res)=>{
    res.send("Hello signin Bhai");
})

app.get("/signup",(req,res)=>{
    res.send("Hello signup Bhai");
})

app.listen(PORT,()=>{
    console.log("Server is running on port ${PORT} ");
})