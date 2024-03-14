function generateReport() {
    let checked = Array.from(document.querySelectorAll('input[type=checkbox]'));
    let rows = Array.from(document.querySelectorAll('tbody tr'));

    function createReportObject(row, checkedCheckboxes) {
        let obj = {};
        checkedCheckboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                obj[checkbox.name] = row.children[index].textContent;
            }
        });
        return obj;
    }

    function processRows(rows, checkedCheckboxes) {
        return rows.map(row => createReportObject(row, checkedCheckboxes));
    }

    let result = processRows(rows, checked);
    document.getElementById('output').value = JSON.stringify(result);
}