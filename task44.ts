
function sandwiches(...items : string[])
{
    return `I want sandwich of ${items}`;
};

let collection1= sandwiches("cheese", "vegetable pattie", "BBQ sause", "egg");
let collection2= sandwiches("Brown bread", "Chicken pattie", "latus", "egg white");
let collection3= sandwiches();
console.log(collection1);
console.log(collection2);
console.log(collection3);
