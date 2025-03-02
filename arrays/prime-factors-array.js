const prompt = require('prompt-sync')();

// Function to find prime factors of a number and store them in an array
function getPrimeFactors(n) {
    let factors = [];

    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }

    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    if (n > 2) {
        factors.push(n);
    }
    
    return factors;
}

let num = parseInt(prompt("Enter a number to find its prime factors: "));
if (num > 1) {
    let primeFactors = getPrimeFactors(num);
    console.log(`Prime factors of ${num} are: `, primeFactors);
} else {
    console.log("Please enter a number greater than 1.");
}
