$(function(){
    $("#btn").click(function(){
        console.log("Click");
        let list = "";
        $("li").each(function(){
            list+= $(this).text()+"<br>";
            console.log(`${$(this).text()}`);
        })
        $( "#box" ).html(list);
     });
    
});
