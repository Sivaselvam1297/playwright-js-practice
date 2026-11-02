
// Day 13 - Parameters and Arguments
// Scenario: Display employee and test case details

function displayEmployee(employeeName, jobRole) {
    console.log("Employee Name:", employeeName);
    console.log("Job Role:", jobRole);
}

function displayTestCase(testCaseId, testStatus) {
    console.log("Test Case ID:", testCaseId);
    console.log("Test Status:", testStatus);
}

// Calling functions with arguments

displayEmployee("Siva", "Manual Tester");

console.log("----------------");

displayTestCase("TC001", "Passed");

console.log("----------------");

displayTestCase("TC002", "Failed");

/* Remember:
- Parameters: Variables written inside the function definition.
- Arguments: Actual values passed when calling the function. */
