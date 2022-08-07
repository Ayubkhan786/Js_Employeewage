const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

function getWorkingHrs(empcheck) {
  switch (empcheck) {
    case IS_PART_TIME:
      console.log("Employee is part time");
      return PART_TIME_HRS;

    case IS_FULL_TIME:
      console.log("Employee is full time");
      return FULL_TIME_HRS;
    default:
      console.log("Employee is Absent");
      return 0;
  }
}
function caldailyWage(emphrs) {
  return emphrs * WAGE_PER_HR;
}
let totalEmployeeHrs = 0;
let totalWrkDays = 0;
let empDailyWageArr = new Array();
while (
  totalEmployeeHrs <= MAX_HRS_IN_MONTH &&
  totalWrkDays <= NUMBER_OF_WORKING_DAYS
) {
  totalWrkDays++;
  let empcheck = Math.floor(Math.random() * 10) % 3;
  let emphrs = getWorkingHrs(empcheck);
  totalEmployeeHrs += emphrs;
  empDailyWageArr.push(caldailyWage(emphrs));
}
let empwage = caldailyWage(totalEmployeeHrs);
console.log(
  "Total Days: " +
    totalWrkDays +
    " \nTotal hrs: " +
    totalEmployeeHrs +
    "\nTotal Wage: " +
    empwage
);
let totalEmpWage = 0;
function sum(dailyWage) {
  totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log(
  "Total Days :" +
    totalWrkDays +
    "\nTotal Hrs :" +
    totalEmployeeHrs +
    "\nTotal Wage :" +
    empwage
);
// Reduce Function
function totalWage(totalWage, dailyWage) {
  return totalWage + dailyWage;
}
console.log("EmpWage with Reduce:" + empDailyWageArr.reduce(totalWage, 0));
//Map the Days and Wages in Array
dailycntr = 0;
function mapdaywithWage(dailyWage) {
  dailycntr++;
  return dailycntr + " = " + dailyWage;
}
let mapdaywithWageArr = empDailyWageArr.map(mapdaywithWage);
console.log("DailyWage map");
console.log(mapdaywithWageArr);
//Filter Function
function fulltimeWage(dailyWage) {
  return dailyWage.includes("160");
}
let fulldayWageArr = mapdaywithWageArr.filter(fulltimeWage);
console.log("Daily Wage filter when fulltime Wage earned");
console.log(fulldayWageArr);
//Find the first occurance when full time wage was earned using find function
function findFullTimeWage(dailyWage) {
  return dailyWage.includes("160");
}
let findFullTimeWageOccurance = mapdaywithWageArr.find(findFullTimeWage);
console.log(
  "First time full time wage was earned on Day: " + findFullTimeWageOccurance
);
//check if Every Element of full time wage is truly holding Full time wage
function isAllFullTimeWage(dailyWage) {
  return dailyWage.includes("160");
}
console.log(
  "Check All element have full time wage: " +
    fulldayWageArr.every(isAllFullTimeWage)
);
//Check if there is any Part Time Wage
function isPartTimeWage(dailyWage) {
  return dailyWage.includes("80");
}
console.log(
  "Check is Any Part Time Wage: " + mapdaywithWageArr.some(isPartTimeWage)
);
//Find the number of days the employee Worked
function totalNumOfDaysEmpWorked(numOfDays, dailyWage) {
  if (dailyWage > 0) {
    return numOfDays + 1;
  }
  return numOfDays;
}
console.log(
  "Total Number of days employee worked in a month: " +
    empDailyWageArr.reduce(totalNumOfDaysEmpWorked, 0)
);
//Using Map Function
let empDailyHrsMaps = new Array();
while (
  totalEmployeeHrs <= MAX_HRS_IN_MONTH &&
  totalWrkDays <= NUMBER_OF_WORKING_DAYS
) {
  totalWrkDays++;
  totalEmployeeHrs++;
  let empcheck = Math.floor(Math.random() * 10) % 3;
  let emphrs = getWorkingHrs(empcheck);
  totalEmployeeHrs += emphrs;
  empDailyHrsMaps.push(getWorkingHrs(emphrs));
}
console.log(
  "Emp Wage Map totalHrs: " +
    Array.from(mapdaywithWageArr.values()).reduce(totalWage, 0)
);
dailycntr = 0;
function empDailyHrsMap(emphrs) {
  dailycntr++;
  return dailycntr + " = " + emphrs;
}
let empDailyHrs = empDailyHrsMaps.map(empDailyHrsMap);
console.log("DailyHours map");
console.log(empDailyHrs);
//Using Arrow function
const findTotal = (totalval, dailyVal) => {
  return totalval + dailyVal;
};
let totalHours = Array.from(empDailyHrsMaps.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr
  .filter((dailyWage) => dailyWage > 0)
  .reduce(findTotal, 0);
console.log(
  "Employee Wage with Arrow: " +
    " Total Hours: " +
    totalHours +
    " Total Wages: " +
    totalSalary
);
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMaps.forEach((value, key, map) => {
  if (value === 8) fullWorkingDays.push(key);
  else if (value === 4) partWorkingDays.push(key);
  else nonWorkingDays.push(key);
});
console.log("Full working Days: " + fullWorkingDays);
console.log("Part working Days: " + partWorkingDays);
console.log("non Working days: " + nonWorkingDays);
