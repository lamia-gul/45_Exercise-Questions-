//37. Large Shirts:
//Modify the make_shirt() function so that shirts are large by default, with a message that reads
//I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
//size with a different message.
function make_shirt(label, size) {
    if (size === void 0) { size = "large"; }
    return size + label;
}
var shirt = make_shirt("  I Love Typeescript");
console.log(shirt);
function make_shirts(label, size) {
    if (size === void 0) { size = "medium"; }
    return size + label;
}
var shirts = make_shirts("  I Love Typeescript");
console.log(shirts);
function mak_shirt(size, label) {
    return size + label;
}
var myFunc = mak_shirt("any size  ", " eat, sleep, beach and repeat");
console.log(myFunc);
