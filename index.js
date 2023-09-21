const express=require('express')
const Port=3002;
const bodyParser=require('body-parser')
const db=require('./config/mongoose');
const app=express();

app.use(bodyParser.urlencoded({extended:true}))


// Routes
app.use('/',require('./routes'));
   
app.listen(Port,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is runing ...",Port);
})