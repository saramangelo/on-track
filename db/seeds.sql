USE employees_db;

INSERT INTO department (name)
("Management"),
("Human Resources"),
("Engineering"),
("Finance"),
("Sales"),
("IT");

INSERT INTO role (title, salary, department_id)
("Manager", 150000, 1),
("Recruiter", 50000, 2),
("Frontend Developer", 45000, 3),
("Backend Developer", 55000, 3),
("UX/UI Developer", 40000, 3),
("Analyst", 100000, 4);
("Accountant", 75000, 4),
("Salesperson", 65000, 5),
("Technician", 45000, 6);

-- manager_id?
INSERT INTO employee (first_name, last_name, role_id, manager_id)
("Sara", "Angelo", 4, )

