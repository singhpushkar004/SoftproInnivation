const Admin = require('../models/Admin')
const bcrypt = require('bcrypt');
const adminSeed = async ()=>{
   const res = await Admin.create({
    name:"Pushkar Singh",
    email:"admin@gmail.com",
    password: bcrypt.hash("admin1234")
   })
   console.log(res);
   
}
adminSeed();