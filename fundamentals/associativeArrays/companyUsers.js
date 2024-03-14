function solve(arr) {
    let companies = {};

    for (let input of arr) {
        let [comapanyName, employeeId] = input.split(' -> ');

        if (!companies.hasOwnProperty(comapanyName)) {
            companies[comapanyName] = [];
        }
        if (!companies[comapanyName].includes(employeeId)) {
            companies[comapanyName].push(employeeId)
        }
    }

    let sortedCompany = Object.keys(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (let company of sortedCompany) {
        console.log(company);
        for (let employeeId of companies[company]) {
            console.log(`-- ${employeeId}`);
        }
    }

}
solve(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);