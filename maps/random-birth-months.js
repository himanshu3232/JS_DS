// Function to generate a random birth month (1 to 12)
function getRandomMonth() {
    return Math.floor(Math.random() * 12) + 1;
}

// Dictionary to store individuals by birth month
const birthMonths = {};

// Initialize dictionary with empty arrays for each month
for (let i = 1; i <= 12; i++) {
    birthMonths[i] = [];
}

// Generate 50 individuals with random birth months
for (let i = 1; i <= 50; i++) {
    let month = getRandomMonth();
    birthMonths[month].push(`Person ${i}`); // Store individual in corresponding month
}

// Print the individuals grouped by birth month
console.log("Birthdays grouped by month:");
for (let month in birthMonths) {
    console.log(`Month ${month}: ${birthMonths[month].length > 0 ? birthMonths[month].join(", ") : "No birthdays"}`);
}
