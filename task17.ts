const list :string [] = ["friend1", "friend2", "friend3", "friend4", "friend5", "friend6",];
console.log(list);
console.log(`Table is not avaliable i can invite 2 friends only`);

let person1=list.pop();
console.log(`Sorry ${person1} you are not invited`);
let person2=list.pop();
console.log(`Sorry ${person2} you are not invited`);
let person3=list.pop();
console.log(`Sorry ${person3} you are not invited`);
let person4=list.pop();
console.log(`Sorry ${person4} you are not invited`);
for(let i = 0; i < list.length; i++)
{
    console.log(`${list[i]} you are still invited`);
}
list.pop();
list.pop();
console.log(list);



