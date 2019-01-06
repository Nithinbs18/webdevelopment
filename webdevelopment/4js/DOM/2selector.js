// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

// <h1>I am an h1!</h1>
// <p id="first" class="special">Hello</p>
// <p class="special">Goodbye</p>
// <p>Hi Again</p>
// <p id="last">Goodbye Again</p>

var tag1 = document.getElementById("first");
var tag2 = document.getElementsByClassName("special");
var tag3 = document.getElementsByTagName("p")
var tag4 = document.querySelector(".special")
var tag5 = document.querySelectorAll(".special ");

console.log(tag1);