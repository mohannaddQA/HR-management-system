function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let employeeID, fullName, department, level, img, salary;

function salaryAfterTax(level) {
  if (level == "Senior") {
    salary = random(1500, 2000);
    salary = salary - salary * 0.075;
  } else if (level == "Mid-Senior") {
    salary = random(1000, 1500);
    salary = salary - salary * 0.075;
  } else if (level == "Junior") {
    salary = random(500, 1000);
    salary = salary - salary * 0.075;
  }
  return salary;
}

let employeesDataArray = [];

function Employee(employeeID, fullName, department, level) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.img = img;
  this.salary = salaryAfterTax(level);
  employeesDataArray.push(this);
}
Employee.prototype.render = function () {
  document.write("<br />");
  document.write(
    `full name: ${employeesData.fullName} ||| salary :${employeesData.salary} JD`
  );
  document.write("<br />");
  document.write("<br />");
};
let data = [
  {
    employeeID: 1000,
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
  },

  {
    employeeID: 1001,
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior",
  },
  {
    employeeID: 1002,
    fullName: "Tamara Ayoub",
    department: "Administration",
    level: "Mid-Senior",
  },
  {
    employeeID: 1003,
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
  },
  {
    employeeID: "1004",
    fullName: "Omar Zaid",
    department: "Development",
    level: "Senior",
  },
  {
    employeeID: "1005",
    fullName: "Rana Saleh",
    department: "Development",
    level: "Junior",
  },
  {
    employeeID: "1006",
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: "Mid-Senior",
  },
];

for (i = 0; i < data.length; i++) {
  var employeesData = new Employee(
    data[i].employeeID,
    data[i].fullName,
    data[i].department,
    data[i].level,
    data[i].salary
  );
  employeesData.render();
}
