//44. Sandwiches:
//Write a function that accepts an array of items a person wants on a sandwich. The function
//should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.
function sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want sandwich of ".concat(items);
}
;
var collection1 = sandwiches("cheese", "vegetable pattie", "BBQ sause", "egg");
var collection2 = sandwiches("Brown bread", "Chicken pattie", "latus", "egg white");
var collection3 = sandwiches();
console.log(collection1);
console.log(collection2);
console.log(collection3);
