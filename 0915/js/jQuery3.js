$(function(){
    /*
    $("#r0").on("click",function(){
        
        let check = $("table tbody td:nth-child(3) input:checkbox")

        if($(this).is(":checked")){
            check.prop("checked",true);
        }else{
            check.prop("checked",false);
        }

    })
    */

    $("#table thead input:checkbox").click(function(){
        let rowIndex = $(this).parent(); // th
    
        let idx = $("#table thead tr th").index(rowIndex);
      
        let is_check = $("table tbody td:nth-child("+ `${idx+1}` +") input:checkbox");
       
        console.log(` is_check = ${idx}`);

        if(this.checked){
            is_check.prop("checked",true);
        }else{
            is_check.prop("checked",false);
        }
       
        /* 실용적이지 못하는 코드.

        switch (idx) {
            case 2:
               
                if(this.checked){
                    is_check.prop("checked",true);
                    console.log("Yes");
                }else{
                    is_check.prop("checked",false);
                }
                break;
            case 3:
                is_check.prop("checked",true);
                break;
            case 4:
                is_check.prop("checked",true);
                break;
            case 5:
                is_check.prop("checked",true);
                break;
            case 6:
                is_check.prop("checked",true);
                break;
        }
        */
    });
})
