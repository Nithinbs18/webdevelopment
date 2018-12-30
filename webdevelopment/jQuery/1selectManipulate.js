//Make all div have purple background
$("div").css("background","purple");
//div with class highlight has 200px width
$(".highlight").css("width","200px");
//div with id third has border orange; there are 3 ways to do it
//1.
// $("#third").css("borderColor","orange");
// $("#third").css("borderStyle","solid");
//2.
var border = { borderColor:"white",
                borderStyle:"solid"}
$("#third").css(border);
//3.
$("#third").css("borderColor","red",
                "borderStyle","solid");
//select first div and change it to pink color       
$("div:first").css("color","pink")

