var displayPassword = document.getElementById('password');
//Activates Password Generator when button is pressed
var gen= document.querySelector('#Generate');

gen.addEventListener('click', function(){
    pw = generatePassword();
    document.getElementById("password").placeholder = pw;
})

//User variables
var num;
var char;
var lower;
var upper = [];

//array of characters
char = ['!','@','#','$','%','^','&','*','(',')','-','_',
'+','=','`','~','[','{',']','}','|',';',':',',','<','.','>','/','?'];

//array of numbers
num = ['0','1','2','3','4','5','6','7','8','9'];

//letters of the alphabet

lower = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h',
'j','k','l','z','x','c','v','b','n','m'];

//converts letters to Uppercase

for(let i = 0; i < lower.length; i++){
    const upperLetter = lower[i].toUpperCase();
    upper.push(upperLetter)
}



function generatePassword(){
//ask user for password length
var amount = window.prompt('How many characters is your new password?');

if(amount >= 8 && amount <= 128){
    //ask user which variables they will use
   var okChar = window.confirm("Will this password have special characters?");
   var okLower = window.confirm('Will this password have lowercase letters?');
   var okUpper = window.confirm('Will this password have uppercase letters?');
   var okNum = window.confirm('Will this password have numbers?');

   // to store all the confirmed variables
   var pass = [];
   displayPassword.innerHTML = pass;

   //Statements that go through every variation
    if(okChar && okLower && okUpper && okNum){
        pass = [...char, ...upper, ...lower, ...num];
        console.log(pass);
        var finalPassword = NewPassword(pass);
        console.log(finalPassword)    }
    else if(okChar && okLower && okUpper && !okNum){
        pass = [...char, ...lower, ...upper];
        console.log(pass);
        var finalPassword = NewPassword(pass);
        console.log(finalPassword)    }
    else if(okChar && okLower && !okUpper && !okNum){
        pass = [...char, ...lower];
        console.log(pass);
        var finalPassword = NewPassword(pass);
        console.log(finalPassword)    }
    else if(okChar && !okLower && !okUpper && !okNum){
        pass = [...char];
        console.log(pass);
        var finalPassword = NewPassword(pass);
        console.log(finalPassword)    }
    else if(!okChar && okLower && okUpper && okNum){
        pass = [...lower, ...upper, ...num];
        console.log(pass);
        var finalPassword = NewPassword(pass);
        console.log(finalPassword)    }
    else if(!okChar && !okLower && okUpper && okNum){
        pass = [...upper, ...num];
        console.log(pass);
        var finalPassword = NewPassword(pass);
        console.log(finalPassword)    }
    else if(!okChar && !okLower && !okUpper && okNum){
        pass = [...num];
        console.log(pass);
        var finalPassword = NewPassword(pass);
        console.log(finalPassword)    }
    else if(okChar && okLower && !okUpper && okNum){
        pass = [...char, ...lower, ...num];
        console.log(pass);
        var finalPassword = NewPassword(pass);
        console.log(finalPassword)    }
    else if(okChar && !okLower && !okUpper && okNum){
        pass = [...char, ...num];
        var finalPassword = NewPassword(pass);
        console.log(finalPassword)    }
    else if(!okChar && !okLower && okUpper && !okNum){
        pass = [...upper];
        console.log(pass);
        NewPassword(pass);
    }
    else if(!okChar && okLower && okUpper && !okNum){
        pass = [...lower, ...upper];
        console.log(pass);
        var finalPassword = NewPassword(pass);
        console.log(finalPassword)    }
    else if(!okChar && okLower && !okUpper && !okNum){
        pass = [...lower];
        console.log(pass);
        var finalPassword = NewPassword(pass);
        console.log(finalPassword)    }
    else if(!okChar && okLower && !okUpper && okNum){
        pass = [...lower, ...num];
        console.log(pass);
        var finalPassword = NewPassword(pass);
        console.log(finalPassword)
    }
    else if(okChar && !okLower && okUpper && okNum){
        pass = [...char, ...upper, ...num];
        console.log(pass);
        var finalPassword = NewPassword(pass);
        console.log(finalPassword)
    }

}else if(amount < 8){
    console.log("Error your password is too short");
    alert("Error your password is too short");
}else{
    console.log("Error your password is too long");
    alert("Error your password is too long");
}

//creates password with given variables
function NewPassword(pass){
    var finalPassword = [];
    var i = 0;
    while(i <= amount){
        var rand = Math.random() * pass.length; //selects variable type
   
        var unit = Math.floor(rand); //choose random unit from type array
        var randUnit = pass[unit]; //assigns the type
        finalPassword.push(randUnit);//adds the random unit to the password
        i++;
    }
    displayPassword.innerHTML = finalPassword.join('');
    return finalPassword.join('');
};

}