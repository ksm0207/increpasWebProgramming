function exe() {

    // 현재 문서에서 아이디가 v1인 요소인 값 가져오기 자바스크립트 Version
    let id1 = document.getElementById('v1').value;
    console.log(` get id = JavaScript Version  ${id1}`);

    // JQuery Version
    // css의 선택자 개념으로 요소를 선택할 수있고
    // val() 메소드로 값을 가지고올수 있음 (JQuery 방식)
    let id2 = $("#v1").val(); 
    console.log(` get id = JQuery Version  ${id2}`);

}