require('dotenv').config();
const express=require('express');
const app=express();
const PORT=process.env.PORT;
const database=require('./config/database');

app.use(express.json());
database();


app.get('/',(req,res)=>{
    res.json({messge:"this is the home page"});
});

app.listen(PORT,(err)=>{
    if(err){
        console.error(err.message);
    }else{
        console.info("server is runing");
    }
});