

// // Q # 1 

// // // Display "Hello World" 5 times using a for loop
// // for (let i = 0; i < 5; i++) {
// //     document.write("Hello World<br>");
// // }

// // Q # 2

// // Print numeric counting from 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// Q # 3 


// Prompt the user for the table number and length
// const tableNumber = parseInt(prompt("Enter the table number:"));
// const tableLength = parseInt(prompt("Enter the length of the table:"));

// // Display the multiplication table
// console.log(`Multiplication Table of ${tableNumber} (Length: ${tableLength})`);
// for (let i = 1; i <= tableLength; i++) {
//     console.log(`${tableNumber} * ${i} = ${tableNumber * i}`);
// }

// Q # 4 


// Given array
// const A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// // Write each element on a new line using a for loop
// for (let i = 0; i < A.length; i++) {
//     console.log(A[i]);
// }

// Q # 5 

// Given array
// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// // Print each item of the array using a for loop
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// Q 6 

// Prompt the user to enter the number of items
// const N = parseInt(prompt("Enter the number of items:"));

// // Initialize an empty array
// const items = [];

// // Prompt the user to enter each item and store them in the array
// for (let i = 0; i < N; i++) {
//     const item = prompt(`Enter item ${i + 1}:`);
//     items.push(item);
// }

// // Display the array
// console.log("Items entered by the user:", items);


// Q # 7

// Generate and display the counting series
// document.write("<h3>Counting: </h3>");
// for (let i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// // Generate and display the reverse counting series
// document.write("<h3>Reverse counting: </h3>");
// for (let i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// // Generate and display the even series
// document.write("<h3>Even: </h3>");
// for (let i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }

// // Generate and display the odd series
// document.write("<h3>Odd: </h3>");
// for (let i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }

// // Generate and display the series: 2k, 4k, 6k, ..., 20k
// document.write("<h3>Series: </h3>");
// for (let i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }


// Q 8 

// Given array
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt the user to enter an item for search
// const userInput = prompt("Enter an item to search:");

// // Flag variable to track if the item is found
// let found = false;

// // Search for the item in the array
// for (let i = 0; i < A.length; i++) {
//     if (A[i] === userInput) {
//         found = true;
//         break;
//     }
// }

// // Display the result based on whether the item is found or not
// if (found) {
//     alert(`Yes, "${userInput}" is found in the list.`);
// } else {
//     alert(`No, "${userInput}" is not found in the list.`);
// }


// Q # 9 

// Given array
// const A = [24, 53, 78, 91, 12];

// // Initialize a variable to store the maximum number, initially set to the first element of the array
// let maxNumber = A[0];

// // Iterate through the array to find the maximum number
// for (let i = 1; i < A.length; i++) {
//     if (A[i] > maxNumber) {
//         maxNumber = A[i];
//     }
// }

// // Display the largest number
// console.log("The largest number in the array is:", maxNumber);

// Q # 10 

// function printWedge(initialStars) {
//     for (let i = initialStars; i > 0; i--) {
//         console.log('*'.repeat(i));
//     }
// }

// const initialStars = parseInt(prompt("Enter the initial number of stars: "));
// printWedge(initialStars);


// Q # 20 


// function patternA(numLines) {
//     let result = '';
//     for (let i = 0; i < numLines; i++) {
//         result += '*'.repeat(numLines) + '\n';
//     }
//     return result;
// }

// function patternB(numLines) {
//     let result = '';
//     for (let i = 1; i <= numLines; i++) {
//         result += '*'.repeat(i) + '\n';
//     }
//     return result;
// }

// function patternC(numLines) {
//     let result = '';
//     for (let i = numLines; i > 0; i--) {
//         result += '*'.repeat(i) + '\n';
//     }
//     return result;
// }

// function createPattern(patternType, numLines) {
//     let result = '';
//     switch (patternType) {
//         case 'a':
//             result = patternA(numLines);
//             break;
//         case 'b':
//             result = patternB(numLines);
//             break;
//         case 'c':
//             result = patternC(numLines);
//             break;
//         default:
//             result = 'Invalid pattern type.';
//     }
//     document.getElementById('output').innerText = result;
// }

// const numLines = parseInt(prompt("Enter the number of lines: "));
// const patternType = prompt("Enter pattern type (a, b, or c): ");
// createPattern(patternType, numLines);


// Q 8 

const A = [24, 53, 78, 91, 12];

function findLargestSmallest(arr) {
    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return { largest, smallest };
}

const { largest, smallest } = findLargestSmallest(A);
console.log("Largest number:", largest);
console.log("Smallest number:", smallest);
