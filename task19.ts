const list :string []= ["friend1", "friend2", "friend3", "friend4", "friend5", "friend6"];
console.log(`I am inviting ${list.length} people at dinner ` );

for(let i = 0 ; i < list.length ; i++)
    {
        console.log(`${i+1} ${list[i]}`);
    }
