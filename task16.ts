const list :string [] = ["friend1", "friend2", "friend3"];
console.log(list);
console.log("I want to invite three more friends at dinner");
list.unshift("best friend")
console.log(list);
list.splice(1,0,"friend4")
console.log(list);
list.push("friend5")
console.log(list);
for(let i= 0 ; i< list.length ; i++)
    {
        console.log(`${list[i]} is invited  at dinner tonight`);
    }

