const express=require("express");
const router=express.Router();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
require("../db/conn");
const User=require("../model/userSchema");


router.get("/",(req,res)=>{
    res.send("Hello bhai from auth.js");
})

// router.post("/register",(req,res)=>{
//     console.log(req.body);
//     const {name,email,phone,work,password,cpassword}=req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         res.status(422).json({
//             error:"Please fill the details properly..."
//         })
//     }

//     User.findOne({email: email}).then((userExist)=>{
//         if(userExist){
//             res.status(422).json({
//                 error:"Failed to registered"
//             })
//         }
//         const user=new User({name,email,phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({
//                 message: "User registered successfully"
//             })
//         }).catch(err=>{
//             res.status(500).json({
//                 error:"Failed to registerd the user"
//             })
//         })
//     }).catch(err=>{
//         console.log(error);
//     });
// });


// Async-Await
router.post("/register",async (req,res)=>{
    console.log(req.body);
    const {name,email,contact,password,cpassword}=req.body;
    if(!name || !email || !contact || !password || !cpassword){
        res.status(422).json({
            error:"Please fill the details properly..."
        })
    }
    try{
        const userExist=await User.findOne({email: email});
        if(userExist){
            res.status(422).json({
                error:"Failed to registered"
            })
        }else if(password!=cpassword){
            res.status(422).json({
                error:"Password are not matching"
            })
        }else{
            console.log("hello anuj");
            const user=new User({name,email,contact,password,cpassword});

            const userRegister=await user.save();
            if(userRegister){
                res.status(201).json({
                    message: "User registered successfully"
                })
            }else{
                res.status(500).json({
                    error:"Failed to registerd the user"
                })
            }
        } 

    }catch(err){
        console.log(err);
    }
   
});






router.post("/signin",async (req,res)=>{
     try{
           let token;
           const {email,password}=req.body;
           if(!email || !password){
             return res.status(400).json({
                error:"Please fill the full details"
             })
           }

           const userLogin = await User.findOne({email: email});
           if(userLogin){
            const isMatch= await bcrypt.compare(password,userLogin.password);
             token=await userLogin.generateAuthToken();


             res.cookie("jwtoken",token,{
                expiers:new Date(Date.now()+25892000000),
                httpOnly:true
             })
            if(!isMatch){
                 return res.status(400).json({
                     message:"Enter the valid credentials"
                 })
            }else{
             return res.json({
                    message: "User Signin Successfully"
             })
            }

           }else{
              return res.status(400).json({
                message:"Enter the valid credentials"
              })
           }
         

     }catch(err){
        console.log(err);
     }
})

module.exports=router;