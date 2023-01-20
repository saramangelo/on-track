
USE employees_db;

INSERT INTO department (name)
VALUES
("Management"),
("Human Resources"),
("Engineering"),
("Finance"),
("Sales"),
("IT");

INSERT INTO role (id, title, salary, department_id)
VALUES
(1, "Manager", 150000, 1),
(2, "Recruiter", 50000, 2),
(3, "Frontend Developer", 45000, 3),
(4, "Backend Developer", 55000, 3),
(5, "UX/UI Developer", 40000, 3),
(6, "Analyst", 100000, 4),
(7, "Accountant", 75000, 4),
(8, "Salesperson", 65000, 5),
(9, "Technician", 45000, 6);

-- manager_id?
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, "Sara", "Angelo", 4, null),
(2, "Brad", "Pitt", 5, 1),
(3, "Keanu", "Reeves", 4, 1);


