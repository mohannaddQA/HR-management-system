"use strict";
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let employeeID, fullName, department, level, img, salary;

let employeesData = [];

function Employee(employeeID, fullName, department, level, img) {
  this.employeeID = 0;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.img = img;
  this.salary = 0;
  employeesData.push(this);
}

Employee.prototype.salaryAfterTax = function () {
  if (this.level === "Senior") {
    this.salary = random(1500, 2000);
    this.salary = this.salary - this.salary * 0.075;
  } else if (this.level === "Mid-Senior") {
    this.salary = random(1000, 1500);
    this.salary = this.salary - this.salary * 0.075;
  } else if (this.level === "Junior") {
    this.salary = random(500, 1000);
    this.salary = this.salary - this.salary * 0.075;
  }
  return this.salary;
};

Employee.prototype.idGenerator = function () {
  this.employeeID = random(1000, 9999);
  return this.employeeID;
};

Employee.prototype.render = function () {
  // ******** creating a card containor in the cards section*********//////

  const cardsContainor = document.getElementById("cardsSection");
  const employeeCardElement = document.createElement("div");
  cardsContainor.appendChild(employeeCardElement);
  // ******** adding needed information to my card*********//////
  const idElement = document.createElement("h4");
  idElement.id = "employeeId";
  idElement.textContent = `Emplooyee ID: ${this.employeeID}`;
  cardsContainor.appendChild(idElement);

  const imgElement = document.createElement("img");
  imgElement.src = this.img;
  imgElement.id = "employeeImg";
  cardsContainor.appendChild(imgElement); // notice that the append comes at last so that it reads all attributes before appending

  const departmentElement = document.createElement("h5");
  departmentElement.id = "employeeDepartment";
  departmentElement.textContent = `Department: ${this.department}`;
  cardsContainor.appendChild(departmentElement);

  const levelElement = document.createElement("h5");
  levelElement.id = "employeelevel";
  levelElement.textContent = `level: ${this.level}`;
  cardsContainor.appendChild(levelElement);

  const salaryElement = document.createElement("h5");
  salaryElement.id = "employeeSalary";
  salaryElement.textContent = `Department: ${this.salary}`;
  cardsContainor.appendChild(salaryElement);
};

function handleSubmit(event) {
  event.preventDefault();
  let fullName = event.target.Name.value;
  let department = event.target.department.value;
  let level = event.target.level.value;
  let img = event.target.imgURL.value;

  let newEmployee = new Employee(fullName, department, level, img);
  newEmployee.idGenerator();
  newEmployee.salaryAfterTax();
  newEmployee.render();
}
let formElement = document.getElementById("employeesForm");
formElement.addEventListener("submit", handleSubmit);

// ****************************old version*******************************
// Employee.prototype.render = function () {
//   document.write("<br />");
//   document.write(
//     `full name: ${employeesData.fullName} ||| salary :${employeesData.salary} JD`
//   );
//   document.write("<br />");
//   document.write("<br />");
// };

// let data = [
//   {
//     employeeID: 1000,
//     fullName: "Ghazi Samer",
//     department: "Administration",
//     level: "Senior",
//   },

//   {
//     employeeID: 1001,
//     fullName: "Lana Ali",
//     department: "Finance",
//     level: "Senior",
//   },
//   {
//     employeeID: 1002,
//     fullName: "Tamara Ayoub",
//     department: "Administration",
//     level: "Mid-Senior",
//   },
//   {
//     employeeID: 1003,
//     fullName: "Safi Walid",
//     department: "Administration",
//     level: "Mid-Senior",
//   },
//   {
//     employeeID: "1004",
//     fullName: "Omar Zaid",
//     department: "Development",
//     level: "Senior",
//   },
//   {
//     employeeID: "1005",
//     fullName: "Rana Saleh",
//     department: "Development",
//     level: "Junior",
//   },
//   {
//     employeeID: "1006",
//     fullName: "Hadi Ahmad",
//     department: "Finance",
//     level: "Mid-Senior",
//   },
// ];

// for (i = 0; i < data.length; i++) {
//   var employeesData = new Employee(
//     data[i].employeeID,
//     data[i].fullName,
//     data[i].department,
//     data[i].level,
//     data[i].salary
//   );
//   employeesData.salaryAfterTax();
//   employeesData.render();
// }
