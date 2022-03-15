const Employee = require("./Employee");

class Manager extends Employee {

  constructor(managerOfficeNumber) {
    // YOUR CODE HERE
    super(name, id, email);
    this.managerOfficeNumber = managerOfficeNumber;
  }

  getRole() {
    // YOUR CODE HERE
    return "Manager";
  }

  getOfficeNumber() {
    // YOUR CODE HERE
    return this.managerOfficeNumber;
  }

}

module.exports = Manager;
