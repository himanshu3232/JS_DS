// Function to generate a random 3-digit number
function generateRandomNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

const randomNumbers = []

for(let i=0; i<10; i++){
    randomNumbers.push(generateRandomNumber())
}

randomNumbers.sort((a,b) => a-b)

console.log(`Second Largest: ${randomNumbers[randomNumbers.length-2]}, Second Smallest: ${randomNumbers[1]}`);
