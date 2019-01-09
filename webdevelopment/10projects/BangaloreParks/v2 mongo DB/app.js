
var express = require("express");
var bodyParser = require("body-parser"); // used to convert elements recieved from HTML forms to JSON and process it as a variable values

var app = express();
app.set("view engine", "ejs");//lets the express know all files rendered here are ejs files
app.use(bodyParser.urlencoded({extended: true})); //specifing Express to use body-parser

var mongoose = require("mongoose"); // MongoDB modeling for Node JS
var passport = require("passport"); //authentication 
var LocalStrategy = require("passport-local");

mongoose.connect("mongodb://localhost/ban_park",{ useNewUrlParser: true }); //if db ban_park existing it usees it else careates a new db // as we are dealing with URL in image

var Parks = require("./models/parkSchema");
var comments = require("./models/comments");
var users = require("./models/users");
var seedDB = require("./models/seedDB");
app.use(express.static(__dirname + "/public"));
//to reset everything and load initial datas
seedDB();

//passport configuration:
app.use(require("express-session")({
        secret: "This is the Salting string",
        resave: false,
        saveUninitialized:false
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

passport.use(new LocalStrategy(users.authenticate()));
passport.serializeUser(users.serializeUser());
passport.deserializeUser(users.deserializeUser());

app.get("/", function(req,res){
   res.render("landing");
});

//new user register
app.get("/register", function(req,res){
       res.render("register");
});

app.post("/register", function(req,res){
       var usrName = new users({username: req.body.username});
       users.register(usrName,req.body.password,function(err, user){
          if (err){console.log("ERROR!" + err);}
          else{
              passport.authenticate("local")(req,res,function(){
                  res.redirect("/parks");
                         });
              }
        
       });
});


// LOGIN ROUTES
//render login form
app.get("/login", function(req, res){
   res.render("login"); 
});
//login logic
//middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/parks",//if credentials are vaild
    failureRedirect: "/login"
}) ,function(req, res){
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

app.get("/parks/:id/comments/new",isLoggedIn, function(req,res){
    Parks.findById(req.params.id, function(err, foundPark){
        if(err){
            console.log(err);
        } else {
            res.render("newComment", {park: foundPark});
        }
    });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
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