const mongoose = require('mongoose');
const userModel = new mongoose.Schema({
    
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password_hash:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
       default:Date.now()
    }
   
})


module.exports = mongoose.model('UserModel', userModel);