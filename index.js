var inquirer = require("inquirer");
let fs = require("fs");
const questions = [
	{
		type: "input",
		message: "What is your Repo Name?",
		name: "repoName",
	},
	{
		type: "input",
		message: "Describe your project.",
		name: "projectDescription",
	},
	// {
	// 	type: "input",
	// 	message: "List Table of Contents.",
	// 	name: "tableOfContents",
	// },
	{
		type: "input",
		message: "Installation instructions:",
		name: "installation",
	},
	{
		type: "input",
		message: "Usage:",
		name: "usage",
	},
	{
		type: "input",
		message: "License:",
		name: "license",
	},
	{
		type: "input",
		message: "Contributing:",
		name: "contributing",
	},
	{
		type: "input",
		message: "Tests:",
		name: "tests",
	},
	{
		type: "input",
		message: "Questions:",
		name: "questions",
	},
	{
		type: "input",
		message: "Enter GitHub profile picture URL:",
		name: "profilePic",
	},
	{
		type: "input",
		message: "Enter GitHub Repo URL:",
		name: "repoURL",
	},
	{
		type: "input",
		message: "What is your GitHub username?",
		name: "username",
	},
	// {
	// 	type: "input",
	// 	message: "What is your badge info?"
	// 	name: "badge",
	// },
	{
		type: "input",
		message: "What is your GitHub email?",
		name: "email",
	},
];

function init() {
	inquirer.prompt(questions).then((response) => {
		// if (response.username === "") {
		// 	console.log("please enter name");
		// 	init();
		// }
		// JSON.stringify(questions.response);
		console.log(response);

		// fs.open("./README.md", questions.response, response);
		// {

		// }

		fs.appendFileSync("README.md", "# " + response.repoName + "\n", function (
			err
		) {
			if (err) {
				console.log(err);
			} else {
				console.log("success");
			}
		});

		fs.appendFileSync(
			"README.md",
			"[![LicenseType](http://img.shields.io/github/license/" +
				response.username +
				"/" +
				response.repoName +
				"?color=green)](" +
				response.repoURL +
				")\n\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("success");
				}
			}
		);

		fs.appendFileSync(
			"README.md",
			response.projectDescription + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("success");
				}
			}
		);
		fs.appendFileSync(
			"README.md",
			"## Table of Contents \n - Repo Name \n - Project Description \n - Table of Contents (you are here.)\n - Installation Instructions\n - Usage\n - License\n - Contributing\n - Tests\n - Questions\n - GitHub Profile Picture\n - GitHub eMail\n\n",
			function () {
				if (err) {
					console.log(err);
				} else {
					console.log("success");
				}
			}
		);
		fs.appendFileSync("README.md", response.installation + "\n", function (
			err
		) {
			if (err) {
				console.log(err);
			} else {
				console.log("success");
			}
		});
		fs.appendFileSync(
			"README.md",
			"## Usage\n" + response.usage + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("success");
				}
			}
		);
		fs.appendFileSync(
			"README.md",
			"## License\n" + response.license + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("success");
				}
			}
		);
		fs.appendFileSync(
			"README.md",
			"```sh\n" + response.contributing + "\n```\n\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("success");
				}
			}
		);
		fs.appendFileSync(
			"README.md",
			"## Tests" + response.tests + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("success");
				}
			}
		);
		fs.appendFileSync("README.md", response.questions + "\n\n", function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("success");
			}
		});
		fs.appendFileSync("README.md", response.profilePic + "\n\n", function (
			err
		) {
			if (err) {
				console.log(err);
			} else {
				console.log("success");
			}
		});
		fs.appendFileSync("README.md", response.email + "\n", function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("success");
			}
		});

		// fs.writeFile("README.md", response, "utf8", function (err) {
		// 	if (err) return console.log("something went wrong.");
		// });
		// fs.open("README.md", function (response) {
		// 	console.log(response); // will print your responseObject
		// });
	});
}

init();
