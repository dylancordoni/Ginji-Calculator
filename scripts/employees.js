
let employeeCount = 4;
const parentDiv = document.getElementById('employees');
document.getElementById('add-server-button').addEventListener('click', function(){

    employeeCount++;

    const employeeDiv = document.createElement('div');
    parentDiv.appendChild(employeeDiv);
    employeeDiv.className = 'employee-info';
    employeeDiv.id = `employee${employeeCount}`

    employeeDiv.innerHTML = `
    <div class="label-input">
        <label for="employee${employeeCount}-name">Name:</label>
        <input type="text" id="employee${employeeCount}-name" name="employee${employeeCount}-name" class="employee-name">
    </div>
    <div class="label-input">
        <label for="employee${employeeCount}-hours">Hours:</label>
        <input type="text" id="employee${employeeCount}-hours" name="employee${employeeCount}-hours" class="employee-hour">
    </div>
    <div class="label-input">
        <label for="employee${employeeCount}-percentage">%:</label>
        <input type="text" id="employee${employeeCount}-percentage" name="employee${employeeCount}-percentage" class="employee-percentage">
    </div>`;
});

document.getElementById('remove-server-button').addEventListener('click', function() {
    if(employeeCount > 0) {
        const lastServer = document.getElementById(`employee${employeeCount}`);
        lastServer.remove();
        employeeCount--;
    }
});
