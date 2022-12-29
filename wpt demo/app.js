var express = require('express');
var app = express();
app.get("/",function(req,resp){
resp.send("red pill is better than blue pill");
})
app.get("/login",function(req,resp){
    resp.send(" purpose is greater tha goal ");
})
app.listen(9999);
console.log("server chal raha hai ");