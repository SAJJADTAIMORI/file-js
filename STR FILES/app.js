// Q # 1

// // Prompt the user for first name
// var firstName = prompt("Please enter your first name:");

// // Prompt the user for last name
// var lastName = prompt("Please enter your last name:");

// // Merge the first and last names
// var fullName = firstName + " " + lastName;

// // Greet the user using their full name
// alert("Hello, " + fullName + "! Welcome!");


// Q # 2 

// Prompt the user for their favorite mobile phone model
// var favoriteMobileModel = prompt("What is your favorite mobile phone model?");

// // Calculate the length of the user input
// var inputLength = favoriteMobileModel.length;

// // Display the length of the user input in the browser
// document.write("The length of your input is: " + inputLength);


// Q # 3

// Define the word
// var word = "Pakistani";

// // Find the index of the letter "n" in the word
// var indexOfN = word.indexOf("n");

// // Display the result in the browser
// document.write("The index of 'n' in the word 'Pakistani' is: " + indexOfN);


// Q # 4 

// Define the word
// var word = "Hello World";

// // Find the last index of the letter "l" in the word
// var lastIndex = word.lastIndexOf("l");

// // Display the result in the browser
// document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);


// Q # 5 

// Define the word
// var word = "Pakistani";

// // Find the character at the 3rd index in the word
// var characterAtIndex3 = word.charAt(3);

// // Display the result in the browser
// document.write("The character at the 3rd index in the word 'Pakistani' is: " + characterAtIndex3);

// Q # 6


// Prompt the user for first name
// var firstName = prompt("Please enter your first name:");

// // Prompt the user for last name
// var lastName = prompt("Please enter your last name:");

// // Merge the first and last names using concat method
// var fullName = firstName.concat(" ", lastName);

// // Greet the user using their full name
// alert("Hello, " + fullName + "! Welcome!");

// Q# 7

// Define the word
// var word = "Hyderabad";

// // Replace "Hyder" with "Islam" in the word
// var replacedWord = word.replace("Hyder", "Islam");

// // Display the result in the browser
// document.write("Original word: " + word + "<br>");
// document.write("After replacement: " + replacedWord);


// Q # 8 

// Define the string
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// // Replace all occurrences of "and" with "&" in the string
// var replacedMessage = message.split("and").join("&");

// // Display the result in the browser
// document.write("Original message: " + message + "<br>");
// document.write("After replacement: " + replacedMessage);

// Q # 9 

// Define the string
// var str = "472";

// // Convert the string to a number
// var num = Number(str);

// // Display the values and types in the browser
// document.write("Value of string: " + str + "<br>");
// document.write("Type of string: " + typeof str + "<br>");
// document.write("Value of number: " + num + "<br>");
// document.write("Type of number: " + typeof num);

// Q # 10 

// Prompt the user for a URL
// var url = prompt("Please enter a URL (e.g., www.facebook.com):");

// // Extract the domain name
// var domainName = url.split(".")[1];

// // Display the domain name in the browser
// document.write("Domain Name: " + domainName);

// Q # 11 

// Prompt the user for input
// var userInput = prompt("Please enter some text:");

// // Convert the input to capital letters
// var capitalizedInput = userInput.toUpperCase();

// // Display the capitalized input in the browser
// document.write("Original Input: " + userInput + "<br>");
// document.write("Capitalized Input: " + capitalizedInput);

// Q # 12

// Prompt the user for input
// var userInput = prompt("Please enter some text:");

// // Convert the input to lowercase letters
// var lowercaseInput = userInput.toLowerCase();

// // Display the lowercase input in the browser
// document.write("Original Input: " + userInput + "<br>");
// document.write("Lowercase Input: " + lowercaseInput);

// Q # 13 

// Prompt the user for input
// var userInput = prompt("Please enter some text:");

// // Function to convert string to title case
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }

// // Convert the input to title case
// var titleCaseInput = toTitleCase(userInput);

// // Display the title case input in the browser
// document.write("Original Input: " + userInput + "<br>");
// document.write("Title Case Input: " + titleCaseInput);

// Q # 14 

// Define the variable
// var num = 35.36;

// // Convert the number to a string and remove the dot
// var numAsString = num.toString().replace(".", "");

// // Display the result in the browser
// document.write("Original Number: " + num + "<br>");
// document.write("Number as String without Dot: " + numAsString);

// Q # 15 

// Define variables a and b
// var a = "3";
// var b = "3";

// Check if both variables a and b are equal
// if (a === b) {
//     // If they are equal, assign a value to x
//     var x = "The value of variable x is: " + a;
    
//     // Display the value of x in the browser
//     document.write(x);
// } else {
//     // If they are not equal, display a message indicating that they are not equal
//     document.write("Variables a and b are not equal.");
// }

//  Q 16 


// Define variables a and b
// var a = "3";
// var b = "3";

// // Check if both variables a and b are equal
// if (a === b) {
//     // If they are equal, assign a value to y
//     var y = "The value of variable y is: " + b;
    
//     // Display the value of y in the browser
//     document.write(y);
// } else {
//     // If they are not equal, display a message indicating that they are not equal
//     document.write("Variables a and b are not equal.");
// }

// Q 17 

// Prompt the user to enter a username
// var username = prompt("Please enter your username:");

// // Function to check if the username contains any special symbols
// function containsSpecialSymbol(username) {
//     for (var i = 0; i < username.length; i++) {
//         var charCode = username.charCodeAt(i);
//         if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//             return true;
//         }
//     }
//     return false;
// }

// // Check if the username contains any special symbols
// if (containsSpecialSymbol(username)) {
//     // Prompt the user to enter a valid username
//     alert("Please enter a valid username without special symbols like [@ . , !]");
// } else {
//     // Display the username if it is valid
//     alert("Your username is: " + username);
// }


// Q 18 

// Define the array
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt the user to enter the item to search for
// var userInput = prompt("Enter the item you want to search for:").toLowerCase(); // Convert user input to lowercase for case-insensitive search

// // Function to perform case-insensitive search
// function searchItem(array, item) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].toLowerCase() === item) {
//             return true;
//         }
//     }
//     return false;
// }

// // Perform the search
// var isFound = searchItem(A, userInput);

// // Prompt the user based on the search result
// if (isFound) {
//     alert("Yes, '" + userInput + "' is found in the list.");
// } else {
//     alert("No, '" + userInput + "' is not found in the list.");
// }

// Q # 19 

// Prompt the user to enter the first string
// var firstString = prompt("Enter the first string:");

// // Prompt the user to enter the second string
// var secondString = prompt("Enter the second string:");

// // Perform string comparison
// if (firstString === secondString) {
//     alert("Both strings are equal.");
// } else if (firstString > secondString) {
//     alert("The first string is greater than the second string.");
// } else {
//     alert("The second string is greater than the first string.");
// }


// Q 20 

// Function to check if the password meets the requirements
function isValidPassword(password) {
    // Check if the password contains alphabets and numbers
    var hasAlphabets = false;
    var hasNumbers = false;
    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            hasAlphabets = true;
        } else if (charCode >= 48 && charCode <= 57) {
            hasNumbers = true;
        }
    }

    // Check if the password meets all requirements
    return (
        password.length >= 6 &&
        !hasNumbers &&
        hasAlphabets &&
        (password.charCodeAt(0) < 48 || password.charCodeAt(0) > 57)
    );
}

// Prompt the user to enter a password
var password = prompt("Enter your password:");

// Check if the password is valid
if (isValidPassword(password)) {
    alert("Password is valid.");
} else {
    alert("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.");
}










