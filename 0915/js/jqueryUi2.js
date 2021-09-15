$( function() {
    $( "#dialog" ).dialog();

    $("#ok_btn").bind("click",function(){
        $("#dialog").dialog("close");
    })
});