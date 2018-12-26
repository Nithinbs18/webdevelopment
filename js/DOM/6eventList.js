var lists = document.querySelectorAll("li");
var l1 = document.getElementById("one");

for(var i=0 ; i<lists.length; i++){
lists[i].addEventListener("mouseover", function(){
this.classList.toggle("select");
if(lists[i].id=="one"){
    this.textContent="you selected one";
}
})

lists[i].addEventListener("mouseout", function(){
    this.classList.toggle("unselect");})
}

l1.addEventListener("mouseover", function(){
    this.classList.toggle("select");
    this.textContent="you selected one"; })


    
l1.addEventListener("mouseout", function(){
    this.classList.toggle("unselect");
    this.textContent="one"; })