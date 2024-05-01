
let magicianNames =["HARRY", "JEAN", "RICKY", "JAY", "ERICH", "WEISS"];
let magicianNamesCopy=[...magicianNames];
function show_magicians(greet : string)
{
    let withGreetings="";
    for(let items of magicianNamesCopy)
        {
            withGreetings+=`${greet} ${items}\n`
        }
    return withGreetings;
};

let greeting = show_magicians("hello");
let makeArray = greeting.split('\n');
console.log(makeArray);
console.log(magicianNames);

