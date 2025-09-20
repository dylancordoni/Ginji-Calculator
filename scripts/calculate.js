document.getElementById('calculate').addEventListener('click', function() {
    const servers = document.querySelectorAll('#employees .employee-info');
    const creditTips = document.getElementById('credit-tips').value ? document.getElementById('credit-tips').value : 0;
    const cashTips = document.getElementById('cash-tips').value ? document.getElementById('cash-tips').value : 0;
    const appTips = document.getElementById('app-tips').value ? document.getElementById('app-tips').value : 0;
    

    const totalTips = parseInt(creditTips) + parseInt(cashTips) + parseInt(appTips);
    const adjustedServerInfo = {};
    servers.forEach((server, index) => {
        const info = server.children;   //these are the 'label-input's
        adjustedServerInfo[info[0].querySelector('input').value] = info[1].querySelector('input').value * (info[2].querySelector('input').value / 100);
    });

    const kitchenTips = totalTips * .2;
    const serverTips = totalTips - kitchenTips;

    const payoutsDiv = document.createElement("div");
    payoutsDiv.className = 'payouts-div';

    let totalHours = 0;

    Object.keys(adjustedServerInfo).forEach((serverName, index) => {
        console.log("name: " + serverName);
        console.log("adjusted hours: " + adjustedServerInfo[serverName]);
        console.log(adjustedServerInfo[serverName] + totalHours);
        totalHours = totalHours + parseInt(adjustedServerInfo[serverName]);
        console.log("tptal hours: " + totalHours);
    })
    
    Object.keys(adjustedServerInfo).forEach((serverName, index) => {
        payoutsDiv.innerHTML = `
        <p>${serverName}'s tips: ${(parseInt(adjustedServerInfo[serverName].value) / totalHours) * serverTips} </p>
        `;
        //console.log((parseInt(adjustedServerInfo[serverName].value) / totalHours) * serverTips)
        console.log(adjustedServerInfo[serverName].value);
    });
});