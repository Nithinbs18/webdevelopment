//npm install express ejs body-parse mongoose --save
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");// to handle PUT and DELETE
var expressSanitizer = require("express-sanitizer"); // to remove all script tags from user inputs

var app = express();
mongoose.connect("mongodb://localhost:27017/foodblog",{ useNewUrlParser: true });
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));//to handle PUT and DELETE requests
app.use(expressSanitizer());//acticationg expressSanitizer

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Biryani",
//     image: "https://www.thedeliciouscrescent.com/wp-content/uploads/2016/05/Easy-Hyderabadi-Chicken-Biryani.jpg",
//     body: "Biryani, also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. It is popular throughout the Indian subcontinent as well as among the diaspora from the region."
// });

app.get("/",function(req,res){res.redirect("/blogs")})

app.get("/blogs", function(req,res){
    Blog.find({},function(err,blogs){
        if(err){console.log("ERROR!!")}
        else{res.render("blogs",{blogs: blogs});}
    })
    
});

app.get("/blogs/new", function(req,res){
    res.render("new")
});

app.post("/blogs", function(req,res){
    req.body.blog.body = req.sanitize(req.body.blog.body);//removes all script tags
    Blog.create(req.body.blog,function(err,blogs){
        if(err){console.log("ERROR!!")}
        else{res.redirect("/blogs")}
    });
    
});

app.get("/blogs/:id", function(req,res){
    Blog.findById(req.params.id,function(err,foundBlog){
        if(err){console.log("ERROR!!");res.redirect("/blogs")}
        else{res.render("show",{blog : foundBlog})}
    });
    
});

app.get("/blogs/:id/edit", function(req,res){
    Blog.findById(req.params.id,function(err,foundBlog){
        if(err){console.log("ERROR!!");res.redirect("/blogs")}
        else{res.render("edit",{blog : foundBlog})}
    });
    
});

app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body)
   Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
      if(err){
          res.redirect("/blogs");
      }  else {
          res.redirect("/blogs/" + req.params.id);
      }
   });
});

app.delete("/blogs/:id", function(req, res){
   Blog.findByIdAndRemove(req.params.id, function(err){
       if(err){
           res.redirect("/blogs");
       } else {
           res.redirect("/blogs");
       }
   })
});

app.listen(process.env.PORT, process.env.IP, function(){console.log("server started")})