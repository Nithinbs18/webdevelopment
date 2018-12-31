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

// To use a pattern we must use "/pattern/:anyVariableName"  i.e. when /patter/<anything> is executed variable path1 is printed
app.get("/pattern/:anyVariableName", function(req ,res){
    res.send("variable path1");
})

app.get("/pattern/:anyVariableName/pat2/:anyVariableName2", function(req ,res){
    res.send("variable path2");
})

// TO handle any invalid path given we can use "*"" 
app.get("*", function(req ,res){
    res.send("choose the correct path");
})

app.listen(process.env.PORT, process.env.IP, function(){console.log("server started")})