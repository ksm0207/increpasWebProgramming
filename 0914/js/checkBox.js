/*
$(function(){
    $("#all").click(function(){
        let check = $("#all").prop("checked");
        $("input[type=checkbox]").prop("checked",true);
        console.log(`전체선택 : ${check}`);
        $("input[type=checkbox]").next().text("Success !!");
        
        if(!check){
            $("input[type=checkbox]").prop("checked",false);
            $("input[type=checkbox]").next().text("전체선택");
            console.log(`전체해제 : ${!check}`);
        }
    });
});
*/

$(function(){
    $("#all").click(function(){

        let check = $("#table").find(":checkbox");
        
        if(this.checked){
            check.prop("checked",true);
        }else{
            check.prop("checked",false);
        }
        console.log(`${$(check[check.length]).prop("checked",true)}`);

    });
});