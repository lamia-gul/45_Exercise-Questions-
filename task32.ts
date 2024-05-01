
let current_users : string[]=["Ali", "Ahmed", "Hassan", "Anus", "Daniyal", "Bilal"];
let new_users : string[]=["Asad", "Aina", "Bilal", "Hassan", "Kamran", "Kareem"];

new_users.forEach(new_user =>{
    let new_userLower=new_user.toLowerCase();
let user_nameTaken=current_users.some(current_user => current_user.toLowerCase() === new_userLower);
if(user_nameTaken)
    {
        console.log(`${new_user} needs to choose a new username because its already taken`);
    }
else
{
    console.log(`${new_user} is the new member added`);
    current_users.push(new_user)
}
})
console.log(current_users);

