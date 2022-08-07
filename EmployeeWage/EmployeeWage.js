const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;

let emphrs = 0;
let empcheck = Math.floor(Math.random() * 10) % 3;
switch (empcheck) {
  case IS_PART_TIME:
    console.log("Employee is part time");
    emphrs = PART_TIME_HRS;
    break;
  case IS_FULL_TIME:
    console.log("Employee is full time");
    emphrs = FULL_TIME_HRS;
    break;
  default:
    emphrs = 0;
}
let empwage = emphrs * WAGE_PER_HR;
console.log("Empwage :" + empwage);
