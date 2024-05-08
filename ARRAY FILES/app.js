
// Q # 1 ARRAY FILES 

// Declare an empty array to store student names
// const studentNames = [];

// // Add student names to the array
// studentNames.push("Alice");
// studentNames.push("Bob");
// studentNames.push("Charlie");

// // Display the array
// console.log(studentNames);


// Q # 2 ARRAY FILES 

// Declare an empty array to store student names using object notation
// const studentNames = new Array();

// // Add student names to the array
// studentNames.push("Alice");
// studentNames.push("Bob");
// studentNames.push("Charlie");

// // Display the array
// console.log(studentNames);


// Q # 3 

// Declare and initialize a strings array
// const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// // Display the array
// console.log(fruits);

// Q # 4 


// Declare and initialize a numbers array
// const numbers = [1, 2, 3, 4, 5];

// // Display the array
// console.log(numbers);

// Q # 5 

// Declare and initialize a boolean array
// const booleanArray = [true, false, true, true, false];

// // Display the array
// console.log(booleanArray);

// Q # 6 

// // Declare and initialize a mixed array
// const mixedArray = [42, "hello", true, { name: "John", age: 30 }, null];

// // Display the array
// console.log(mixedArray);


// Q # 7 

// Declare and initialize an array to store available mobile networks in Pakistan
// const mobileNetworks = ["Mobilink", "Telenor", "Zong", "Ufone", "Warid"];

// // Display the array
// console.log(mobileNetworks);

// // Declare and initialize an array to store available mobile networks in Pakistan
// const mobileNetworks = ["Mobilink", "Telenor", "Zong", "Ufone", "Warid"];

// // Display the array
// console.log("Available mobile networks in Pakistan:", mobileNetworks);

// Q # 8

// Declare and initialize an array to store available education qualifications in Pakistan
// const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// // Create a string to display the listed qualifications
// let displayString = "<h2>Available Education Qualifications in Pakistan:</h2><ul>";

// // Loop through the qualifications array to build the display string
// for (let i = 0; i < qualifications.length; i++) {
//     displayString += "<li>" + qualifications[i] + "</li>";
// }

// // Close the unordered list tag
// displayString += "</ul>";

// // Display the qualifications in the browser
// document.write(displayString);


// Q # 9 


// Declare and initialize an empty array to store top movies of 2015
// const topMovies2015 = [];

// // Add movies one by one to the array
// topMovies2015.push("Mad Max: Fury Road");
// topMovies2015.push("Star Wars: The Force Awakens");
// topMovies2015.push("Jurassic World");
// topMovies2015.push("Inside Out");
// topMovies2015.push("The Martian");

// // Display the elements of the array
// document.write("<h2>Top Movies of 2015:</h2><ul>");
// for (let i = 0; i < topMovies2015.length; i++) {
//     document.write("<li>" + topMovies2015[i] + "</li>");
// }
// document.write("</ul>");

// // Display the length of the array
// document.write("<p>Number of movies: " + topMovies2015.length + "</p>");


// // Q # 10 

// Declare and initialize an array with favorite cars
// const favoriteCars = ["Tesla Model S", "Porsche 911", "Audi R8", "BMW M5", "Mercedes-Benz AMG GT"];

// // Display the first index of the array
// console.log("First index of the array:", 0);

// // Display the car at the first index of the array
// console.log("Car at first index of the array:", favoriteCars[0]);

// // Display the last index of the array
// console.log("Last index of the array:", favoriteCars.length - 1);



// Q # 11

// Array to store student names
const studentNames = ["Ali", "AHMED", "KHAN"];

// Array to store scores of students
const scores = [430, 380, 450];

// Total marks for each student
const totalMarks = 500;

// Display scores and percentages of students
for (let i = 0; i < studentNames.length; i++) {
    const score = scores[i];
    const percentage = (score / totalMarks) * 100;
    console.log(`${studentNames[i]} scored ${score} out of ${totalMarks}, which is ${percentage.toFixed(2)}%`);
}




