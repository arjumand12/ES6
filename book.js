
var author = "Syed Arjumand Shehzad";   // Author Name (Strings)
var category = "Novel";                 // Book Name (Strings)
var yearPublished = 1997;               // Published Year (number)
var numberOfCopiesSold = 20000;         // Number of Copies (number)
var numberofPages = 450;                // Number of Pages (number)
var price = 2000;                       // Book Price (number)
var edition = ["2002", "2003", "2004"]; // Edition (Array)
edition[2] = "2016"                     // Changing an Array Element

var Condition = numberofPages > 400 ? true : false; //Condition for number of Pages

var book = {
    Author : author,
    Category : category,
    YearofPublish : yearPublished,
    numberOfCopiesSold : numberOfCopiesSold,
    numberofPages : numberofPages,
    Price : price,
    Condition : Condition,
    Edition : edition[2]
}
console.log("_______________");
console.log(book);
console.log("_______________");

console.log("_______________");
console.log(author);
console.log("_______________");

console.log("_______________");
console.log(category);
console.log("_______________");

console.log("_______________");
console.log(yearPublished);
console.log("_______________");

console.log("_______________");
console.log(numberOfCopiesSold);
console.log("_______________");

console.log("_______________");
console.log(numberofPages);
console.log("_______________");

console.log("_______________");
console.log(price);
console.log("_______________");

console.log("_______________");
console.log(edition[2]);
console.log("_______________");
