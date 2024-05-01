//31. No Users:
//Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var userName = ["Ali", "Ahmed", "Admin", "Anus", "Daniyal", "Eric"];
var i;
userName = [];
if (userName.length != 0) {
    for (i = 0; i < userName.length; i++) {
        if (userName[i] === "Admin") {
            console.log("Hello ".concat(userName[i], ", Would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(userName[i], " thank you for logging in again"));
        }
    }
}
else {
    console.log("We need to find some users!");
}
