const mongoose = require('mongoose')

const mongoDB = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database connected successfully");
        
    })
    .catch((er)=>{
        console.log("Errors"+er);
        
    })
}
module.exports = mongoDB;