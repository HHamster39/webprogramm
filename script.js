
$(".circle").css("background-color");
document.getElementsByClassName("circle")[0].style.backgroundColor;

$(".circle").css({
     "background-color":"orange",
     "border-radius":"15%"
})
 
     
 $(".circle:nth-child(2n)").css({
    "background-color":"green"
 });
 $(".circle:nth-child(2n+1)").css({
    "background-color":"cyan"
 });

 $(".circle:nth-child(1n)").css({
    "background-color":"pink"
 });
 $(".circle:last-child").css({
    "background-color":"black"
 });    
 $(".circle").click(function (event) { 
    $(event.target).toggleClass("lime");
     
 });  
 $("circle:nth-child(2n+1)").click(function (event) { 
    $(event.target).toggleClass("odd"); 
     
 });
//    for (let i = 0; i<document.getElementsByClassName("circle").length; i++){
//      document.getElementsByClassName("circle")[i].style.backgroundColor="orange";
//      document.getElementsByClassName("circle")[i].style.borderRadius="15%";
  
   










  