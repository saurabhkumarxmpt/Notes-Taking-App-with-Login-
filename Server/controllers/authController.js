const User=require('../models/user');
const bcrypt = require('bcrypt');

exports.signUp=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const hasedPassword=await bcrypt.hash(password,10);
        const user=new User({name,username,email,password:hasedPassword});
        await user.save();
        res.json({message:"User add Succesfuly"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}