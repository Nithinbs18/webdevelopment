var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/association_demo_2",{ useNewUrlParser: true });

var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    postsArray: [postSchema] //adds postSchema in form of an array i.e one to many relation here 1 user can have multiple posts
});
var User = mongoose.model("User", userSchema);

// User.create({
//     email: "nithin@gmail.com",
//     name: "Nithin"
// });

// Post.create({
//   title: "demo1",
//   content: "demo1 content"
//     },function(err, post){ 
//         User.findOne({
//             email: "nithin@gmail.com"}, function(err, foundUser){
//                 if(err){
//             console.log(err);
//                 } 
//                 else {
//             foundUser.postsArray.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

// Find user
// find all posts for that user

User.findOne({email: "nithin@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});


