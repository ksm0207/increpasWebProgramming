$(function(){
    console.log("ready");

    $("#btn").on("click",function(){

        $("#box").draggable();
        $("#box").css({display: "block"});
       
    });

    $("#close_btn").on("click",function(){

       
        $("#box").css({display: "none"});
       
    });
});