'use strict';
// 띄운 공백을 찾아 붙힌 공백으로 바꿔주는 함수를 정의함.
   // 예시 : " " ---> ""
function m_trim(str){
    // 정규식표현 사용
    let ss = str.replace(/^\s+|\s|\s+$/g, "");
    console.log( ` ss = ${ss}`);
    return ss;
}

function exe() {
    // form 의 name 속성으로 접근 후 값을 가지고 오는방법.
    let str = document.form.u_value.value;
    console.log(`let str = ${str}`);
    let s = m_trim(str);
    console.log(` return : ${s}`);

    document.form.u_value.value = s;
    console.log(`${document.form.u_value.value = s}`);
}