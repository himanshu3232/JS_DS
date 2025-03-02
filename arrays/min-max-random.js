// Function to generate a random 3-digit number
function generateRandomNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

// Function to find the second largest and second smallest without sorting
function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;
    
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
        
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }
    
    return { secondLargest, secondSmallest };
}


const randomNumbers = []

for(let i=0; i<10; i++){
    randomNumbers.push(generateRandomNumber())
}

let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(randomNumbers);
console.log(`Second Largest: ${secondLargest}, Second Smallest: ${secondSmallest}`);
