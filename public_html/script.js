


    var btn = document.getElementById("btn");

function printUserInput()
{
var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var age = document.getElementById('age').value;
var phoneNumber=document.getElementById('phoneNumber').value;
var address=document.getElementById('address').value;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(phoneNumber);
console.log(address);
}
btn.addEventListener('click',printUserInput);
    
    

function idCard()
{

var firstName;
    var lastName;
    var address;
    
    
    
    
    
    var age;
    var phoneNumber;
    var numberArray=[];
    numberArray.push(age,phoneNumber);
    
    for(var i=0;i<numberArray.lenth;i++)
    {
        if(numberArray[i]<100)
        {
            //age
        }
        else if(numberArray[i]>100)
        {
            //phone number
        }
    }
    
    
    
    
}

