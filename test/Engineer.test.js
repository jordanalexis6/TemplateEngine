const Engineer = require("../lib/Engineer");
// Test 1
test("Can set gitHub account via constructor", () => {
	const testValue = "gitHubUser";
	const e = new Engineer("Foo", 1, "test@test.com", testValue);
	expect(e.gitHub).toBe(testValue);
});
//Test 2
test('getRole() should return "Engineer"', () => {
	const testValue = "Engineer";
	const e = new Engineer("Foo", 1, "test@test.com", "gitHubUser");
	expect(e.getRole()).toBe(testValue);
});
//Test 3
test("Can get gitHub username via getGitHub()", () => {
	const testValue = "gitHubUser";
	const e = new Engineer("Foo", 1, "test@test.com", testValue);
	expect(e.getGitHub()).toBe(testValue);
});
//Test 4
