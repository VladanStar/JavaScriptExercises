$(document).ready(function () {

    $.getJSON("./js/employee.json",function(data){
        var employee_data ="";
        $.each(data, function(key, value){
            employee_data += '<tr>';
            employee_data += '<td>'+ value.id +'</td>';
            employee_data += '<td>'+ value.name +'</td>';
            employee_data += '<td>'+ value.club +'</td>';
            employee_data += '<td>'+ value.position +'</td>';
            employee_data += '<td>'+ value.country +'</td>';
            employee_data += '<td>'+ value.age +'</td>';
            employee_data += '</tr>';
        });
        $('#employee_table').append(employee_data);
    })
});