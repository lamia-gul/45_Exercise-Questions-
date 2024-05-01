
let userNames : string[]=["Ali", "Ahmed", "Admin", "Anus", "Daniyal", "Eric"];
let i;
for(i=0;i<userNames.length;i++)
    {
        if(userNames[i]=== "Admin")
            {
                console.log(`Hello ${userNames[i]}, Would you like to see a status report?`);
            }
        else
        {
            console.log(`hello ${userNames[i]} thank you for logging in again`);
        }
    }
