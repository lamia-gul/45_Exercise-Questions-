//24. More Conditional Tests:
//You don’t have to limit the number of tests you create to 10. If you want to try more
//comparisons, write more tests. Have at least one True and one False result 
//for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than,
//greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in an array
//• Test whether an item is not in an array
var myName = "Lamia";
console.log(myName == "Lamia");
console.log(myName != "lamia");
var myAge = 18;
console.log(myAge == 18);
console.log(myAge != 18);
console.log(myAge > 15);
console.log(myAge < 18);
console.log(myAge >= 15);
console.log(myAge <= 18);
var a = 5;
var b = 10;
console.log(a > 0 && b < 10);
console.log(a > 0 || b < 10);
var myArray = [1, 23, "ali", 24];
var myString = "ahmed";
console.log(Array.isArray(myArray));
console.log(Array.isArray(myString));
