console.log('js');
let employeeList = [];

$(readyTimes);

function readyTimes() {
    console.log('jquery locked and loaded!');

    //click listeners
    $('#addEmployeeButton').on('click', addEmployee);
    //dynamic click listener
    // $(existsNow).on('click', existsLater, go)
    $('#targetOutput').on('click', '.firedButton', deleteEmployee);
}

// function deleteEmpFromArray() {
//     i=0;
//     for (let i= employeeList.length; i--;) {
//         delete employeeList[i];
//         console.log('in deleteEmpFromArray');
// }
// }
// deleteEmpFromArray();

function deleteEmployee() {
    console.log('clicked sell');
// create a new function to go in here that removes deleted employee from employeeList
    // employeeList = employeeList.filter(n => n !== employeeList);
    // console.log(employeeList);
    // let deleteEmpInfo = employeeList.splice(i,1);
    // console.log(deleteEmpInfo);
    // delete employeeList[i];


// deleteEmpFromArray()
    // $(this).parent().parent().remove();
    $(this).closest('tr').remove();
}

function addEmployee() {
    console.log('add Employee');
    // get inputs...

    let employee = {
        firstName: $('#firstIn').val(),
        lastName: $('#lastIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        annualSalary: $('#salaryIn').val()
    }
    console.log(employee);


    employeeList.push(employee);

    putOnDOM();

    employee = {
        firstName: $('#firstIn').val(''),
        lastName: $('#lastIn').val(''),
        id: $('#idIn').val(''),
        title: $('#titleIn').val(''),
        annualSalary: $('#salaryIn').val('')
    }
}

function putOnDOM() {
    //clear dom of garbage employees
    $('#targetOutput').empty();

    for (let employee of employeeList) {
        const empRowDisplay = $(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            
            <td><button class="btn btn-danger firedButton">Delete</button></td>
        </tr>
        `);

        $('#targetOutput').append(empRowDisplay);
    }
}

function totalSalary() {

    total = 0;
    for (let employee of employeeList) {
        totalMonthly += employee.annualSalary / 12;

    }
}

totalSalary();