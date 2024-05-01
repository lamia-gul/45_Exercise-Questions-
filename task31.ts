
let userName : string[]=["Ali", "Ahmed", "Admin", "Anus", "Daniyal", "Eric"];
let i;
userName =[];
if(userName.length !=0)
    {
        for(i=0;i<userName.length;i++)
        {
            if(userName[i]=== "Admin")
                {
                    console.log(`Hello ${userName[i]}, Would you like to see a status report?`);
                }
            else
            {
                console.log(`hello ${userName[i]} thank you for logging in again`);
            }
        }
    }
else 
    {
        console.log(`We need to find some users!`);
    }
