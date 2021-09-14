$(function(){
    let ar = $("#box1").find(":radio");
    console.log(`${ar.length}`);

    $(ar[ar.length-1]).prop("checked",true);
    $(ar[ar.length-1]).next().text("Private");
});

/* input[name=gender]:radio"*/