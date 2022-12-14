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
//wrapping Everything in single Object
let totalEmployeeHrs = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
while (
  totalWorkingDays < NUMBER_OF_WORKING_DAYS &&
  totalEmployeeHrs <= MAX_HRS_IN_MONTH
) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let emphrs = getWorkingHrs(empCheck);
  totalEmployeeHrs += emphrs;
  empDailyHrsAndWageArr.push({
    dayNum: totalWorkingDays,
    dailyHours: emphrs,
    dailyWage: caldailyWage(emphrs),
    toString() {
      return (
        "\nDay" +
        this.dayNum +
        "=> Working Hours is " +
        this.dailyHours +
        " And Wage Earned = " +
        this.dailyWage
      );
    },
  });
}
console.log("Showing Daily Hours and Wage Earned: " + empDailyHrsAndWageArr);
//Using Object Functions along with Arrow functions
//Total Hours
let totalWages = empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyWage > 0)
  .reduce(
    (totalWage, dailyHrsAndWage) => (totalWage += dailyHrsAndWage.dailyWage),
    0
  );
let totalHours = empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyWage > 0)
  .reduce(
    (totalHour, dailyHrsAndWage) => (totalHour += dailyHrsAndWage.dailyHours),
    0
  );
console.log("Total Hours: " + totalHours + " Total Wage: " + totalWages);
//full working days
empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours == 8)
  .forEach((dailyHrsAndWage) =>
    process.stdout.write(dailyHrsAndWage.toString())
  );
//Part time Working days strings
let partWorkingDayStrrArr = empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours === 4)
  .map((dailyHrsAndWage) => dailyHrsAndWage.toString());
console.log("Part time working days:" + partWorkingDayStrrArr);
//Non working Days
let nonWorkingDays = empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours == 0)
  .map((dailyHrsAndWage) => dailyHrsAndWage.dayNum);
console.log("Non Working days" + nonWorkingDays);
