var but = document.getElementById("nithin");
var isBlue = false;

// but.addEventListener("click", function() {
//  console.log(document.body);
// if(isBlue){
//  document.body.style.background="white";
// }
//  else{
//     document.body.style.background="blue";
    
//  }
//  isBlue = !isBlue;
// });

but.addEventListener("click", function(){
document.body.classList.toggle("purple");
});