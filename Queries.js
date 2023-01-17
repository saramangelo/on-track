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
    return this.connection.promise().query("SELECT * FROM employees");
  }

  addDepartment(departmentName) {
    // this needs to have user be prompted to enter the name of the department and that department is added to the database
    return this.connection
      .promise()
      .query("INSERT INTO department (name) VALUES (?)", [departmentName]);
  }

  addRole(title, salary, departmentId) {
    // this needs to have user be prompted to enter the name, salary, and department for the role and that role is added to the database
    return this.connection
    .promise()
    .query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [title, salary, departmentId]);
  }

  addEmployee() {
    // this needs to have user be prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    return this.connection
      .promise()
      .query("INSERT INTO employee (first_name, last_name, role, manager) VALUES (?,?,?,?)");
  }

  updateEmployeeRole() {
    // this needs to have user be prompted to select an employee to update and their new role and this information is updated in the database
    return this.connection.promise().query("UPDATE employee SET ");
  }
}

module.exports = new Queries(connection);
