var mongoose = require("mongoose");
var Parks = require("./parkSchema");
var Comment   = require("./comments");


var data = [
                { name: "Cubbon Park" ,image: "https://i0.wp.com/fottam.com/wp-content/uploads/2015/06/Cubbon-Park-Bangalore-Photo.jpg?fit=1160%2C652&ssl=1",desc:"One of the bueatiful parks in bangalore city"},
                { name: "Lalbagh Botanical Garden", image: "https://cdn.karnataka.com/wp-content/uploads/2015/01/redfort-lalbagh-flower-show-republic-day-2015.jpg",desc:"One of the bueatiful parks in bangalore city"},
                { name: "Sankey Tank", image: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2016/01/sankeytank.jpg",desc:"One of the bueatiful parks in bangalore city"},
                { name: "Bannerghatta National Park", image: "https://www.theindianwire.com/wp-content/uploads/2014/05/BNP.jpg",desc:"One of the bueatiful parks in bangalore city"},
                { name: "Big Banyan Tree", image: "https://www.bangalorebest.com/WondersOfBangalore/imgaes/BigBbniyanTree1.jpg/BigBbniyanTree1.jpg",desc:"One of the bueatiful parks in bangalore city"},
                { name: "Ulsoor Lake", image: "https://c1.staticflickr.com/6/5216/5392925868_5cb5586c52_b.jpg",desc:"One of the bueatiful parks in bangalore city"},
                { name: "Madiwala Lake", image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/f0/5e/4b/madiwala-lake.jpg",desc:"One of the bueatiful parks in bangalore city"}
            ];
            
            
function seedDB(){
    Parks.deleteMany({},function(err){ 
        if(err){console.log(err);              }
        console.log("removed parks!");
        data.forEach(function(park){
            Parks.create(park,function(err,addedPark){
                if(err){console.log("ERROR!!");}
                else{console.log("park added");
                    Comment.create({text: "This place is great, but I wish there was internet",  author: "Homer"},
                    function(err,addedComment){
                    if(err){console.log("ERROR!!")}
                    else{addedPark.comments.push(addedComment);
                        addedPark.save();
                        console.log("Created new comment");
                    }
                    });
                }
            });
        });
        });
    }


module.exports = seedDB; 