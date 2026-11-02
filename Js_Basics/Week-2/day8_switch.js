
// Day 8 - Switch Statement
// Scenario: Check test case status

let testStatus = "Passed";

switch (testStatus) {
    case "Passed":
        console.log("Test case executed successfully");
        break;

    case "Failed":
        console.log("Test case failed");
        break;

    case "Blocked":
        console.log("Test case is blocked");
        break;

    case "Not Run":
        console.log("Test case is not executed yet");
        break;

    default:
        console.log("Invalid test status");
}
