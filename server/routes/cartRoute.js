const Cart = require('../models/Cart')
const express = require('express');
const router = express.Router();

router.post('/',async(req,res)=>{
    const {userId,productId} = req.body;
    try{
        const a = await new Cart(req.body);
        a.save();
        res.json({msg:"Product Added"})

    }catch{
        res.json({msg:"Product Not Added"});
    }
})

// for fetching cart item for specific person
router.get('/:id',async(req,res)=>{
    // id => user 
    try{
        const data = await Cart.find({userId:req.params.id}).populate('productId').lean();
        res.json({msg:"Cart Item Fetched ",data:data});
    }
    catch{
        res.json({msg:"Data Not Fetched"});
    }
})
// for quantity updating id => cart document , for increasing
router.patch('/quantity/increase/:id',async(req,res)=>{
    try{
        const quant = await Cart.findById(req.params.id);
        if(quant.quantity<=5){
             let c = parseInt(quant.quantity)+1;
            const a = await Cart.findByIdAndUpdate(req.params.id,{quantity:c});
        }
        else{
            res.json({msg:"Only 5 item should in cart"})
        }
    }catch{
        res.json({msg:"Sorry try again later"})
    }
});
// for  decreasing
router.patch('/quantity/decrease/:id',async(req,res)=>{
    try{
        const quant = await Cart.findById(req.params.id);
        if(quant.quantity<=1){
            res.json({msg:"Cart Item should be not less than 1"})
        }else{
            let c = parseInt(quant.quantity)-1;
             const a = await Cart.findByIdAndUpdate(req.params.id,{quantity:c});
        }
       
    }catch{
        res.json({msg:"Sorry "})
    }
});

// route for removing item  from cart
router.delete('/:id',async(req,res)=>{
    try{
        const data = await Cart.findByIdAndDelete(req.params.id);
        res.json({msg:"Item Deleted"})
    }catch{
        res.json({msg:"Item not removed"});
    }
})
module.exports = router;