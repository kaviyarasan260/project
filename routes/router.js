const express=require('express');
const datas=require('../model/model');
const route=express.Router();
route.get('/',(req,res)=>
{
    res.render('login');
})
route.get('/edit',async(req,res)=>
{
    let uid=req.query.uid;
    const eval= await datas.findOne({_id:uid});
    res.render('edit',{eval})
})
route.get('/create',(req,res)=>
{
    res.render('create');
})
route.get('/view',async(req,res)=>
{
    const record=await datas.find();
    if(req.query.did)
    {
        let did=req.query.did;
        await datas.deleteOne({_id:did});
        res.redirect('/view');
    }
    res.render('view',{record});
})
route.post('/new',async(req,res)=>
{
    const dat=await new datas({
        name:req.body.name,
        dob:req.body.dob,
        email:req.body.email,
        pass:req.body.pass,
        mobile:req.body.mobile,
        add:req.body.add
    })
    dat.save();
    let msg="Account Created"
    res.render('create',{msg})
})
route.post('/log',async(req,res)=>
{
    const getone=await datas.findOne({email:req.body.email} && {pass:req.body.pass});
    if(getone)
    {
        res.redirect('/view');
    }
    else
    {
        let msg="Login Failed";
        res.render('login',{msg});
    }
})
route.post('/update/:id',async(req,res)=>
{
    const daat={
        name:req.body.name,
        dob:req.body.dob,
        email:req.body.email,
        pass:req.body.pass,
        mobile:req.body.mobile,
        add:req.body.add
    }
    await datas.updateOne({_id:req.params.id},{$set:daat});
    res.redirect('/view');
})
module.exports=route;