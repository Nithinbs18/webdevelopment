var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var bgc = false;

setInterval(function(){
    if(bgc){
        body.style.background= "white";
        h1.style.color= "red";
        h2.style.color= "green";
    }
    else{
        body.style.background= "blue";
        h1.style.color= "yellow";
        h2.style.color= "red";
    }
    bgc = !bgc;
}
,1000
) 
