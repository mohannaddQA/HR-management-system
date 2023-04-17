let departmentData = {
  Administration: { numOfEmployees: 0, avgSalary: 0, totalSalary: 0 },
  Marketing: { numOfEmployees: 0, avgSalary: 0, totalSalary: 0 },
  Development: { numOfEmployees: 0, avgSalary: 0, totalSalary: 0 },
  Finance: { numOfEmployees: 0, avgSalary: 0, totalSalary: 0 },
};

// function GetEmployeesData() {
let employeesData = JSON.parse(localStorage.getItem("employeesData"));
// }
// GetEmployeesData();
function checkDepartment() {
  for (let eachEmployee in employeesData) {
    departmentData[employeesData[eachEmployee].department].numOfEmployees += 1;
    departmentData[employeesData[eachEmployee].department].totalSalary +=
      employeesData[eachEmployee].salary;
    departmentData[employeesData[eachEmployee].department].avgSalary =
      departmentData[employeesData[eachEmployee].department].totalSalary /
      departmentData[employeesData[eachEmployee].department].numOfEmployees;
  }
}
checkDepartment();

let tableBodyEL = document.getElementById("tableBodyEL");
// let totalNumberOfEmployeesEL = document.getElementById(
//   "totalNumberOfEmployeesEL"
// );                           //// why we didn't have to get el by id for the rest totals ??
let totalNumberOfEmployees = 0;
let avgSalaryOfAll = 0;
let totalSalaryOfAll = 0;

for (eachDepartment in departmentData) {
  let depRow = document.createElement("tr");
  let depNameCELL = document.createElement("td");
  let depNumOfEmloyeesCELL = document.createElement("td");
  let depAvgSalaryCELL = document.createElement("td");
  let depTotalSalaryCEL = document.createElement("td");
  tableBodyEL.appendChild(depRow);
  depRow.appendChild(depNameCELL);
  depRow.appendChild(depNumOfEmloyeesCELL);
  depRow.appendChild(depAvgSalaryCELL);
  depRow.appendChild(depTotalSalaryCEL);
  //// be carfule of the right notation to access inside the object
  depNameCELL.textContent = `${eachDepartment}`;
  depNumOfEmloyeesCELL.textContent = `${departmentData[eachDepartment].numOfEmployees}`;
  depTotalSalaryCEL.textContent = `${departmentData[eachDepartment].avgSalary}`;
  depAvgSalaryCELL.textContent = `${departmentData[eachDepartment].totalSalary}`;
  totalNumberOfEmployees += departmentData[eachDepartment].numOfEmployees;
  totalNumberOfEmployeesEL.textContent = `${totalNumberOfEmployees}`;
  totalSalaryOfAll += departmentData[eachDepartment].totalSalary;
  toltalSalaryofAll.textContent = `${totalSalaryOfAll}`;
  avgSalaryOfAll += departmentData[eachDepartment].avgSalary / 4;
  avgSalaryOfAllEL.textContent = `${avgSalaryOfAll}`;
  // totalNumberOfEmployeesEL.textContent = `${totalNumberOfEmployees}`;
}
