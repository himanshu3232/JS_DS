// Initialize an empty array to store repeated-digit numbers
const repeatedDigitNumbers = [];

// Loop through the range 0-100
for (let i = 0; i <= 100; i++) {
    // Convert the number to a string for easy comparison
    let numStr = i.toString();

    // Check if the number has two identical digits
    if (numStr.length === 2 && numStr[0] === numStr[1]) {
        repeatedDigitNumbers.push(i);
    }
}

// Output the array
console.log(repeatedDigitNumbers);
