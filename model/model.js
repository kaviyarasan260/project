const mongo=require('mongoose');
const userSchema=new mongo.Schema({
    name:String,
    dob:String,
    email:String,
    pass:String,
    mobile:String,
    add:String
})
const user=mongo.model('record',userSchema);
module.exports=user;