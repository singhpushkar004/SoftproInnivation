const express = require('express')
const Admin = require('../models/Admin')
const router = express.Router();
const jwt = require('jsonwebtoken')
router.post('/register', async(req,res)=>{
    //logic for checking admin already registered
   const a = await Admin.countDocuments()
    if(a>0){
        return res.json("Admin Already Registered")
    }
    const user = await new Admin(req.body)
    user.save();

    res.json("Admin Registered successfully");
})

// admin auth routes

router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    const a = await Admin.findOne({email}).select('password')
    if(!a){
        return res.json({msg:"Invalid Credentials"});
    }
    if(a.password==password){
        const token = jwt.sign({id:a._id},process.env.JWT_SECRET,{expiresIn:"30d"})
        return res.json({
            msg:"Login Successfully",
            id:a._id,
            token
        });
    }
    return res.json({msg:"Incorrect Password"});


})

module.exports = router;