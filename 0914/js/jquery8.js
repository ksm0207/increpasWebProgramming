$(function(){
    let str = "";

    // 태그를 배열로 가져오는법.
    let array = $(".test,span,div");

    for (var i=0; i<array.length; i++) {
        str += array.eq(i).text() + "\n";
    }

    /*
        for - each 
        
    $(".test,span,div").each(function(){
        str+= $(this).text()+"<br>";
        
    });
    */

    alert(str);
});