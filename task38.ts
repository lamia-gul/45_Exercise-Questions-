
function describe_city(nameOfCity:string, nameOfCountry:string)
{
    return `${nameOfCity} is in ${nameOfCountry}`;
}
let func = describe_city("Karachi"," Pakistan")
console.log(func);

function describe_citys(nameOfCity:string, nameOfCountry:string = "Pakistan")
{
    return `${nameOfCity} is in ${nameOfCountry} `;
}
let myFunc = describe_citys("Hyderabad")
console.log(myFunc);

function describe(nameOfCity:string, nameOfCountry:string = "Turkey")
{
    return `${nameOfCity} is in ${nameOfCountry}`;
}
let funct = describe("Istumbol")
console.log(funct);

