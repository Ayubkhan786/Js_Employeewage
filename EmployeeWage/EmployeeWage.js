const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;

function getWorkingHrs(empcheck) {
  switch (empcheck) {
    case IS_PART_TIME:
      console.log("Employee is part time");
      return PART_TIME_HRS;

    case IS_FULL_TIME:
      console.log("Employee is full time");
      return FULL_TIME_HRS;
    default:
      return 0;
  }
}

let empcheck = Math.floor(Math.random() * 10) % 3;
let emphrs = getWorkingHrs(empcheck);
let empwage = emphrs * WAGE_PER_HR;
console.log("Empwage :" + empwage);
