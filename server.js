// List the dependencies here.
const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const util = require('util');

// Create the connection to MySQL WorkBench
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employee_DB'
});

connection.query = util.promisify(connection.query);

// Begin the application after establishing the connection.
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    initialAction();
})

// Give the user a pleasant welcome message.
console.table(
    "\n------------ EMPLOYEE TRACKER ------------\n"
)

// Ask the user initial action question to figure out what they would like to do.
const initialAction = async () => {
    try {
        let answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View Employees',
                'View Departments',
                'View Roles',
                'Add Employees',
                'Add Departments',
                'Add Roles',
                'Update Employee Role',
                'Exit'
            ]
        });
        switch (answer.action) {
            case 'View Employees':
                employeeView();
                break;

            case 'View Departments':
                departmentView();
                break;

            case 'View Roles':
                roleView();
                break;

            case 'Add Employees':
                employeeAdd();
                break

            case 'Add Departments':
                departmentAdd();
                break

            case 'Add Roles':
                roleAdd();
                break

            case 'Update Employee Role':
                employeeUpdate();
                break

            case 'Exit':
                connection.end();
                break;
        };
    } catch (err) {
        console.log(err);
        initialAction();
    };
}

// Selection to view all of the employees.
const employeeView = async () => {
    
}

// Selection to view all of the departments.
const departmentView = async () => {
    
}

// Selection to view all of the roles.
const roleView = async () => {
   
}

// Selection to add a new employee.
const employeeAdd = async () => {
   
}

// Selection to add a new department.
const departmentAdd = async () => {
   
}

// Selection to add a new role.
const roleAdd = async () => {
   
}

// Selection to update a roll for a specific employee.
const employeeUpdate = async () => {
    
}