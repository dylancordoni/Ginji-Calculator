document.getElementById('print').addEventListener('click', function() {
    const printContent = document.getElementById('output');
    const printWindow = window.open('','', 'height=600, width=800');

    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(printContent);
    printWindow.document.write('</body></html>');
    //printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    //printWindow.close();
});
