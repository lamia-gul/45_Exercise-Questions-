//17. Shrinking Guest List:
//You just found out that your new dinner table won’t arrive in time for the dinner, and you have
//space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you 
//can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time 
//you pop a name from your list, print a message to that person letting them know you’re sorry
//you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still
//invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make
//sure you actually have an empty list at the end of your program.
var list = ["friend1", "friend2", "friend3", "friend4", "friend5", "friend6",];
console.log(list);
console.log("Table is not avaliable i can invite 2 friends only");
var person1 = list.pop();
console.log("Sorry ".concat(person1, " you are not invited"));
var person2 = list.pop();
console.log("Sorry ".concat(person2, " you are not invited"));
var person3 = list.pop();
console.log("Sorry ".concat(person3, " you are not invited"));
var person4 = list.pop();
console.log("Sorry ".concat(person4, " you are not invited"));
for (var i = 0; i < list.length; i++) {
    console.log("".concat(list[i], " you are still invited"));
}
list.pop();
list.pop();
console.log(list);
