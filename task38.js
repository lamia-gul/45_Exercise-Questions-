//38. Cities:
//Write a function called describe_city() that accepts the name of a city and its country. The
//function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the
//country a default value. Call your function for three different cities, at least one of which is not in the
//default country.
function describe_city(nameOfCity, nameOfCountry) {
    return "".concat(nameOfCity, " is in ").concat(nameOfCountry);
}
var func = describe_city("Karachi", " Pakistan");
console.log(func);
function describe_citys(nameOfCity, nameOfCountry) {
    if (nameOfCountry === void 0) { nameOfCountry = "Pakistan"; }
    return "".concat(nameOfCity, " is in ").concat(nameOfCountry, " ");
}
var myFunc = describe_citys("Hyderabad");
console.log(myFunc);
function describe(nameOfCity, nameOfCountry) {
    if (nameOfCountry === void 0) { nameOfCountry = "Turkey"; }
    return "".concat(nameOfCity, " is in ").concat(nameOfCountry);
}
var funct = describe("Istumbol");
console.log(funct);
