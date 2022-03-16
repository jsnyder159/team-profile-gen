const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');
const render = require('./src/page-template.js');

const teamMembers = [];
// Create an id array to store the ids.
// This array will be used to check the potential duplicate id newly entered by user
const idArray = [];

// Inform user of usage
console.log(
  '\nWelcome to the team generator!\nUse `npm run reset` to reset the dist/ folder\n'
);

function appMenu() {
  // Create manager first, then the manager will create a team
  // Once manager is craeted, we will create team by asking the user which type of employee to create
  // Based on the choice, we will create that employee object
  // Loop throu the create team function until user is done from creating employees for the team
  // then we will use the employee objects created to render html for the team

  function createManager() {
    console.log('Please build your team 👥');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the team manager's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'managerID',
          message: "What is the team manager's ID?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is your manager's Email?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.'
          },
        },
        {
          type: 'input',
          name: 'mnpm er',
          message: "What is your manager's office number?",
          validate: (answer) => {
            if (answer !== ''){
              return true;
            }
            return 'Please enter at least one character.'
          },
        },

      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
      });
  }

  function createTeam() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'memberChoice',
          message: 'Which type of team member would you like to add?',
          choices: [
            'Engineer',
            'Intern',
            "I don't want to add any more team members",
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            buildTeam();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "What is your engineer's name?",
          validate: (answer) => {
            if (answer !== ''){
              return true;
            }
            return "Please enter atleast one character." 
          }
        },
        {
          type: 'input',
          name: 'engineerID',
          message: "What is your engineer's ID number?",
          validate: (answer) => {
            if(answer !== ''){
              return true;
            }
            return "Please enter atleast one character."
          }
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "What is your engineer's Email?",
          validate: (answer) => {
            if(answer !== ''){
              return true;
            }
            return "Please enter atleast one character."
          }
        },
        {
          type: 'input',
          name: 'engineerGitHub',
          message: "What is your engineer's GitHub?",
          validate: (answer) => {
            if (answer !== ''){
              return true;
            }
            return "Please enter atleast one character."
          }
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGitHub,
        );
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: "What is your intern's name?",
          validate: (answer) => {
            if (answer !== ''){
              return true;
            }
            return "Please enter atleast one character." 
          }
        },
        {
          type: 'input',
          name: 'internID',
          message: "What is your intern's ID number?",
          validate: (answer) => {
            if(answer !== ''){
              return true;
            }
            return "Please enter atleast one character."
          }
        },
        {
          type: 'input',
          name: 'internEmail',
          message: "What is your intern's Email?",
          validate: (answer) => {
            if(answer !== ''){
              return true;
            }
            return "Please enter atleast one character."
          }
        },
        {
          type: 'input',
          name: 'internSchool',
          message: "What is your intern's school?",
          validate: (answer) => {
            if (answer !== ''){
              return true;
            }
            return "Please enter atleast one character."
          }
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool,
        );
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
      });
  }

  function buildTeam() {
    // Create the output directory if the dist path doesn't exist
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
  }
  createManager();
}

appMenu();
