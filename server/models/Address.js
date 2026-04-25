const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    userId:{
        required:true,
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    house:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,

    },
    state:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['active','inactive','default'],
        default:'default',
    }
},{
    timestamps:true
});
module.exports = mongoose.model("Address",addressSchema);