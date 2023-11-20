const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const ebs=require('hbs');
const admin=require('./routes/router')
mongoose.set('strictQuery', true);
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('dev'));
app.use(admin);
mongoose.connect("mongodb+srv://kaviyarasankani2002:sivaranjani@cluster0.zxlhujv.mongodb.net/mydb",()=>
{
    console.log("DB Connected!!!");
})
app.set('view engine','hbs');
app.set('views','views');
app.listen(3000,()=>
{
    console.log("Connected!!!");
})