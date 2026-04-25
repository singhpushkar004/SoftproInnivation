const express = require('express')
const Product = require('../models/Product')
const router = express.Router();
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'../uploads/product'));
    }, 
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)
    }
}); 
const uploads = multer({storage:storage});

// post api
router.post('/',uploads.single("images") ,async(req,res)=>{
    try{
        const {name,category,description,brandName,actualPrice,discount,images,tag,stock,attributes,height,width,stockStatus,refundPolicy,replacementPolicy,freeDelivery,returnPolicy,isCod} = req.body
        const p= await new Product({
            name:name,
            category:category,
            description:description,
            brandName:brandName,
            actualPrice:actualPrice,
            discount:discount,
            images:req.file.path,
            tag:tag,
            stock:stock,
            attributes:attributes,
            height:height,
            width:width,
            stockStatus:stockStatus,
            refundPolicy:refundPolicy,
            replacementPolicy:replacementPolicy,
            freeDelivery:freeDelivery,
            returnPolicy:returnPolicy,
            isCod:isCod,

        })
        p.save();
        res.json({msg:"Product Added Successfully",data:req.body})
    }catch(er){
        console.log(er);
        console.log(req.file);  
        
        res.json({msg:"Product Not Added"})
        
    }
})

router.put('/:id',uploads.single("images") ,async(req,res)=>{
    try{
        const {name,category,description,brandName,actualPrice,discount,images,tag,stock,attributes,height,width,stockStatus,refundPolicy,replacementPolicy,freeDelivery,returnPolicy,isCod} = req.body

        const a = await Product.findByIdAndUpdate(req.params.id,{
            name:name,
            category:category,
            description:description,
            brandName:brandName,
            actualPrice:actualPrice,
            discount:discount,
            images:req.file.path,
            tag:tag,
            stock:stock,
            attributes:attributes,
            height:height,
            width:width,
            stockStatus:stockStatus,
            refundPolicy:refundPolicy,
            replacementPolicy:replacementPolicy,
            freeDelivery:freeDelivery,
            returnPolicy:returnPolicy,
            isCod:isCod,

        },{new:true})
        res.json({msg:"Product Updated Successfully"})
    }catch{
        res.json({msg:"Product Not Updated"})
    }
})

//get api
router.get('/',async(req,res)=>{

    try{
        const data = await Product.find().populate('category');
        res.json({msg:"Data Fetched",data:data});
    }
    catch(er){
        res.json({msg:"Sorry Data not Fetched",error:er});
    }
})
router.get('/featured', async(req,res)=>{
     try{
        const data = await Product.find().populate('category').limit(8);
        res.json({msg:"Data Fetched",data:data});
    }
    catch(er){
        res.json({msg:"Sorry Data not Fetched",error:er});
    }
})

router.get('/details/:id', async(req,res)=>{
    try{
        const data = await Product.findById(req.params.id);
        res.json({msg:"Data Fetched",data:data})
    }
    catch{
        res.json({msg:"Data Not Fetched"});
    }
})
module.exports = router