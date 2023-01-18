-- WRITE THESE IN WORKBENCH TO MAKE SURE THEY WORK BEFORE INSERTING INTO JS

-- view all departments
SELECT * FROM department;

-- view all roles
USE employees_db;

SELECT role.title, role.id, role.salary, department.name AS department_name FROM role
LEFT JOIN department
ON role.department_id = department.id;

-- view all employees
-- employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.
SELECT
-- need two joins
-- department name onto role
-- department name onto employee
SELECT employee.id, employee.first_name, employee.last_name, manager.first_name AS manager, role.title, role.salary FROM employee
LEFT JOIN employee manager ON manager.id = employee.manager_id
LEFT JOIN role
ON employee.role_id = role.id;

-- add department
INSERT INTO department (name) VALUES (?);

-- add role
--  name, salary, and department for the role and that role is added to the database.
INSERT INTO role 

-- add employee
INSERT INTO employee (first_name) VALUES (?);

-- update employee role
UPDATE employee SET "column name" = "value..."

-- JOINS

SELECT * 
FROM role
JOIN department ON role.department_id = department.id






