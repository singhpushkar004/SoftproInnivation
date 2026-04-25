const express = require('express')
const User = require('../models/User')
const router = express.Router();
const jwt = require('jsonwebtoken')
router.post('/register',async(req,res)=>{
    const {name,email,mobile,password} = req.body
    try{
        const isExist = await User.findOne({email:email});
        if(isExist){
            return res.json({msg:"User Already Registered"});
        }
        const user = await new User({
            name:name,
            email:email,
            mobile:mobile,
            password:password
        });
        user.save();
        return res.json({msg:"User Registered Successfully"});
    }
    catch{
        res.json({msg:"Sorry Try again Later"});
    }
})

router.post('/login', async(req,res)=>{
    const {email,password} = req.body
    try{
        const isUser = await User.findOne({email:email})
        if(!isUser)
        {
            return res.json("Wrong Email Address")
        }
        if(isUser.password==password)
        {
            const token = jwt.sign({id:isUser._id},process.env.JWT_SECRET,{expiresIn:"3d"});
            return res.json({
                msg:"User Login Successfully",
                role:"User",
                token:token,
                id:isUser._id
            })
        }
        return res.json("Wrong Password")
    }
    catch{
        res.json("Service Unavailable");
    }
})

module.exports = router;