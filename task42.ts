
let magicianNames =["HARRY", "JEAN", "RICKY", "JAY", "ERICH", "WEISS"];

function show_magicians(greet : string)
{
    for(let items of magicianNames)
        {
            console.log(greet,items);
        }
};

show_magicians("The Great Of");
show_magicians("Hello");