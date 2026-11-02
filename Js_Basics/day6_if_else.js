// DAY 6 - IF ELSE

console.log("----- DAY 6: IF ELSE -----");

const testStatus = "Passed";

if (testStatus === "Passed") {
    console.log("Test Case Successful");
} else {
    console.log("Test Case Failed");
}

const performanceScore = 85;

if (performanceScore >= 90) {
    console.log("Excellent");
} else if (performanceScore >= 70) {
    console.log("Good");
} else if (performanceScore >= 50) {
    console.log("Average");
} else {
    console.log("Needs Improvement");
}