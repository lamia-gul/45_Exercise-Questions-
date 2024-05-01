var list = ["friend1", "friend2", "friend3"];
console.log("Due to personal issue ".concat(list[1], " will not came tonight\n"));
list[1] = "friend4";
console.log("\t\t\t NEW DINNER LIST\n");
for (var i = 0; i < list.length; i++) {
    console.log("".concat(list[i], " is invited  at dinner tonight"));
}
