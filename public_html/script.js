


    var btn = document.getElementById("btn");

function printUserInput()
{
var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var age = parseInt(document.getElementById('age').value);
var phoneNumber=parseInt(document.getElementById('phoneNumber').value);
var address=document.getElementById('address').value;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(phoneNumber);
console.log(address);
document.getElementById("postFullName").innerHTML =firstName+" "+lastName;


    var numberArray=[];
    numberArray.push(age,phoneNumber);
    console.log(numberArray);

   for(var i=0;i<numberArray.length;i++)
    {
        if(numberArray[i]<100)
        {
            //age
            document.getElementById("postAge").innerHTML =" "+numberArray[i];
            

        }
        else if(numberArray[i]>100)
        {
            //phone number
            
            document.getElementById("postPhoneNumber").innerHTML=" "+numberArray[i];
        }
    }


document.getElementById("postAddress").innerHTML =" "+address;





}
btn.addEventListener('click',printUserInput);
    
    



