const express = require('express')
const router = express.Router();
const Address = require('../models/Address');

router.post('/',async(req,res)=>{
    try{
        const data = await new Address(req.body);
        data.save();
        res.json({msg:"Address Added Successfully"});
    }
    catch(er){
        res.json({msg:"Sorry address not added"});
    }
});
// address via particular user id
router.get('/:id',async(req,res)=>{
    // id  will be  user id 
    try{
        const data = await Address.find({userId:req.params.id,status:['active','default']}).lean();
    res.json({msg:"data fetched successfully",data:data});
    }
    catch(er){
        console.log("address not fetched");
        
    }
});
router.patch('/default/:id',async(req,res)=>{
        // id will be address id
  try{
      const data = await Address.findByIdAndUpdate(req.params.id,{status:'default'});
      res.json({msg:"Status Changed"})
  }catch{
    res.json({msg:"address Status Not Changed"});

  }
});
router.delete("/:id",async(req,res)=>{
    try{
        // id will be address id 
        const data = await Address.findByIdAndUpdate(req.params.id,{status:'inactive'},{new:true});
        res.json({msg:"Address Deleted Successfully"});
    }
    catch(er){
        res.json("Address Not Removed");
    }
})

module.exports = router;