const mongoose = require('mongoose');

const orderSchema =mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
   orderId:{
        type:String,
        required:true
   },
   paymentMethod:{
    type:String,
    enum:['cod','online'],
    default:'cod',
   },
   paymentStatus:{
    type:String,
    enum:['pending','success'],
    default:'pending'
   },
   payment:{
    type:String,
   },
   orderStatus:{
    type:String,
    enum:['pending','confirmed','shipped','dispatched','outForDelivery','delivered','canceled','returned'],
    default:'pending'
   },
   transactionId:{
    type:String,
   }
},{
    timestamps:true
});
module.exports = mongoose.model("Order",orderSchema);
