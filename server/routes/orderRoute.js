const express = require('express')
const router = express.Router();
const Order = require('../models/Order')
const OrderItem = require('../models/OrderItem');
const Product = require('../models/Product')
const Cart = require('../models/Cart');

// for order
router.post('/order/cart',async(req,res)=>{
    const{userId,paymentMethod} = req.body
    try{
        if(paymentMethod=="cod"){
              const cartItem = await Cart.find({userId:userId}).lean();
                const order = await Order.find().sort(-1).limit(1);
                const oid = parseInt(order[0].orderId)+1 || 1;
                let paymentCal = 0;
                cartItem.map( async(item)=>{
                const data =  await new OrderItem({orderId:oid,productId:item.productId,quantity:item.quantity}).lean();
                data.save();
                paymentCal = (parseFloat(item.actualPrice)-parseFloat(item.actualPrice*discount/100))+paymentCal;
                });
                const saveOrderId = await new Order({userId:userId,orderId:oid,paymentMethod:paymentMethod,paymentStatus:'pending',payment:paymentCal,orderStatus:'pending'});
                saveOrderId.save();
                res.json({msg:"Order Successfully"})
        }
        else if(paymentMethod=="online"){
                const cartItem = await Cart.find({userId:userId}).lean();
                const order = await Order.find().sort(-1).limit(1);
                const oid = parseInt(order[0].orderId)+1 || 1;
                let paymentCal = 0;
                cartItem.map( async(item)=>{
                const data =  await new OrderItem({orderId:oid,productId:item.productId,quantity:item.quantity}).lean();
                data.save();
                paymentCal = (parseFloat(item.actualPrice)-parseFloat(item.actualPrice*discount/100))+paymentCal;
                });
                const saveOrderId = await new Order({userId:userId,orderId:oid,paymentMethod:paymentMethod,paymentStatus:'success',payment:paymentCal,orderStatus:'confirmed',transactionId:req.body.transactionId});
                saveOrderId.save();
                res.json({msg:"Order Successfully"})
        }

}
catch(er){
    res.json({msg:"Sorry Try Again Later",er:er});
}
})

// for order history
router.get('/order/history/:id',async(req,res)=>{
   try{
     const order = await Order.findById(req.params.id);
     res.json({msg:"Order Fetched successfully for user",data:order});
   }
   catch{
    res.json({msg:"Order Not Fetched"})
   }
});
// for all orders
router.get('/order/all',async(req,res)=>{
   try{
     const order = await Order.find().lean();
    res.json({msg:"Order fetched successfully",data:order});
   }catch{
    res.json({msg:"Order Not Fetched"})
   }
})

// order search for a single user
router.get('/user/:id',async(req,res)=>{
  try{
    const data = await Order.find({userId:req.params.id});
    res.json({msg:"Data Fetched",data:data});
  }catch{
    res.json({msg:"Data not Fetched"})
  }
})
 
module.exports = router