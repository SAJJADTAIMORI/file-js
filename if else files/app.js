
// Q number 1


// const number = parseInt(prompt("Enter a number:"));

// // Checking if the number is divisible by 3
// if (number % 3 === 0) {
//     console.log("The number is divisible by 3.");
// } else {
//     console.log("Number is not divisible by 3.");
// }



//  Q Number 2


// const number = parseInt(prompt("Enter a number:"));

// if (number % 2 === 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }


// Q Number 3


// const age = parseInt(prompt("Enter your age:"));

// if (age > 18) {
//     console.log("Old enough");
// } else {
//     console.log("Too young");
// }



// Q NUMBER 4

// const myName = "sajjad"; 

// const userName = prompt("Enter your name:");

// if (userName === myName) {
//     console.log("Hello, " + myName + "! nice to meet you!");
// }


// Q Number 5

// const number = parseInt(prompt("Enter a number:"));

// switch (number % 3) {
//     case 0:
//         console.log("Number is divisible by 3");
//         break;
//     default:
//         console.log("Number is not divisible by 3");
// }


// Q NUMBER 6......


// const input = prompt("Enter a character:");

// const charCode = input.charCodeAt(0);

// if ((charCode >= 48 && charCode <= 57)) {
//     console.log("Input is a number.");
// } else if (charCode >= 65 && charCode <= 90) {
//     console.log("Input is an uppercase letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//     console.log("Input is a lowercase letter.");
// } else {
//     console.log("Input is not a number or letter.");
// }

// Q ### 7

// const number1 = parseFloat(prompt("Enter the first number:"));
// const number2 = parseFloat(prompt("Enter the second number:"));
// const operator = prompt("Enter the operator (+, -, *, /, %):");

// let result;

// switch (operator) {
//     case "+":
//         result = number1 + number2;
//         console.log(`Result: ${number1} ${operator} ${number2} = ${result}`);
//         break;
//     case "-":
//         result = number1 - number2;
//         console.log(`Result: ${number1} ${operator} ${number2} = ${result}`);
//         break;
//     case "*":
//         result = number1 * number2;
//         console.log(`Result: ${number1} ${operator} ${number2} = ${result}`);
//         break;
//     case "/":
//         if (number2 === 0) {
//             console.log("Error: Division by zero.");
//         } else {
//             result = number1 / number2;
//             console.log(`Result: ${number1} ${operator} ${number2} = ${result}`);
//         }
//         break;
//     case "%":
//         result = number1 % number2;
//         console.log(`Result: ${number1} ${operator} ${number2} = ${result}`);
//         break;
//     default:
//         console.log("Error: Invalid operator.");
// }

// Q # > 8

// const time = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900):"));

// if (time >= 0 && time < 1200) {
//     console.log("Time in 12-hour format:", time + " AM");
// } else if (time >= 1200 && time < 2400) {
//     const hour12 = time - 1200 === 0 ? 12 : time - 1200;
//     console.log("Time in 12-hour format:", hour12 + " PM");
// } else {
//     console.log("Invalid time input.");
// }

// Q # 9

// const year = parseInt(prompt("Enter a year (YYYY format):"));

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }


// Q # 10

// Store correct password
const correctPassword = "correct123";

// Ask user to enter password
// const enteredPassword = prompt("Enter your password:");

// // Validate passwords
// if (!enteredPassword) {
//     console.log("Please enter your password.");
// } else if (enteredPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password.");
// }

// Q # 11 >>

// var firstName = "Ali";
// if (firstName === "Fahad") {
//     document.write("Hello Fahad!");
// } else {
//     document.write("You are not Fahad");
// }


// Q # 12 >>

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }


// Q # 13 =>

 
// const num1 = parseInt(prompt("Enter the first integer:"));
// const num2 = parseInt(prompt("Enter the second integer:"));


// if (num1 > num2) {
//     console.log("The larger integer is:", num1);
// } else if (num2 > num1) {
//     console.log("The larger integer is:", num2);
// } else {
//     console.log("Both integers are equal.");
// }

// Q # 14 


const number = parseFloat(prompt("Enter a number:"));

// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }


//  Q # 15 

// Asking the user for the current hour
// const hour = parseInt(prompt("Enter the current hour (in 24-hour format):"));

// // Providing mealtime messages based on the current hour
// if (hour >= 6 && hour < 9) {
//     console.log("Breakfast is served.");
// } else if (hour >= 11 && hour < 13) {
//     console.log("Time for lunch.");
// } else if (hour >= 17 && hour < 20) {
//     console.log("It's dinner time.");
// } else {
//     console.log("Sorry, you'll have to wait, or go get a snack.");
// }


// Q # 16 .>

// Storing a value in a variable
// const variable = "Hello";

// // Checking the type of the variable
// const variableType = typeof variable;

// // Displaying the type of the variable
// switch (variableType) {
//     case "number":
//         console.log("The type of the variable is: number");
//         break;
//     case "string":
//         console.log("The type of the variable is: string");
//         break;
//     case "boolean":
//         console.log("The type of the variable is: boolean");
//         break;
//     case "undefined":
//         console.log("The type of the variable is: undefined");
//         break;
//     default:
//         console.log("The type of the variable is unknown");
// }


// q # 17 

// Function to check if a character is a vowel
// function isVowel(char) {
//     // Convert the character to lowercase to handle both uppercase and lowercase vowels
//     const lowerCaseChar = char.toLowerCase();
    
//     // Check if the character is a vowel (a, e, i, o, u)
//     return lowerCaseChar === 'a' || lowerCaseChar === 'e' || lowerCaseChar === 'i' || lowerCaseChar === 'o' || lowerCaseChar === 'u';
// }

// // Taking input from the user
// const character = prompt("Enter a character:");

// // Calling the function and displaying the result
// console.log("Is the character a vowel?", isVowel(character));


// Q # 18 

// console.log(10 !== 8); // Output: true

// Q # 19 

// Prompting the user for the number of a month
// const monthNumber = parseInt(prompt("Enter the number of a month (1-12):"));

// // Initializing a variable to hold the month name
// let monthName;

// // Using a switch statement to determine the month name based on the month number
// switch (monthNumber) {
//     case 1:
//         monthName = "January";
//         break;
//     case 2:
//         monthName = "February";
//         break;
//     case 3:
//         monthName = "March";
//         break;
//     case 4:
//         monthName = "April";
//         break;
//     case 5:
//         monthName = "May";
//         break;
//     case 6:
//         monthName = "June";
//         break;
//     case 7:
//         monthName = "July";
//         break;
//     case 8:
//         monthName = "August";
//         break;
//     case 9:
//         monthName = "September";
//         break;
//     case 10:
//         monthName = "October";
//         break;
//     case 11:
//         monthName = "November";
//         break;
//     case 12:
//         monthName = "December";
//         break;
//     default:
//         monthName = "Invalid month number";
// }

// // Displaying the month name
// console.log("The month to the number " + monthNumber + " is " + monthName);


// Q # 20 

// Assuming age is already defined
const voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable);







