
var express = require("express");
var bodyParser = require("body-parser"); // used to convert elements recieved from HTML forms to JSON and process it as a variable values
var app = express();
app.set("view engine", "ejs");//lets the express know all files rendered here are ejs files
app.use(bodyParser.urlencoded({extended: true})); //specifing Express to use body-parser
var mongoose = require("mongoose"); // MongoDB modeling for Node JS

mongoose.connect("mongodb://localhost/ban_park",{ useNewUrlParser: true }); //if db ban_park existing it usees it else careates a new db // as we are dealing with URL in image
//JSON scheme in which data will be processed

//add MongoDB processing methods 
var Parks = require("./models/parkSchema");
var comments = require("./models/comments");
var seedDB = require("./models/seedDB");
app.use(express.static(__dirname + "/public"));
//to reset everything and load initial datas
seedDB();

app.get("/", function(req,res){
   res.render("landing");
});

app.get("/parks", function(req,res){
Parks.find({}, function(err,allpark){
        if(err){console.log("ERROR:"+ err);}
        else{
            res.render("parks",{ EJSparks: allpark});
        }
    });
  
});

app.post("/parks", function(req,res){
       var name = req.body.name;
       var image = req.body.image;
       var desc = req.body.desc;
       var newPark = {name: name, image: image ,desc: desc};//creating a json object frm entered details
        Parks.create( newPark, function(err,park){
            if(err){console.log("ERROR:"+ err);}
            else{
                console.log("Succcess:" + park);
            }
        });
    res.redirect("/parks");
});

app.get("/parks/new", function(req,res){
       res.render("new");
});

app.get("/parks/:id", function(req,res){
    Parks.findById(req.params.id, function(err, foundPark){
        if(err){
            console.log(err);
        } else {
            res.render("info", {park: foundPark});
        }
    });
});

app.get("/parks/:id/comments/new", function(req,res){
    Parks.findById(req.params.id, function(err, foundPark){
        if(err){
            console.log(err);
        } else {
            res.render("newComment", {park: foundPark});
        }
    });
});

app.post("/parks/:id/comments", function(req,res){
    Parks.findById(req.params.id, function(err, foundPark){
        if(err){
            console.log(err);
            res.redirect("/parks");
        } else {
            comments.create(req.body.comment, function(err,addedComment){
                if(err){console.log(err);}
                else{
                    foundPark.comments.push(addedComment);
                    foundPark.save();
                    res.redirect("/parks/"+req.params.id );
                }
            });
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){console.log("server started")});