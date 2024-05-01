//19. Dinner Guests:
//Working with one of the programs from Exercises 14 through 18, print a message indicating
//the number of people you are inviting to dinner.
var list = ["friend1", "friend2", "friend3", "friend4", "friend5", "friend6"];
console.log("I am inviting ".concat(list.length, " people at dinner "));
for (var i = 0; i < list.length; i++) {
    console.log("".concat(i + 1, " ").concat(list[i]));
}
