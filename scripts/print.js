document.getElementById('print').addEventListener('click', function() {
    const printContent = document.getElementById('output');
    const printWindow = window.open('','', 'height=600, width=800');
    printWindow.document.write('<html><head><link rel="stylesheet" href="print.css" media="print"><title>Print</title></head><body>');
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write('</body></html>');
    //printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
});
