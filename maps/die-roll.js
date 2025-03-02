// Initialize a dictionary to store die roll counts
const rollCounts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

// Function to roll a die and return a number between 1 and 6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Keep rolling the die until any number appears 10 times
let maxRolls = 10;
let maxReached = false;

while (!maxReached) {
    let roll = rollDie();
    rollCounts[roll]++; // Increment the count of the rolled number

    // Check if any number has reached 10 times
    if (rollCounts[roll] === maxRolls) {
        maxReached = true;
    }
}

// Find the number that appeared the most and the least
let maxNum = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] > rollCounts[b] ? a : b);
let minNum = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] < rollCounts[b] ? a : b);

// Output results
console.log("Final Die Roll Counts:", rollCounts);
console.log(`Number that appeared the most: ${maxNum} (${rollCounts[maxNum]} times)`);
console.log(`Number that appeared the least: ${minNum} (${rollCounts[minNum]} times)`);
