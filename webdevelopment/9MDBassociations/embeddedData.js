var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/associations_demo",{ useNewUrlParser: true });

// POST - title, content
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

// var newUser = new User({
//     email: "nithin@gmail.com",
//     name: "Nithin2222"
// });

// newUser.postsArray.push({
//     title: "22demo",
//     content: "22demo content"
// });

// newUser.save(function(err, user){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


User.findOne({name: "Nithin2222"}, function(err, user){
    if(err){
        // console.log(err);
    } else {
        user.postsArray.push({
            title: "3332nd comment",
            content: "3332nd comment content."
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});