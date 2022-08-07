class EmployeeePayrollData {
  constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
  }
  get gender() {
    return this._gender;
  }
  set gender(gender) {
    let genederRegex = RegExp("^[Male,Female]{1}");
    if (genederRegex.test(gender)) {
      this._gender = gender;
    } else {
      throw "Invalid";
    }
    this._gender = gender;
  }
  get startDate() {
    return this._startDate;
  }
  set startDate(startDate) {
    this._startDate = startDate;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
    if (nameRegex.test(name)) this._name = name;
    else throw "Name is incorrect";
  }
  get salary() {
    return this._salary;
  }
  set salary(salary) {
    let salaryValidate = RegExp("^[1-9]{1}[0-9]{1,6}$");
    if (salaryValidate.test(salary)) {
      this._salary = salary;
    } else {
      throw "Wrong input";
    }
  }
  get id() {
    return this._id;
  }
  set id(id) {
    let idValidate = RegExp("^[1-90-9]{1,3}$");
    if (idValidate.test(id)) {
      this._id = id;
    } else {
      throw "Invalid ";
    }
  }
  toString() {
    const option = { year: "numeric", month: "long", day: "numeric" };
    const empDate =
      this.startDate === undefined
        ? "undefined"
        : new Date().toLocaleDateString("en-us", option);
    return (
      "id = " +
      this.id +
      ", name = " +
      this.name +
      ", salary = " +
      this.salary +
      ", Gender = " +
      this.gender +
      " , StartDate = " +
      empDate
    );
  }
}
let employeePayrolldata = new EmployeeePayrollData(10, "Ayub", 5000000, "Male");
console.log(employeePayrolldata.toString());
let newEmployeePayrolldata = new EmployeeePayrollData(
  2,
  "Shree",
  550000,
  "Female",
  new Date()
);
console.log(newEmployeePayrolldata.toString());
let newEmployeePayrolldataOne = new EmployeeePayrollData(
  3,
  "Khan",
  600000,
  "Male",
  new Date()
);
console.log(newEmployeePayrolldataOne.toString());
