var express =require("express");
var app = express();

app.get("/", function(req ,res){
    res.send("hello");
})
app.get("/hi", function(req ,res){
    res.send("hi");
})
app.get("/hi/bye", function(req ,res){
    res.send("bye");
})

app.listen(process.env.PORT, process.env.IP, function(){console.log("server started")})