// hold classes with methods to run queries
const db = require('./connection');

class Queries {

    constructor(connection){
        this.connection = connection;
    }

    // methods

    viewAllDepartments(data) {
        // this needs to present a formatted table showing department names and department ids
        return this.connection.promise().query('', data)
    };

    viewAllRoles(data) {
        // this needs to present the job title, role id, dept that role belongs to, and salary for that role
    };

    viewAllEmployees(data) {
        // this needs to present a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    };

    addDepartment(data) {
        // this needs to have user be prompted to enter the name of the department and that department is added to the database
    };

    addRole(data) {
        // this needs to have user be prompted to enter the name, salary, and department for the role and that role is added to the database
    };

    addEmployee(data) {
        // this needs to have user be prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
        return this.connection.promise().query('INSERT INTO employee (first_name) VALUES (?)', data)
    };

    updateEmployeeRole(data){
        // this needs to have user be prompted to select an employee to update and their new role and this information is updated in the database
        return this.connection.promise().query('UPDATE employee SET ')
    };
}




module.exports = new Queries(db);