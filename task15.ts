const list :string []= ["friend1", "friend2", "friend3"];
console.log(`Due to personal issue ${list[1]} will not came tonight\n`);
list[1]="friend4";
console.log("\t\t\t NEW DINNER LIST\n");

for(let i= 0 ; i< list.length ; i++)
    {
        console.log(`${list[i]} is invited  at dinner tonight`);
    }
