//34. Pizzas:
//Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and
//then use a for loop to print the name of each pizza.
//• Modify your loop to print a sentence using the name of the pizza instead of printing just 
//the name of
//the pizza. For each pizza you should have one line of output containing a simple statement 
//like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//The
//output should consist of three or more lines about the kinds of pizza, you like and then an
// additional
//sentence, such as I really love pizza!
var pizzaName = ["BBQ Pizza", "Chicken Pizza", "Cheese Pizza"];
var i;
for (i = 0; i < pizzaName.length; i++) {
    console.log("".concat(pizzaName[i]));
}
for (i = 0; i < pizzaName.length; i++) {
    console.log("".concat(pizzaName[i], " best Pizza"));
}
console.log("Pizza is my life and I really love pizza! pizza comes in various varity and according to the someone need ");
