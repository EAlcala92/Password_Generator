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
var amount = prompt('How many characters is your new password?');

if(amount >= 8 && amount <= 128){
    
}else if(amount < 8){
    println("Error your password is too short")
}else{
    println("Error your password is too long")
}