
var author = "Syed Arjumand Shehzad";
var category = "Novel";
var yearPublished = 1997;
var numberOfCopiesSold = 20000;
var numberofPages = 450;
var price = 2000;

var Condition = numberofPages > 400 ? true : false;

var book = {
    Author : author,
    Category : category,
    YearofPublish : yearPublished,
    numberOfCopiesSold : numberOfCopiesSold,
    numberofPages : numberofPages,
    Price : price,
    Condition : Condition
}
console.log("_______________");
console.log(book);
console.log("_______________");