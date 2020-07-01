const Engineer = require("../lib/Engineer");
// Test 1
test("Can set GitHUb account via constructor", () => {
	const testValue = "GitHubUser";
	const e = new Engineer("Foo", 1, "test@test.com", testValue);
	expect(e.github).toBe(testValue);
});
//Test 2
test('getRole() should return "Engineer"', () => {
	const testValue = "Engineer";
	const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
	expect(e.getRole()).toBe(testValue);
});
//Test 3
test("Can get GitHub username via getGithub()", () => {
	const testValue = "GitHubUser";
	const e = new Engineer("Foo", 1, "test@test.com", testValue);
	expect(e.getGithub()).toBe(testValue);
});
//Test 4
