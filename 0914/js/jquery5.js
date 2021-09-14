$(function(){

    console.log("JQuey Ready !");
    $("#btn1").bind("click",function(){
        $("#box").css("backgroundColor","red");
    });

    $("#btn2").bind("click",function(){
        $("#box").css("backgroundColor","green");
    });

    $("#btn3").bind("click",function(){
        $("#box").css("backgroundColor","blue");
        $("#btn1").unbind("click"); // #btn1 바인딩 해제
    });
})