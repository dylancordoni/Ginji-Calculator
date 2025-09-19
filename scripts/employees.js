
let employeeCount = 4;
const parentDiv = document.getElementById('employees');
document.getElementById('add-server-button').AddEventListener('click', function(){

    employeeCount++;

    const employeeDiv = document.createElement('div');
    parentDiv.appendChild(employeeDiv);
    employeeDiv.className = 'employee-info';

    employeeDiv.innerHTML = ' 
    <div class="labe-input">
        <label for="employee${employeeCount}-name">Name:</label>
        <input type="text" id="employee${employeeCount}-name" name="employee${employeeCount}-name">
    </div>
    <div class="labe-input">
        <label for="employee${employeeCount}-hours">Hours:</label>
        <input type="text" id="employee${employeeCount}-hours" name="employee${employeeCount}-hours">
    </div>
    <div class="labe-input">
        <label for="employee${employeeCount}-percentage">%:</label>
        <input type="text" id="employee${employeeCount}-percentage" name="employee${employeeCount}-percentage">
    </div>';

});
