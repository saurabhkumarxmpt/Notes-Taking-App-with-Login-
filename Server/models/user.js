const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        uniqe:true
    },
    password:{
        type:String,
        uniqe:true
    }
},{timestamps:true});

const User=mongoose.model('users',userSchema);

module.exports=User;