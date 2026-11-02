
// Day 14 - Return Statement
// Scenario: Calculate total test cases

function calculateTotal(passedTests, failedTests) {
    let total = passedTests + failedTests;

    return total;
}

// Calling the function

let totalTests = calculateTotal(8, 2);

console.log("Passed Test Cases: 8");
console.log("Failed Test Cases: 2");
console.log("Total Test Cases:", totalTests);


// Remember: return sends a value back from a function. 
// You can store that value in a variable and use it later.