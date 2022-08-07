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
