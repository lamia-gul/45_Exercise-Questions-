
function make_shirt(label: string, size : string = "large")
{
    return size + label;
}
let shirt= make_shirt("  I Love Typeescript");
console.log(shirt);

function make_shirts(label: string, size : string = "medium")
{
    return size + label;
}
let shirts= make_shirts("  I Love Typeescript");
console.log(shirts);

function mak_shirt(size : string, label: string )
{
    return size + label;
}
let myFunc= mak_shirt("any size  ", " eat, sleep, beach and repeat");
console.log(myFunc);