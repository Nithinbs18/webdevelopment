var express =require("express");
var app = express();

app.get("/", function(req ,res){
    res.send("Hi Welcome to my Assignment");
})
app.get("/speak", function(req ,res){
    res.send("Enter animal; pig , cow or dog");
})
// app.get("/speak/pig", function(req ,res){
//     res.send("Oink");
// })
// app.get("/speak/cow", function(req ,res){
//     res.send("Moo");
// })
// app.get("/speak/pig", function(req ,res){
//     res.send("boww");
// })

var sound = {
    pig: "Oink",
    dog: "Boo",
    cow: "Moo"
};
app.get("/speak/:animal", function(req ,res){
    res.send(sound[req.params.animal.toLowerCase()]);
    // res.send(req.params.animal.toLowerCase());
})

app.get("/repeat/:anyVar/:times", function(req ,res){
//   console.log(req);
   var n = Number(req.params.times); // by default in String form.
   var r ="";
   for(var i=0; i<n ;i++){
       r+=(req.params.anyVar) + " ";
   }
   res.send(r);
})

// TO handle any invalid path given we can use "*"" 
app.get("*", function(req ,res){
    res.send("choose the correct path");
})

app.listen(process.env.PORT, process.env.IP, function(){console.log("server started")})