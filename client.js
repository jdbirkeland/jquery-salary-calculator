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
    // $(`#totalMonthly`).append(totalMonthly);
    $('#totalMonthly').on('click', '.fireButton', totalMonthly);
    $('#totalMonthly').on('click', '#addEmployeeButton', totalMonthly);
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
    // function deleteEmpFromArray() {

    //     let employee = {
    //         firstName: $('#firstIn').val(),
    //         lastName: $('#lastIn').val(),
    //         id: $('#idIn').val(),
    //         title: $('#titleIn').val(),
    //         annualSalary: $('#salaryIn').val()
    //     }
    //     console.log('In deleteEmpFromArray', employee);

    //     employeeList.splice(employee);

    // }
    // deleteEmpFromArray();

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
    console.log(employeeList);
    console.log(employeeList[0].annualSalary);

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
        $(`#test`).append('test')
    }
}



let totalMonthly = [];

function totalSalary() {
    console.log('in totalSalary');

    $( `#totalMonthly`).empty();

    // let employee = {
    //     annualSalary: $('#salaryIn').val()
    // }
    // console.log(employee);
   
    // let total=0; let i=employeeList.length; while(i--) total += employeeList[i];


    let total = 0;
    for (let i in employeeList) {
        console.log('in loooop');
        total+= employeeList[i];
    
    console.log(totalMonthly);
    
    // for (let employee of employeeList) {
    //     let total = 0;
        // total += employeeList[0].annualSalary;
    
        // console.log(employeeList[0].annualSalary);
                
    // }
    
    totalMonthly.push();
    console.log(total);

    $(`#totalMonthly`).append(totalMonthly);
}

totalSalary();
console.log('in totalSalary');

// found correct path to loop for total monthly

