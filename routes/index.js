const express=require('express')
const Router=express.Router()
console.log('router loaded');
// this is the entry point of all the api named url's

Router.use('/api',require('./api/index'));

module.exports=Router