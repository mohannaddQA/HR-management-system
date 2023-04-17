"use strict";
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let employeeID, fullName, department, level, imgurl, salary;
let employeesData = [];

function Employee(fullName, department, level, imgurl) {
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imgurl = imgurl;
  this.employeeID = null;
  this.salary = null;

  employeesData.push(this);
}

Employee.prototype.$SalaryAfterTax = function () {
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

Employee.prototype.$IdGenerator = function () {
  this.employeeID = random(1000, 9999);
  return this.employeeID;
};

const cardsSectionEL = document.getElementById("cardsSectionEL"); //calls the element to JS
const cardsContainorEL = document.createElement("div"); // creats an element
cardsContainorEL.setAttribute("id", "cardsContainorEL");
cardsSectionEL.appendChild(cardsContainorEL);

function Render() {
  // if (employeesData == null) {
  //   employeesData = [];
  // } else if (employeesData != null) {
  const employeeCardEL = document.createElement("div");

  employeeCardEL.setAttribute("id", "employeeCardEL"); // give some attributes to the element
  cardsContainorEL.appendChild(employeeCardEL);

  const employeeIDEL = document.createElement("h4");
  employeeIDEL.setAttribute("id", "employeeIDEl");
  employeeIDEL.textContent = `Emplooyee ID: ${
    employeesData[employeesData.length - 1].employeeID
  }`;
  employeeCardEL.appendChild(employeeIDEL);

  const fullNameEL = document.createElement("h4");
  fullNameEL.setAttribute("id", "fullNameEL");
  fullNameEL.textContent = `Full name: ${
    employeesData[employeesData.length - 1].fullName
  }`;
  employeeCardEL.appendChild(fullNameEL);

  const imgEL = document.createElement("img");
  imgEL.setAttribute("id", "imgEL");
  imgEL.setAttribute(
    "src",
    `${employeesData[employeesData.length - 1].imgurl}`
  );
  employeeCardEL.appendChild(imgEL); // notice that the append comes at last so that it reads all attributes before appending

  const departmentEL = document.createElement("h5");
  departmentEL.setAttribute("id", "departmentEL");
  departmentEL.textContent = `Department: ${
    employeesData[employeesData.length - 1].department
  }`;
  employeeCardEL.appendChild(departmentEL);

  const levelEL = document.createElement("h5");
  levelEL.id = "levelEL";
  levelEL.textContent = `level: ${
    employeesData[employeesData.length - 1].level
  }`;
  employeeCardEL.appendChild(levelEL);

  const salaryEL = document.createElement("h5");
  salaryEL.id = "salaryEL";
  salaryEL.textContent = `salary: ${
    employeesData[employeesData.length - 1].salary
  }`;
  employeeCardEL.appendChild(salaryEL);
}

function HandleSubmit(event) {
  event.preventDefault();
  fullName = event.target.name.value;
  department = event.target.department.value;
  level = event.target.level.value;
  imgurl = event.target.imgurl.value;

  let newEmployee = new Employee(fullName, department, level, imgurl);
  newEmployee.$IdGenerator();
  newEmployee.$SalaryAfterTax();
  Render();
  SaveEmployeesData(employeesData);
}

let formEL = document.getElementById("formEL");
formEL.addEventListener("submit", HandleSubmit);

function SaveEmployeesData(employeesData) {
  employeesData = JSON.stringify(employeesData);
  localStorage.setItem("employeesData", employeesData);
}
// console.log("str", employeesData);
function getEmployeesData() {
  let employeesData = JSON.parse(localStorage.getItem("employeesData"));

  // for (let i = 0; i < employeesData.length; i++) {
  //   const employeeCardEL = document.createElement("div");

  //   employeeCardEL.setAttribute("id", "employeeCardEL"); // give some attributes to the element
  //   cardsContainorEL.appendChild(employeeCardEL);

  //   const employeeIDEL = document.createElement("h4");
  //   employeeIDEL.setAttribute("id", "employeeIDEl");
  //   employeeIDEL.textContent = `Emplooyee ID: ${employeesData[i].employeeID}`;
  //   employeeCardEL.appendChild(employeeIDEL);

  //   const fullNameEL = document.createElement("h4");
  //   fullNameEL.setAttribute("id", "fullNameEL");
  //   fullNameEL.textContent = `Full name: ${employeesData[i].fullName}`;
  //   employeeCardEL.appendChild(fullNameEL);

  //   const imgEL = document.createElement("img");
  //   imgEL.setAttribute("id", "imgEL");
  //   imgEL.setAttribute("src", `${employeesData[i].imgurl}`);
  //   employeeCardEL.appendChild(imgEL); // notice that the append comes at last so that it reads all attributes before appending

  //   const departmentEL = document.createElement("h5");
  //   departmentEL.setAttribute("id", "departmentEL");
  //   departmentEL.textContent = `Department: ${employeesData[i].department}`;
  //   employeeCardEL.appendChild(departmentEL);

  //   const levelEL = document.createElement("h5");
  //   levelEL.id = "levelEL";
  //   levelEL.textContent = `level: ${employeesData[i].level}`;
  //   employeeCardEL.appendChild(levelEL);

  //   const salaryEL = document.createElement("h5");
  //   salaryEL.id = "salaryEL";
  //   salaryEL.textContent = `salary: ${employeesData[i].salary}`;
  //   employeeCardEL.appendChild(salaryEL);
  // }
}

getEmployeesData();
Render();
// console.log(employeesData);
// if (employeesData != null) {

// Render();
// console.log(typeof employeesData);

//   // for (let i = 0; i < employeesData.length; i++) {
//   //   let newEmployee = new _Employee(
//   //     employeesData[i].fullName,
//   //     employeesData[i].department,
//   //     employeesData[i].level,
//   //     employeesData[i].imgurl
//   //   );

// //
// // }

// // // console.log("arr", employeesData);
