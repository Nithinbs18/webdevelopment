var express = require("express");
// npm install body-parser --save
var bodyParser = require("body-parser"); // used to convert elements recieved from HTML forms to JSON and process it as a variable values
var app = express();
app.use(bodyParser.urlencoded({extended: true})); //specifing Express to use body-parser
app.set("view engine", "ejs");
//npm install request --save
//install request from npm
var request =require("request");
var lat;
var lon;
var url;


app.get("/google", function(req ,res){
request('http://www.google.com', function(error, response, body){
    if(!error && response.statusCode == 200){
        console.log(body);
    }
    else{
        console.log(error);
    }
    })
})

app.get("/", function(req ,res){
    res.render("home");
})

app.post("/latlong", function(req ,res){
    lat=req.body.lattitude;// without body-parser we cannot read this content and will be inatialized to undefined
    lon=req.body.longitude;
    url ="https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lon;
    request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body); //body here is always in form of string we have to convert it to JSON format to access it in a better way.
        console.log(parsedData);
        res.render("results", {data : parsedData});
    }
    else{
        console.log(error);
    }
   })
})



app.listen(process.env.PORT, process.env.IP, function(){console.log("server started")})