//33. Ordinal Numbers:
//Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers
//end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", 
//and each result should be on a separate line.
var ordinalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var i;
for (i = 0; i < ordinalNum.length; i++) {
    if (ordinalNum[i] == 1) {
        console.log("".concat(ordinalNum[i], "st"));
    }
    else if (ordinalNum[i] == 2) {
        console.log("".concat(ordinalNum[i], "nd"));
    }
    else if (ordinalNum[i] == 3) {
        console.log("".concat(ordinalNum[i], "rd"));
    }
    else if (ordinalNum[i] == 4) {
        console.log("".concat(ordinalNum[i], "th"));
    }
    else if (ordinalNum[i] == 5) {
        console.log("".concat(ordinalNum[i], "th"));
    }
    else if (ordinalNum[i] == 6) {
        console.log("".concat(ordinalNum[i], "th"));
    }
    else if (ordinalNum[i] == 7) {
        console.log("".concat(ordinalNum[i], "th"));
    }
    else if (ordinalNum[i] == 8) {
        console.log("".concat(ordinalNum[i], "th"));
    }
    else if (ordinalNum[i] == 9) {
        console.log("".concat(ordinalNum[i], "th"));
    }
}
