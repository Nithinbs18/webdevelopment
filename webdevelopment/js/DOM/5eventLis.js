var p1b = document.getElementById("p1but");
var p2b = document.getElementById("p2but");
var reset = document.getElementById("reset");
var win = document.getElementById("wins");
var p1S = document.getElementById("p1S");
var p2S = document.getElementById("p2S");
var input = document.getElementById("maxs");

var p1Sc = 0;
var p2Sc = 0;
var mSc =5;
var gameover = false;

input.addEventListener("change", function(){
    alert("change");
    mSc= input.value;
    win.textContent=mSc;
})

p1b.addEventListener("click", function(){
    if(!gameover){
    if(p1Sc == mSc){
        p1S.style.color = "red";
        alert("Player 1 wins!!")
        gameover = true;
    }
    else{
        p1Sc++;
        p1S.textContent = p1Sc;
    }
    }
});

 p2b.addEventListener("click", function(){
    if(!gameover){
        if(p2Sc == mSc){
            p2S.style.color = "red";
            alert("Player 2 wins!!")
            gameover = true;
        }
        else{
            p2Sc++;
            p2S.textContent = p2Sc;
        }
        }
    });

reset.addEventListener("click", function(){
    // document.location.reload(); // relads the whole page
    p1Sc = 0;
    p2Sc = 0;
    gameover = false;
    p1S.textContent = p1Sc;
    p2S.textContent = p2Sc;
    p1S.style.color = "black";
    p2S.style.color = "black";
        });