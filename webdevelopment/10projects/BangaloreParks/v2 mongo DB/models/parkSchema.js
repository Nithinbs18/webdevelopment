var mongoose = require("mongoose");
var comments = require("./comments");
//JSON scheme in which data will be processed
var parkSchema = new mongoose.Schema({
    name: String,
    image: String,
    desc: String,
    comments: [
      {
         text: String,
         author: String
      }
   ]
});

//add MongoDB processing methods and sends back " mongoose.model("park",parkSchema);" when ./models/parks is called in app.js
module.exports = mongoose.model("park",parkSchema);

