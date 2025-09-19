document.getElementById('calculate').addEventListener('click', function() {
    const servers = document.querySelectorAll('#employees .employee-info');
    const adjustedServerInfo = {};
    servers.forEach((server, index) => {
        const info = server.children;   //these are the 'label-input's
        adjustedServerInfo[info[0].querySelector('input').value] = info[1].querySelector('input').value * (info[2].querySelector('input').value / 100);
        //adjustedServerInfo[server.children.children[0]]

    });
    console.log(adjustedServerInfo);
});