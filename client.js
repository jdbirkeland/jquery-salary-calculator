console.log('js');

let employeeList = [];
let totalMonthly = [];

$(readyTimes);

function readyTimes() {
    console.log('jquery locked and loaded!');
    //click listeners
    $('#addEmployeeButton').on('click', addEmployee);
    //dynamic click listener
    // $(existsNow).on('click', existsLater, go)
    $('#targetOutput').on('click', '.firedButton', deleteEmployee);
    // $(`#totalMonthly`).append(totalMonthly);

    $('#totalMonthly').on('click', '.firedButton', totalSalary);
    $('#totalMonthly').on('click', '#addEmployeeButton', totalSalary);
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
            <td>${formatCurrency(employee.annualSalary)}</td>
            
            <td><button class="btn btn-danger firedButton">Delete</button></td>
        </tr>
        `);

        $('#targetOutput').append(empRowDisplay);

    }
}

function totalSalary() {
    console.log('in totalSalary');

    console.log(totalMonthly);

    let total = 0;
    for (let employee of employeeList) {
        console.log('in loooop');
        total += employeeList[i].annualSalary;
// let employee = {
//     annualSalary: $(`#salaryIn`).val()}

    // for (let total of employeeList) {
        // let total = 10;
        // total += employeeList;

    //     total = 0;
    // for (let i of employeeList) {
    //     total += employee[i].annualSalary;

        
        console.log(employeeList);
        // $('#test').append(totalMonthlyDisplay);
        totalMonthly.push(total);
        console.log(total);
        
        monthlySalaryDOM();
        return total;
    }
}

totalSalary();
console.log('in totalSalary');

function monthlySalaryDOM() {
    //clear dom of garbage employees
    $('#totalMonthly').empty();

    for (let employee of employeeList) {
        const totalMonthlyDisplay = $(`
        <tr>
            <td>${formatCurrency(employee.annualSalary)}</td>
            <td>${formatCurrency(employeeList[i].salary)}</td>
            </tr>
        `);

        $(`#totalMonthly`).append('Where are you?');

    }
}

function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    }).format(number);
  };

//   found correct path to loop for total monthly
// let employee = {
//     annualSalary: $('#salaryIn').val()
// }
// console.log(employee);

// let total=0; let i=employeeList.length; while(i--) total += employeeList[i];