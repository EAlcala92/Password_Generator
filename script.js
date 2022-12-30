//User variables
var numeric;
var special_characters;
var letters;
var upper;

//array of characters
special_characters = ['!','@','#','$','%','^','&','*','(',')','-','_',
'+','=','`','~','[','{',']','}','|',';',':',',','<','.','>','/','?'];

//array of numbers
numeric = ['0','1','2','3','4','5','6','7','8','9'];

//letters of the alphabet
letters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h',
'j','k','l','z','x','c','v','b','n','m'];

//converts letters to Uppercase
var upper = letters.toUpperCase();

//converts letters to Lowercase
var lower = letters.toLowerCase();

//ask user for password length
var amount = window.prompt('How many characters is your new password?');

if(amount >= 8 && amount <= 128){
    //ask user which variables they will use
   var okChar = window.confirm("Will this password have special characters?");
   var okLower = window.confirm('Will this password have lowercase letters?');
   var okUpper = window.confirm('Will this password have uppercase letters?');
   var okNum = window.confirm('Will this password have numbers?');
   //if all of them
    if(okChar && okLower && okUpper && okNum){
        
    }//if no num
    else if(okChar && okLower && okUpper && !okNum){

    }//if no num and upper
    else if(okChar && okLower && !okUpper && !okNum){

    }//no num, upper, or lower
    else if(okChar && !okLower && !okUpper && !okNum){

    }
}else if(amount < 8){
    println("Error your password is too short")
}else{
    println("Error your password is too long")
}

//create a function that generates the password using all possibilities
//and call it in the else statements
//create it before the if statements