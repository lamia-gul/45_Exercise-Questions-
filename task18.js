//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order 
//has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order.
//Print the list to show that its order has changed.
var place = ["SaudiArabia", "Makkah", "Korea", "Islamabad", "Japan"];
console.log(place);
var copyArray = place.slice();
var sortArray = copyArray.sort();
console.log(sortArray);
console.log(place);
var array = place.slice();
var reverseArray = array.reverse();
console.log(reverseArray);
console.log(place);
var revArray = place.reverse();
console.log(revArray);
var againReverse = revArray.reverse();
console.log(againReverse);
var sortOfArray = place.sort();
console.log(sortOfArray);
var revSort = sortOfArray.reverse();
console.log(revSort);
