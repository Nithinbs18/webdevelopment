// steps done:
// 1. cheate folder vies in same directory
// 2. run npm init to define package.json
// 3. do npm install express --save
var express =require("express");
var app = express();

app.use(express.static("public"));// tells express explicetly to serve the directory "public" and use its conten here style.css file for all files that will be called fron the app
app.set("view engine", "ejs"); // tells express explicetly all the files are .ejs and we do not havt to mention .ejs in the render()

app.get("/", function(req ,res){
    res.render("home");
    //render() --> to send a seperate file i.e. HTML content as response we need to use render(<filename to be sent>)
    // ejs --> embededJavaScript render() always searches the .ejs file in "views" folder hence we need to create "views" folder in same directory as app.js , hence created.
    // in order to execute ejs we also need to install ejs from npm
    //npm install ejs --save
})

//get variable from URL and process it in a HTML
app.get("/passingParm/:anyVar", function(req ,res){
    var parm = req.params.anyVar;
    res.render("var",{htmlVar : parm});
//here htmlVar is the variable in "var" file and parm is the value passed
})


// to pass an object and prit the whole object using loop:
app.get("/posts", function(req, res){
    var posts = [
        {name: "Nithin", age: 25},
        {name: "Akshay", age: 24},
        {name: "Sumuka", age: 23}
    ];
    res.render("posts", {posts: posts}); //{posts: posts} here 1st posts is the posts in html and 2nd is the object name posts
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});