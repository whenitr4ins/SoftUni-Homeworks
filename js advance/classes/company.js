class Company {
    constructor() {
        this.departments = [];
    }
    addEmployee(name, salary, position, department) {
        if (!name || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        const newEmployee = { name, salary, position };
        this.departments[department].push(newEmployee);
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment() {
        let bestDepartmentName;
        let bestDepartmentSalary = 0;
        for (let department in this.departments) {
            let departmentSalaries = this.departments[department].map((employee) => employee.salary);
            let departmentAvgSalary =
                departmentSalaries.reduce((acc, salary) => acc + salary, 0 / departmentSalaries.length);

            if (departmentAvgSalary > bestDepartmentSalary) {
                bestDepartmentName = department;
                bestDepartmentSalary = departmentAvgSalary;
            }
        }
        let sortedEmployees = this.departments[bestDepartmentName].sort((a, b) => {
            if (a.salary == b.salary) return a.name.localeCompare(b.name);
            return b.salary - a.salary;
        });
        let result = [`Best Department is: ${bestDepartmentName}`, `Average salary: ${bestDepartmentSalary.toFixed(2)}`];

        sortedEmployees.forEach((employee) => {
            result.push(`${employee.name} ${employee.salary} ${employee.position}`);
        });


        return result.join('\n').toString().trim();
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
