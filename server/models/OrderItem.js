const mongoose = require('mongoose');

const orderItem = mongoose.Schema({
    orderId:{
        type:mongoose.Schema.ObjectId,
        ref:"Order"
    },
    productId:{
        type:mongoose.Schema.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
module.exports = mongoose.model("OrderItem",orderItem);