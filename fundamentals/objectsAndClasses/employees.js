function solve(array) {

    for (let employeeName of array) {
        let employee = { name: employeeName, personalNum: employeeName.length };
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }

}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])