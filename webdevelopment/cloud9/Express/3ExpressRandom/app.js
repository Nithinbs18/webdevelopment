// steps done:
// 1. cheate folder vies in same directory
// 2. run npm init to define package.json
// 3. do npm install express --save
var express =require("express");
var app = express();

app.get("/", function(req ,res){
    res.render("home.ejs");
    // ejs --> embededJavaScript render() always searches the .ejs file in view folder hence we need to create view folder in same directory as app.js , hence created.
    // in order to execute ejs we also need to install ejs from npm
    //npm install ejs --save
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
})