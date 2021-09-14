function insert(){

    console.log('Hello!');
    
    // typeof -- > Object
    let table = document.getElementById('table');
    let user_name = document.getElementById('user_name');
    let user_phone = document.getElementById('user_phone');
    console.log(`${table} + ${user_name} + ${user_phone}`);

    let index = 0;
    // create element 
    let tr = document.createElement('tr');
    let td_index = document.createElement('td');
    let td_name = document.createElement('td');
    let td_phone = document.createElement('td');
    let td_del = document.createElement('td');

    td_index.innerHTML = ++index;
    td_name.innerHTML = user_name.value;
    td_phone.innerHTML = user_phone.value;

    console.log(`Name= ${td_name.innerHTML = user_name.value}`);

    tr.appendChild(td_index);
    tr.appendChild(td_name);
    tr.appendChild(td_phone);
    tr.appendChild(td_del);

    let create_delButton = document.createElement('input');
    create_delButton.type ="button";
    create_delButton.value="삭제";
    create_delButton.onclick = function () {
        table.deleteRow(this.rowIndex=2);
    }

    td_del.appendChild(create_delButton);

   let tbody = table.children[2];

    tbody.appendChild(tr);
}
