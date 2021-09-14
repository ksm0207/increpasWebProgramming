// JQeury Version
$(function(){

  $("#h1_btn").click(function(){
     $("h1").css("color","red");
     $("h1").text("H1 요소가 바뀌었네요!");     
  });

  $("#h2_btn").click(function(){
    $("h2").css("color","blue");
    $("h2").text("H2 요소가 바뀌었네요!");     
 });

});

// JavaScript Version - in JQuery
function h1_color(){
    $("h1").css("color","red");
    $("h1").text("H1 요소가 바뀌었네요!");
}

function h2_color() {

    $("h2").css("color","blue");
    $("h2").text("H2 요소가 바뀌었네요!~");
}

