var express = require("express");
// npm install body-parser --save
var bodyParser = require("body-parser"); // used to convert elements recieved from HTML forms to JSON and process it as a variable values
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true})); //specifing Express to use body-parser

//npm install mangoose --save
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ban_park",{ useNewUrlParser: true }); //if db ban_park existing it usees it else careates a new db // as we are dealing with URL in image
var parkSchema = new mongoose.Schema({
    name: String,
    image: String
});
var Park = mongoose.model("park",parkSchema);


// // Initially to create a first park
// Park.create({
//      name: "Cubbon Park" ,image: "https://i0.wp.com/fottam.com/wp-content/uploads/2015/06/Cubbon-Park-Bangalore-Photo.jpg?fit=1160%2C652&ssl=1"
// }, function(err,park){
//     if(err){console.log("ERROR:"+ err);}
//     else{
//         console.log("Succcess:" + park);
//     }
// })




// var parks = [
//                 { name: "Cubbon Park" ,image: "https://i0.wp.com/fottam.com/wp-content/uploads/2015/06/Cubbon-Park-Bangalore-Photo.jpg?fit=1160%2C652&ssl=1"},
//                 { name: "Lalbagh Botanical Garden", image: "https://cdn.karnataka.com/wp-content/uploads/2015/01/redfort-lalbagh-flower-show-republic-day-2015.jpg"},
//                 { name: "Sankey Tank", image: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2016/01/sankeytank.jpg"},
//                 { name: "Bannerghatta National Park", image: "https://www.theindianwire.com/wp-content/uploads/2014/05/BNP.jpg"},
//                 { name: "Big Banyan Tree", image: "https://www.bangalorebest.com/WondersOfBangalore/imgaes/BigBbniyanTree1.jpg/BigBbniyanTree1.jpg"},
//                 { name: "Ulsoor Lake", image: "https://c1.staticflickr.com/6/5216/5392925868_5cb5586c52_b.jpg"},
//                 { name: "Madiwala Lake", image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/f0/5e/4b/madiwala-lake.jpg"}
//             ];

app.get("/", function(req,res){
   res.render("landing");
});

app.get("/welcome", function(req,res){
Park.find({}, function(err,allpark){
        if(err){console.log("ERROR:"+ err);}
        else{
            res.render("welcome",{ EJSparks: allpark});
        }
    });
  
});

app.post("/welcome", function(req,res){
   var name = req.body.name;
   var image = req.body.image;
   console.log(name + ":" +image);
   var newPark = {name: name, image: image};
    Park.create( newPark, function(err,park){
    if(err){console.log("ERROR:"+ err);}
    else{
        console.log("Succcess:" + park);
    }
})
   res.redirect("/welcome");
});

app.get("/welcome/new", function(req,res){
   res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){console.log("server started")})