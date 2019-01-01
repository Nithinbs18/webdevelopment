var express = require("express");
// npm install body-parser --save
var bodyParser = require("body-parser"); // used to convert elements recieved from HTML forms to JSON and process it as a variable values
var app = express();

app.use(bodyParser.urlencoded({extended: true})); //specifing Express to use body-parser


var friends = ["ram","sam","nick"];


app.set("view engine", "ejs");

app.get("/", function(req ,res){
    res.render("home");
})

app.get("/friends", function(req ,res){
    res.render("friends", {friends : friends});
})
app.post("/addfriend", function(req ,res){
    friends.push(req.body.newFriend); // without body-parser we cannot read this content and will be inatialized to undefined
    res.redirect("/friends");
})
app.listen(process.env.PORT, process.env.IP, function(){console.log("server started")})