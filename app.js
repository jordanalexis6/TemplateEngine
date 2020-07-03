const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function validation(value) {
	if (value != "") {
		return true;
	} else {
		return "Error: No user input.";
	}
}
const employeeQuestions = [
	{
		type: "input",
		message: "Employee name:",
		name: "name",
	},
	{
		type: "input",
		message: "Employee ID:",
		name: "id",
	},
	{
		type: "input",
		message: "Employee Email:",
		name: "email",
	},
];
const managerQuestions = [
	{
		type: "input",
		message: "Office Number:",
		name: "officeNumber",
	},
];

const engineerQuestions = [
	{
		type: "input",
		message: "GitHub link:",
		name: "gitHub",
	},
];
const internQuestions = [
	{
		type: "input",
		message: "School you're attending:",
		name: "school",
	},
];
const addMoreMembers = [
	{
		type: "confirm",
		name: "newTeamMembers",
		message: "Add team member?",
		default: false,
	},
];
// question for role of new team member
const teamMemberRole = [
	// asks for the team member's role (not prompting for manager since there should only be one manager)
	{
		type: "list",
		name: "role",
		message: "Team member role:",
		choices: ["Engineer", "Intern", "Manager"],
		validate: validation,
	},
];
engineerQuestions.push(...employeeQuestions);
internQuestions.push(...employeeQuestions);
managerQuestions.push(...employeeQuestions);

var employeeData = [];
function add() {
	inquirer.prompt(addMoreMembers).then((answer) => {
		if (answer.newTeamMembers) {
			inquirer.prompt(teamMemberRole).then((roleSelection) => {
				switch (roleSelection.role) {
					case "Manager":
						inquirer.prompt(managerQuestions).then((managerAnswers) => {
							let newManager = new Manager(
								managerAnswers.name,
								managerAnswers.id,
								managerAnswers.email,
								managerAnswers.officeNumber
							);
							// appending manager data into the employeeData array
							employeeData.push(newManager);
							// invoking add() function to prompt for additional of team members
							add();
						});
						break;
					case "Engineer":
						inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
							let newEngineer = new Engineer(
								engineerAnswers.name,
								engineerAnswers.id,
								engineerAnswers.email,
								engineerAnswers.gitHub
							);
							// appending engineer data into the employeeData array
							employeeData.push(newEngineer);
							// invoking add() function here to create a recursive (objects calling themselves) loop
							add();
						});
						break;
					case "Intern":
						inquirer.prompt(internQuestions).then((internAnswers) => {
							let newIntern = new Intern(
								internAnswers.name,
								internAnswers.id,
								internAnswers.email,
								internAnswers.school
							);
							// appending intern data into the employeeData array
							employeeData.push(newIntern);
							// invoking add() function here to create a recursive (objects calling themselves) loop
							add();
						});
						break;

					default:
				}
			});
		} else {
			let htmlOutput = render(employeeData);
			// make fs.writeFile call to render an html output
			fs.writeFile(outputPath, htmlOutput, function (err) {
				if (err) {
					return console.log(err);
				}
			});
		}
	});
}
add();
