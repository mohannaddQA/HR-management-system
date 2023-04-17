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
for (eachDepartment in departmentData) {
  let depRow = document.createElement("tr");
  // tableBodyEL.appendChild(depRow);
  // let depNumOfEmloyeesCELL = tableBodyEL.appendChild("td");
  // let depAvgSalaryCELL = tableBodyEL.appendChild("tr");
  // let depTotalSalaryCELL = tableBodyEL.appendChild("td");
  // depNameCELL.textContent = departmentData[eachDepartment];
  // depNumOfEmloyeesCELL.textContent=
}
console.log(departmentData);
let depRow = document.createElement("tr");

tableBodyEL.appendChild(depRow);
