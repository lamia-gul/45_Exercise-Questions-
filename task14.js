//Guest List:
//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
//includes at least three people you’d like to invite to dinner. Then use your list to print a message
//to each person, inviting them to dinner.
var list = ["friend1", "friend2", "friend3"];
for (var i = 0; i <= list.length; i++) {
    console.log("I invite ".concat(list[i], " at dinner tonight"));
}
