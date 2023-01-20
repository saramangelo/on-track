// hold classes with methods to run queries
const connection = require("./db/connection");

class Queries {
  constructor(connection) {
    this.connection = connection;
  }

  // methods

  viewAllDepartments() {
    console.log()
    // this needs to present a formatted table showing department names and department ids
    return this.connection.promise().query("SELECT * FROM department");
  }

  viewAllRoles() {
    // this needs to present the job title, role id, dept that role belongs to, and salary for that role
    return this.connection.promise().query(`
    SELECT role.title, role.id, role.salary, department.name AS department_name FROM role
    LEFT JOIN department
    ON role.department_id = department.id`);
  }


  viewAllEmployees() {
    // this needs to present a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    return this.connection.promise().query(

    `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;`
    );
  }


  addDepartment(departmentName) {
    // this needs to have user be prompted to enter the name of the department and that department is added to the database
    return this.connection
      .promise()
      .query("INSERT INTO department (name) VALUES (?)", [departmentName]);
  }

  addRole(title, salary, departmentChoices) {
    // this needs to have user be prompted to enter the name, salary, and department for the role and that role is added to the database
    return this.connection
    .promise()
    .query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [title, salary, departmentChoices]);
  }

  addEmployee(first_name, last_name, role, manager) {
    // this needs to have user be prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    return this.connection
      .promise()
      .query("INSERT INTO employee (first_name, last_name, role, manager) VALUES (?,?,?,?)", [first_name, last_name, role, manager]);
  }

  updateEmployeeRole(employeeId, roleId) {
    // this needs to have user be prompted to select an employee to update and their new role and this information is updated in the database
    return this.connection.promise().query("UPDATE employee SET role_id = ? WHERE employee.id = ?", [roleId, employeeId]);
  }
}

module.exports = new Queries(connection);
