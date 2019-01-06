
var squares = document.querySelectorAll(".square");
var colors = randomColors(6);

var pickedcolor = colors[random(6)];// picks one of the random color from array of random colors.
var rgbDisp = document.getElementById("pickedcolorToDisp");
rgbDisp.textContent =pickedcolor;

var msgOnClick = document.getElementById("msg");
var h1 = document.getElementById("h1");
var h3 = document.getElementById("h3");
var resetButton = document.querySelector("input");
var Easybutton = document.getElementById("Easy");
var Hardbutton = document.getElementById("Hard");

Easybutton.addEventListener("click",function(){
    Hardbutton.classList.remove("select");
    Easybutton.classList.add("select");
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = null}
    colors = randomColors(3);
    pickedcolor =colors[random(3)];
    rgbDisp.textContent =pickedcolor;
    // h1.style.background= "#232323";
    resetButton.setAttribute("value","Reset")
    for(var i=0; i<3; i++){
        squares[i].style.backgroundColor = colors[i];}
});

Hardbutton.addEventListener("click",function(){
    Hardbutton.classList.add("select");
    Easybutton.classList.remove("select");
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = "#232323"}
    colors = randomColors(6);
    pickedcolor = colors[random(6)];
    rgbDisp.textContent =pickedcolor;
    // h1.style.background= "#232323";
    resetButton.setAttribute("value","Reset")
    for(var i=0; i<6; i++){
        squares[i].style.backgroundColor = colors[i];}
});


resetButton.addEventListener("click",function(){
    Hardbutton.classList.add("select");
    Easybutton.classList.remove("select");
    colors = randomColors(6);
    pickedcolor = colors[random(6)];
    rgbDisp.textContent =pickedcolor;
    h1.style.background= "steelblue";
    resetButton.setAttribute("value","Reset");
    msgOnClick.textContent = null;
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];}
});

var cc;
for(var i=0; i<squares.length; i++){
squares[i].style.backgroundColor = colors[i];
squares[i].addEventListener("click", function(){
    cc = this.style.backgroundColor;
    if(cc === pickedcolor){
        msgOnClick.textContent = "Correct!!"
        changeAllColor(pickedcolor);
        h1.style.background= pickedcolor;
        resetButton.setAttribute("value","Play again!!")
        }
    else{
        msgOnClick.textContent = "Try again!!"
    this.style.backgroundColor = "#232323";}
});
}

function changeAllColor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color}
}

function random(n){
    var c = (Math.floor(Math.random() * n));
    return c;
}

function randomColors(n){
    var array = [];
    for(var i=0 ; i<n; i++){
        array[i]= randomColorGen();
    }
    return array;
}

function randomColorGen()
{
    var r = Math.floor(Math.random() *265);
    var g = Math.floor(Math.random() *265);
    var b = Math.floor(Math.random() *265);
    return "rgb(" + r + ", " +g + ", " + b + ")";
}