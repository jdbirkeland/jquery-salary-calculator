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

    $('#totalMonthly').on('click', '.firedButton', totalSalary);
    $('#totalMonthly').on('click', '#addEmployeeButton', totalSalary);
    // $('#totalMonthly').append(totalSalary);
}
// Tried to make a function to delete employee info from array: 
// It kinda worked, just deleted all info rather then the selected one when clicked though
// 
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

    // Tried to create a new function to go in here that removes deleted employee from employeeList:
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

    $(this).closest('tr').remove();
}

function addEmployee() {
    console.log('add Employee');

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
    totalSalary();

    
    console.log(employeeList);
    console.log(employeeList[0].annualSalary);//testing to find this path value
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

// monthlySalaryDOM();

function totalSalary() {
    console.log('in totalSalary');

    let total = 0;
    for (let employee of employeeList) {
        let monthlyCosts = employee.annualSalary / 12;
        total += monthlyCosts;    

        if(total > 20000) {
            $('#totalMonthlyCosts').addClass('red');
       }  
   
       $('#totalMonthlyCosts').append(total);
   }


    
    $(`#totalMonthlyCosts`).text(total);
}

// Tried to create a function that would empty value from '#totalValue' and update it with new value.
// function monthlySalaryDOM() {
//     //clear dom of garbage employees
//     $('#totalMonthly').empty();

//     for (let employee of employeeList) {
//         const totalMonthlyDisplay = $(`
//         <tr>
//             <td>${formatCurrency(employee.annualSalary)}</td>
//             <td>${formatCurrency(employeeList[i].salary)}</td>
//             </tr>
//         `);
//     }
// }

function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(number);
};
