// $("li").click(function(){
// // //one method to work :
// //    if($(this).css("color") === "rgb(128, 128, 128)"){
// //         $(this).css("color","black");
// //         $(this).css("text-decoration" , "none");
// //     }
// // else{
// //     $(this).css("color","grey");
// //     $(this).css("text-decoration" , "line-through");
// // }
// // //method 2 create a css class and toggle it
// $(this).toggleClass("completed");
// }
// )

// $("span").click(function(event){
//     // $(this).parent().remove();
//     //if only remove is used it delets only X of the span tag with parent().remove() the parent elemet i.e li is deleted 
//     //To add a fade out option and than delete the li element we nee to use the following;
//     $(this).parent().fadeOut(500,function(){
//         $(this).remove(); 
//         //here in ths line $(this) == ($(this).parent) as it is acted on the parent and 500 is the time to fade out the element
//     })
//     event.stopPropagation();
//     //without theabove line the click function will be acted upon all other 
//     //elemets of the document i.e all parents her span-->li-->ul-->body
// })

// // the above code works for existing elements if we need to add dynamic functionality i.e add to list and delete we need to use 
// //".on()" instead of ".click()"" and add event to the whole block of ul because it tells the compiler to add functionality to all
// //potenetial future elements i.e. new "li" within "ul"

$("ul").on("click","li",function(){  //tells compiler to add event to all of "ul" and execute function on click of "li"
$(this).toggleClass("completed");})

$("ul").on("click", "span" ,function(event){
        $(this).parent().fadeOut(500,function(){
            $(this).remove(); })
        event.stopPropagation();
    })

$("input").keypress(function(event){
    if( event.which == 13){ //event which stores holds the value in keyCode and 13 is the vlue for "enter" i.e this event checks 
    //if we have pressed enter key
    var addToDo =$(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash' /></span>" + addToDo +"</li>");

    }
})

$("#fa-plus").click(function(){
$("input").fadeToggle();
});