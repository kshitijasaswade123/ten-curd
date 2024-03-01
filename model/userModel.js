const mongoose = require('mongoose');
const userModel = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
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
        required:true
    },
    Updated_at:{
        type:Date,
        required:true 
    }
})


module.exports = mongoose.model('UserModel', userModel);