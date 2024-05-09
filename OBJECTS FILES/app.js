
// Q # 1?
// Array of objects containing items information


// var itemsArray = [
//     { name: "juice", price: "50", quantity: "3" },
//     { name: "cookie", price: "30", quantity: "9" },
//     { name: "shirt", price: "880", quantity: "1" },
//     { name: "pen", price: "100", quantity: "2" }
// ];

// // Initialize variables to store total price for each item and total price for all items
// var totalPrices = [];

// // Calculate total price for each item and total price for all items
// var totalPriceAllItems = 0;
// for (var i = 0; i < itemsArray.length; i++) {
//     var item = itemsArray[i];
//     var totalPriceItem = item.price * item.quantity;
//     totalPrices.push({ name: item.name, totalPrice: totalPriceItem }); // Store total price for each item
//     totalPriceAllItems += totalPriceItem; // Accumulate total price for all items
// }

// // Display total price for each item
// console.log("Total price of each item:");
// for (var j = 0; j < totalPrices.length; j++) {
//     console.log(totalPrices[j].name + ": " + totalPrices[j].totalPrice + " PKR");
// }


    // Q # 2 ANS 


    // Create an object with properties name, email, password, age, gender, city, country


// var userInfo = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     password: "password123",
//     age: 30,
//     gender: "Male",
//     city: "New York",
//     country: "USA"
// };

// // Check if age and country properties exist in the object


// var ageExists = userInfo.hasOwnProperty("age");
// var countryExists = userInfo.hasOwnProperty("country");

// // Check if firstName and lastName properties exist in the object
// var firstNameExists = userInfo.hasOwnProperty("firstName");
// var lastNameExists = userInfo.hasOwnProperty("lastName");

// // Display the results
// console.log("Does 'age' property exist in the object? " + ageExists);
// console.log("Does 'country' property exist in the object? " + countryExists);
// console.log("Does 'firstName' property exist in the object? " + firstNameExists);
// console.log("Does 'lastName' property exist in the object? " + lastNameExists);


// // Display total price for all items
// console.log("Total price of all items: " + totalPriceAllItems + " PKR");

// //    Q # 3 ANS

// Constructor function for creating records


// function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// // Create multiple records using the constructor

// var person1 = new Person("ALI", 30, "New York");
// var person2 = new Person("AliZA", 25, "Los Angeles");
// var person3 = new Person("KHAN", 35, "Chicago");

// // Display the records

// console.log("Record 1:");
// console.log(person1);

// console.log("Record 2:");
// console.log(person2);

// console.log("Record 3:");
// console.log(person3);




