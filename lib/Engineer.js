const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // T*ODO: YOUR CODE HERE
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    // T*ODO: YOUR CODE HERE
    return "Engineer";
  }

  getGithub() {
    // T*ODO: YOUR CODE HERE
    return this.github;
  }

}

module.exports = Engineer;
