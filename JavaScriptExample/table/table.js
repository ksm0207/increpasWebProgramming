function insert(){

    console.log('Hello!');
    
    // typeof -- > Object
    let table = document.getElementById('table');
    let user_name = document.getElementById('user_name');
    let user_phone = document.getElementById('user_phone');
    // console.log(`${num1} + ${num2} = ${num1+num2} 입니다.`);
    console.log(`${table} + ${user_name} + ${user_phone}`);

    let index = 0;
    
    let tr = document.createElement('tr');
    let td_index = document.createElement('td');
    let td_name = document.createElement('td');
    let td_phone = document.createElement('td');

    td_index.innerHTML = ++index;
    td_name.innerHTML = user_name.value;
    td_phone.innerHTML = user_phone.value;

    console.log(`Name= ${td_name.innerHTML = user_name.value}`);

   
    tr.appendChild(td_index);
    tr.appendChild(td_name);
    console.log(`tr. appendChild(td_name) = ${tr.appendChild(td_name)}`);
    tr.appendChild(td_phone);

   let tbody = table.children[2];

    tbody.appendChild(tr);
}