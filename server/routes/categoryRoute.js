const Category = require('../models/Category');
const express = require('express')
const router = express.Router();
const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/category/")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname);
    }
})
const uploads = multer({storage:storage})

router.post('/',uploads.single('picture'),async(req,res)=>{
 try{
       const {category , description , picture} = req.body
        const b = await Category.findOne({category:category});
        if(b){
            // await Category.findByIdAndUpdate(b._id,{status:'active'},{new:true})
            return res.json("Category Already Exist")
        }

        const a = await new Category({category:category,description:description,picture:req.file.path,status:'active'})
        a.save();
        res.json("Category Added successfully")
 }
        catch{
            res.json({msg:"Something Went Wrong "})
        } 

})

// fetch api
router.get('/',async(req,res)=>{
   try{
     const data = await Category.find({status:['active','inactive']}).lean()
     res.json({msg:"Data fetched",data:data})
   }catch(er){
    res.json({msg:"Sorry data not found"});
   }
})
//put api
router.put('/:id',async(req,res)=>{
   try{
     const data= await Category.findByIdAndUpdate(req.params.id,req.body,{new:true})
     res.json({msg:"Category Updated Successfully"})
   }catch(er){
    res.json({msg:"Category Not Updated"})
   }
})

//delete api
router.delete('/:id',async(req,res)=>{
    try{
       const data = await Category.findByIdAndUpdate(req.params.id,{status:'delete'},{new:true})
       res.json({msg:"Category Deleted Successfully"})
    }
    catch(er){
        res.json({msg:"Category Not Deleted"})
    }
})

// home category route api
router.get('/home',async(req,res)=>{

        try{const cat = await Category.find({status:"active"}).sort({created_At:-1}).limit(5);
        return res.json({msg:"Category Fetched",data:cat});
    }catch{
        res.json({msg:"Category Not Fetched"});
    }
})

module.exports = router;