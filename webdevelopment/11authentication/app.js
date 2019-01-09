var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose")
    
mongoose.connect("mongodb://localhost/auth_demo_app",{ useNewUrlParser: true });
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// to handle session from which we get to know if users are logged in or not.
app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",  //string to salt pw
    resave: false,
    saveUninitialized: false
}));

//let express know to use passport
app.use(passport.initialize());
app.use(passport.session());

//let the authentication method be Local i.e. validation is checked from local db , we can have twitte,fb,google etc instead of local here
//all User.<function>() are obtained from user.js with "UserSchema.plugin(passportLocalMongoose);"
passport.use(new LocalStrategy(User.authenticate()));

//serializeUser determines which data of the user object should be stored in the session. The result of the serializeUser method is attached to the session
passport.serializeUser(User.serializeUser());
//deserializeUser retrives dataa from session
//https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
passport.deserializeUser(User.deserializeUser());

//============
// ROUTES
//============

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret",isLoggedIn, function(req, res){
   res.render("secret"); 
});
//isLoggedIn --> check if user is logged in with help of session, in the below function next() tells the caller caller of the finction proceed with the next function 
// i.e. in the above code when next() is executed the annoymous function function(req, res){ res.render("secret"); } is executed 
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){ //buit in function
        return next();
    }
    res.redirect("/login");
}

// Auth Routes

//show sign up form
app.get("/register", function(req, res){
   res.render("register"); 
});
//handling user sign up
app.post("/register", function(req, res){
    //all User.<function>() are obtained from user.js with "UserSchema.plugin(passportLocalMongoose);"
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        //here only username: req.body.username is saved as it is, but req.body.password is salted and  hashed hence we put it outside the quotes
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/secret");
        });
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
    successRedirect: "/secret",//if credentials are vaild
    failureRedirect: "/login"
}) ,function(req, res){
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
})