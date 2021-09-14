$(function(){
    console.log("ready");
    /* eq : 배열 접근법  children() : 자식들을 의미*/
    $("div").eq(0).children().css("color","red");
    
    $("#btn").click(function(){

        let chk = true;
        if(chk){

        }else{
            
        }
        chk = !chk;
        
    });
})