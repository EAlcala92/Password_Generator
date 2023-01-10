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
var upper;

//array of characters
char = ['!','@','#','$','%','^','&','*','(',')','-','_',
'+','=','`','~','[','{',']','}','|',';',':',',','<','.','>','/','?'];

//array of numbers
num = ['0','1','2','3','4','5','6','7','8','9'];

//letters of the alphabet
lower = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h',
'j','k','l','z','x','c','v','b','n','m'];

//converts letters to Uppercase
upper = lower.toUpperCase();


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
   var pass;

   //Statements that go through every variation
    if(okChar && okLower && okUpper && okNum){
        pass = [char, upper, lower, num];
        NewPassword(pass);
    }
    else if(okChar && okLower && okUpper && !okNum){
        pass = [char, lower, upper];
        NewPassword(pass);
    }
    else if(okChar && okLower && !okUpper && !okNum){
        pass = [char, lower];
        NewPassword(pass);
    }
    else if(okChar && !okLower && !okUpper && !okNum){
        pass = [char];
        NewPassword(pass);
    }
    else if(!okChar && okLower && okUpper && okNum){
        pass = [lower, upper, num];
        NewPassword(pass);
    }
    else if(!okChar && !okLower && okUpper && okNum){
        pass = [upper, num];
        NewPassword(pass);
    }
    else if(!okChar && !okLower && !okUpper && okNum){
        pass = [num];
        NewPassword(pass);
    }
    else if(okChar && okLower && !okUpper && okNum){
        pass = [char, lower, num];
        NewPassword(pass);
    }
    else if(okChar && !okLower && !okUpper && okNum){
        pass = [char, num];
        NewPassword(pass);
    }
    else if(!okChar && !okLower && okUpper && !okNum){
        pass = [upper];
        NewPassword(pass);
    }
    else if(!okChar && okLower && okUpper && !okNum){
        pass = [lower, upper];
        NewPassword(pass);
    }
    else if(!okChar && okLower && !okUpper && !okNum){
        pass = [lower];
        NewPassword(pass);
    }
    else if(!okChar && okLower && !okUpper && okNum){
        pass = [lower, num];
        NewPassword(pass);
    }
    else if(okChar && !okLower && okUpper && okNum){
        pass = [char, upper, num];
        NewPassword(pass);
    }

}else if(amount < 8){
    println("Error your password is too short")
}else{
    println("Error your password is too long")
}

//creates password with given variables
function NewPassword(pass){
    var i = 0;
    var Length = pass.length;
    var password;
    while(i <= amount){
        var rand = Math.random() * Length; //selects variable type
        var randUnit = pass[rand]; //assigns the type
        var unit = Math.floor(Math.random() * randUnit.length); //choose random unit from type array
        password = pass.push(unit);//adds the random unit to the password
        i++;
    }
    pass = password;
    return pass;
};

}