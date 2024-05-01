//More Guests:
//You just found a bigger dinner table, so now more space is available. Think of three more guests
//to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program
//informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
var list = ["friend1", "friend2", "friend3"];
console.log(list);
console.log("I want to invite three more friends at dinner");
list.unshift("best friend");
console.log(list);
list.splice(1, 0, "friend4");
console.log(list);
list.push("friend5");
console.log(list);
for (var i = 0; i < list.length; i++) {
    console.log("".concat(list[i], " is invited  at dinner tonight"));
}
