//npm install mongoose
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app"); // checkes if cat_app is present els creates a new one

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});
//Schema is just a template to anticpate the type of data within cats to the JS

var Cat = mongoose.model("Cat", catSchema);
//Model creates a complex patten on which  the methods of mongo db sit and we can perforn the action on

// adding a new cat to the DB
// 2 methods to create
//1.

var dbObj = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
});

dbObj.save(function(err, cat){
    if(err){
        console.log("SOMETHING WENT WRONG!")
    } else {
        console.log("WE JUST SAVED A CAT TO THE DB:")
        console.log(cat);
    }
});

//2nd method
Cat.create({
  name: "Snow White22222",
  age: 15,
  temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

//retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS.....");
        console.log(cats);
    }
});
