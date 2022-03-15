const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(engineerGitHub) {
    // T*ODO: YOUR CODE HERE
    super(name, id, email);
    this.engineerGitHub = engineerGitHub;
  }

  getRole() {
    // T*ODO: YOUR CODE HERE
    return "Engineer";
  }

  getGithub() {
    // T*ODO: YOUR CODE HERE
    return this.engineerGitHub;
  }

}

module.exports = Engineer;
