const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
const mongoDB = require('./config/db')
const app = express()  // server created successfully
//middlewares applied here
app.use(cors());
app.use(express.json());
const path = require('path')
mongoDB();
// api for serving static files
app.use('/uploads', express.static(path.join(__dirname, '')));

// api's started
app.use('/api/admin',require('./routes/adminRoute'));
//category api started
app.use('/api/category',require('./routes/categoryRoute'))
// product api
app.use('/api/product',require('./routes/productRoute'));
//user api
app.use('/api/user/',require('./routes/userRoute'));
// cart api
app.use('/api/cart',require('./routes/cartRoute'));
// order api
app.use('/api/order',require('./routes/orderRoute'));

// api's ended
//server started from here
app.listen(process.env.PORT,()=>{
    console.log("Server Running on http://localhost:5000");
    
})

