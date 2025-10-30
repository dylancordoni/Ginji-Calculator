document.getElementById('calculate').addEventListener('click', function() {
    const currentDate = new Date();

    const servers = document.querySelectorAll('#employees .employee-info');
    const creditTips = document.getElementById('credit-tips').value ? document.getElementById('credit-tips').value : 0;
    const cashTips = document.getElementById('cash-tips').value ? document.getElementById('cash-tips').value : 0;
    const appTips = document.getElementById('app-tips').value ? document.getElementById('app-tips').value : 0;
    
    const totalTips = parseFloat(creditTips) + parseFloat(cashTips) + parseFloat(appTips);
    const adjustedServerInfo = {};
    servers.forEach((server, index) => {
        const info = server.children;   //these are the 'label-input's
        if(info[0].querySelector('input').value){
            adjustedServerInfo[info[0].querySelector('input').value] = info[1].querySelector('input').value * (info[2].querySelector('input').value / 100);
        }
    });
    
    const kitchenTips = parseFloat(totalTips * .2).toFixed(2);
    const serverTips = totalTips - kitchenTips;

    const date = document.getElementById("date")
    const payoutsDiv = document.getElementById("tip-output");
    const tipReport = document.getElementById("tip-report");

    tipReport.innerHTML = "";
    payoutsDiv.innerHTML = "";

    date.innerHTML = `${currentDate}<br><br>`;

    let totalHours = 0;

    Object.keys(adjustedServerInfo).forEach((serverName, index) => {
        totalHours += parseFloat(adjustedServerInfo[serverName]);

    })
    
    Object.keys(adjustedServerInfo).forEach((serverName, index) => {
        payoutsDiv.innerHTML += `
        <p>${serverName}'s tips: ${((parseFloat(adjustedServerInfo[serverName]) / totalHours) * serverTips).toFixed(2)} </p>
        `;
    });
    payoutsDiv.innerHTML += `
        <p>Kitchen tips: ${kitchenTips}</p>
    `;

    if(creditTips && creditTips != 0) {
        tipReport.innerHTML += `
        <p>Credit Tips: ${creditTips}</p>
        `
    }

    if(cashTips && cashTips != 0) {
        tipReport.innerHTML += `
        <p>Cash Tips: ${cashTips}</p>
        `
    }

    if(appTips && appTips != 0) {
        tipReport.innerHTML += `
        <p>App Tips: ${appTips}</p>
        `
    }

    tipReport.innerHTML += `
    <p>Total Tips: ${totalTips}<br><br></p>
    `


    const printButton = document.getElementById('print');
    printButton.style.visibility = 'visible';
});