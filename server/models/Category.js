const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    category:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,  
    },
    picture:{
        type:String,
        required:true
    }

},{
    timestamps:true
})
module.exports = mongoose.model("Category",categorySchema)