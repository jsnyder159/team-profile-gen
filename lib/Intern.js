const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // T*ODO: YOUR CODE HERE
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    // T*ODO: YOUR CODE HERE
    return "Intern"
  }

  getSchool() {
    // T*ODO: YOUR CODE HERE
    return this.school;
  }

}

module.exports = Intern;
