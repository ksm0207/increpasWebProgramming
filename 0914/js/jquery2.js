// window.onload 와 같은 기능을 제이쿼리로 구현해보기.

/* 1번 방법

$(document).ready(function(){
    alert("Test");
});

*/

/* 1번 방법을 더 개선한 방법. - 익명함수로 실행하기 (코드가 줄어들었음)  */
$(function(){
    alert("Hello Jquery");
});
