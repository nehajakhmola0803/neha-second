const express = require('express');
const app = express();

app.use(function(req,res, next){
console.log("middleware working");
next();
});
app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get ('/profile', function (req, res){
    res.send('Hello from profile');
});

app.get("/profile/Neha", function (req,res){
  res.send("Hello from Neha jakmola");
});
app.get("/profile/:username", function (req,res){
  res.send(`Hello from ${req.params.username}`);
});

app.listen(3000);