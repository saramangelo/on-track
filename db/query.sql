-- WRITE THESE IN WORKBENCH TO MAKE SURE THEY WORK BEFORE INSERTING INTO JS

-- view all departments
SELECT * FROM department;

-- view all roles
USE employees_db;

SELECT role.title, role.id, role.salary, department.name AS department_name FROM role
LEFT JOIN department
ON role.department_id = department.id;

-- view all employees
SELECT
-- need two joins
-- department name onto role
-- department name onto employee

-- add department
INSERT INTO department (name) VALUES (?);

-- add role
INSERT INTO role 

-- add employee
INSERT INTO employee (first_name) VALUES (?);

-- update employee role
UPDATE employee SET "column name" = "value..."

-- JOINS

SELECT * 
FROM role
JOIN department ON role.department_id = department.id






