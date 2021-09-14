$(function(){

    $("#add_btn").click(function(){
        console.log("Add btn");
        let index = 0;

        let str = "<tr>";

        let name = $("#user_name").val();
        let phone = $("#user_phone").val();
        
        console.log(`${name} + ${phone}`);

        for (let i=0; i<4; i++) {
            str += "<td>&nbsp;</td>";
            
        }
        str +="</tr>";
        $("#table>tbody").append(str);
        console.log(`${$("#table tbody:nth-child(1)").append(name)}`);
    });
});