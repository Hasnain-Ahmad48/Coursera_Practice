const employees = [
  {
    id: 1,
    name: "john Doe",
    age: 30,
    department: "IT",
    salary: 50000,
    // spacialization: "javascript",
  },
  {
    id: 2,
    name: "Alice Smith",
    age: 28,
    department: "HRE",
    salary: 45000,
    spacialization: "Python",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    department: "Finance",
    salary: 60000,
    spacialization: "Java",
  },
];

// Function to display all employees
function displayEmployees() {
  const totalEmployees = employees
    .map(
      employee =>
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    )
    .join("");
  document.getElementById("employeesDetails").innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
  const totalSalaries = employees.reduce(
    (acc, employee) => acc + employee.salary,
    0
  );
  alert(`total salary:$${totalSalaries}`);
}

function displayHREmployees() {
  const hrEmployees = employees.filter(
    employee => employee.department === "HR"
  );
  const hrEmployeesDisplay = hrEmployees
    .map(
      (employee, index) =>
        `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    )
    .join("");
  document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(employee => employee.id === employeeId);
  if (foundEmployee) {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
  } else {
    document.getElementById("employeesDetails").innerHTML =
      "no employee has been found with this ID";
  }
}

function findEmployeeBySpelizayion() {
  const foundEmployee = employees.find(
    employee => employee.spacialization === "javascript"
  );
  console.log(foundEmployee);
  if (foundEmployee) {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.spacialization}</p>`;
  }
  else{
    document.getElementById("employeesDetails").innerHTML=`<p>User not found</p>`
  }
}
