const Employee = require("./Employee");

class Intern extends Employee {
  constructor(internSchool) {
    // T*ODO: YOUR CODE HERE
    super(name, id, email);
    this.internSchool = internSchool;
  }

  getRole() {
    // T*ODO: YOUR CODE HERE
    return "Intern"
  }

  getSchool() {
    // T*ODO: YOUR CODE HERE
    return this.internSchool;
  }

}

module.exports = Intern;
