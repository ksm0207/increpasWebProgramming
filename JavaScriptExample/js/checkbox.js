$(function(){
    console.log("ready");

    $(".checkbox_group").on("click","#check_all",function(){
              
        let checked = $(this).is(":checked");
        console.log(` this : checkbox_group :  ${checked}`);
        /* children() : 선택한 요소의 자식(child) 요소를 모두 선택한다..*/
        
        /* 전체선택이 체크가 되어있는지 if문으로 구별하기.*/
        if (checked) {
           $(".checkbox_group").find("input").prop("checked",true);
        
        }else{
            $(".checkbox_group").find("input").prop("checked",false);
        }

    }); // end of checkbox_group function

    $(".checkbox_group").on("click",".normal", function(){

        let check = true;

        $(".normal").each(function(){
            check = check && $(this).is(":checked");
            console.log(check);
        });
        console.log("Line 29");
        $("#check_all").prop("checked",check);

    });
});