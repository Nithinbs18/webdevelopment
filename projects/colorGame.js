var colors = randomColors(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = random(6);// picks one of the andom color from array of random colors.
var rgbDisp = document.getElementById("pickedcolorToDisp");
rgbDisp.textContent =pickedcolor;
var msgOnClick = document.getElementById("msg");
var h1 = document.getElementById("h1");
var h3 = document.getElementById("h3");
var button = document.querySelector("input");
var Easybutton = document.getElementById("Easy");
var Hardbutton = document.getElementById("Hard");

Easybutton.addEventListener("click",function(){
    Hardbutton.classList.remove("select");
    Easybutton.classList.add("select");
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = "#232323"}
    colors = randomColors(3);
    pickedcolor = random(3);
    rgbDisp.textContent =pickedcolor;
    // h1.style.background= "#232323";
    button.setAttribute("value","Reset")
    for(var i=0; i<3; i++){
        squares[i].style.backgroundColor = colors[i];}
});

Hardbutton.addEventListener("click",function(){
    Hardbutton.classList.add("select");
    Easybutton.classList.remove("select");
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = "#232323"}
    colors = randomColors(6);
    pickedcolor = random(6);
    rgbDisp.textContent =pickedcolor;
    // h1.style.background= "#232323";
    button.setAttribute("value","Reset")
    for(var i=0; i<6; i++){
        squares[i].style.backgroundColor = colors[i];}
});


button.addEventListener("click",function(){
    colors = randomColors(6);
    pickedcolor = random();
    rgbDisp.textContent =pickedcolor;
    h1.style.background= "steelblue";
    button.setAttribute("value","Reset");
    msgOnClick.textContent = null;
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];}
});
for(var i=0; i<squares.length; i++){
squares[i].style.backgroundColor = colors[i];
squares[i].addEventListener("click", function(){
    var cc = this.style.backgroundColor;
    if(cc === pickedcolor){
        msgOnClick.textContent = "Correct!!"
        changeAllColor(pickedcolor);
        h1.style.background= cc;
        button.setAttribute("value","Play again!!")
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
    var c = colors[(Math.floor(Math.random() * n + 1))+ 1];
    if (c === undefined)
    {return colors[1]}
    else    return c;
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