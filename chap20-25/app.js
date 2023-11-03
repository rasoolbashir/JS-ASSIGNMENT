/*//Question No 1
let userFirstName = prompt("Enter your first name");
let userLastName = prompt("Enter your last name");
const fullName = userFirstName + " " + userLastName;
alert(`Wel come to our land, ${fullName}`);

//Question No 2
let favMobilePhone = prompt("Enter your favourite mobile phone model");
// const findLength = favMobilePhone.length;
document.write(`My favourite phone is: ${favMobilePhone} <br> Length of string is: ${favMobilePhone.length}`);

//Question No 3
let text = "Pakistani";
let findIndexOfText = text.indexOf("n");
document.write(`String: ${text} <br> Index of 'n': ${findIndexOfText}`);

// Question No 4
let text_2 = "Hello World";
let lastIndex = text_2.lastIndexOf("l");
document.write(`<br><br>String: ${text_2} <br> Last index of 'I': ${lastIndex}`);

// Question No 5
let text_3 = "Pakistani";
let index3Cha = text_3[3];
document.write(`<br><br>String: ${text_3} <br> Character at index 3 is: ${index3Cha}`);

// Question No 6 Repeation of 1st Question by using concat()
let userFirstName_2 = prompt("Enter your first name");
let userLastName_2 = prompt("Enter your last name");
let bothInConcate = userFirstName_2.concat(" "+ userLastName_2);
alert(`Wel come to our land, ${bothInConcate}`);

// Question No 7
const cityName = "Hyderabad";
const replaceByAnother =cityName.replace("Hyder","Islam");
document.write(`<br><br>City: ${cityName} <br>After replacement: ${replaceByAnother}`);
// Another method to replace the value
let name = "Hyderabad";
let changeName = name.indexOf("Hyder");
if (changeName != -1) {
    name = name.slice(0,changeName) + "Islam" + name.slice(changeName + 5)
}
console.log(name);

// // Question No 8
let longestString = "Ali and Sami are best friends.They play cricket and football together.";
for (var i = 0; i < longestString.length; i++){
    if (longestString.slice(i,i + 3) === "and") {
        longestString = longestString.slice(0,i) + "&" + longestString.slice(i + 3);
    }
}
console.log(longestString);
// Another method to replace all the same value with replace() in a string
   let replaceableMethod = longestString.replace(/and/g, "&");
   console.log(replaceableMethod);

// Question No 9
let stringNumber = "472";
var stringToNumber = Number(stringNumber);
console.log(stringToNumber);
// Second method to convert string into number
var stringToNumber = +stringNumber;
console.log(stringToNumber);
// Third method to convert string into number
var stringToNumber = parseInt(stringNumber); // <===You can also use parseFloat instead of parseInt
document.write(`<br><br>Value: ${stringNumber} <br>Type: ${typeof stringNumber} <br>Value: ${stringToNumber} <br>Type: ${typeof stringToNumber}`);

// Question No 10
let userFavouriteDryFruit = prompt("What is your favourite dry fruit?");
let storeDryFruit = userFavouriteDryFruit.toLocaleUpperCase();
document.write(`<br><br>User input: ${userFavouriteDryFruit} <br>Upper Case: ${storeDryFruit}`);

// Question No 11
let userFavProgram = prompt("Enter your favourite programming language");
let stringFirstCap = userFavProgram[0].toUpperCase();
let stringRestInLowerCase = userFavProgram.slice(1).toLowerCase();
document.write(`<br><br>User input: ${userFavProgram} <br>Title Case: ${stringFirstCap + stringRestInLowerCase}`);

// Question No 12
let number = 35.36;
let converIntoStr = number.toString() * 100;
document.write(`<br><br>Number: ${number}<br>Result: ${converIntoStr}`);

// Question No 13
var userName = prompt("Enter your name");
var sign = /[^a-zA-Z0-9]/gi;
 if (sign.test(userName)) {
    alert("Please enter a valid username")
 }else{
    console.log(`username is ${userName}`);
 }

// Question No 14
let bakeriesItems = ["cake","apple pie","cookie","chips","patties"];
let askingAboutItems = prompt("Welcome to Sitara Bakery.What do you want to order sir/ma'am");
let checkingOut = "Available"
let matchFound = false;
for (var i = 0; i < bakeriesItems.length; i++) {
    if (bakeriesItems[i] === askingAboutItems){
        matchFound = true;
        console.log(`${bakeriesItems[i]} is ${checkingOut} at index ${i}`);
    }
} 
 if(matchFound === false) {
    console.log(`We are sorry.${askingAboutItems} is not available in our bakery`);
 }

 // Question No 15
 let password = prompt("Enter your password");
 let matchNum = false
 for (var i = 0; i < password.length; i++) {
     if (isNaN(parseInt(password[i]))){
         console.log(`Entered password: ${password}`);
         matchNum = true
         break

     }else{
         alert(`Password can not begin with a number`);
         break
     }
 }

  if(isNaN(parseInt(password.length)) < 6){
     alert("Please enter a valid number");
 }

// Question No 16
var university = ['University of Karachi'];
var converIntoStr = university.toString().split("");
for (var i = 0; i < converIntoStr.length; i++) {
    const element = converIntoStr[i];
    console.log(element);
}

// Question No 16 can also be simply done through for loop
  var university = ['University of Karachi'];
  var convIntoStri = university.toString(university);
  for (var i = 0; i < convIntoStri.length; i++) {
      const element = convIntoStri[i];
      console.log(element);
 }

// Question No 17
let lastCha = "Pakistan";
let findLastCha = lastCha.charAt(7);
console.log(`User input: ${lastCha} and last charac is: ${findLastCha}`);
*/

// Question No 18
// var str = "The quick brown fox jumps over the lazy dog";
// var findFirst = str.indexOf("the");
// console.log(findFirst);
// var findSome = "";
// for (var i = 0; i < 3; i++) {
//     var findValue = Math.floor(Math.random() * str.length);
//     findSome += str[findValue];
// }


// var num = 234;
// var num2 = 27;
// var total = (num + num2).toString() ;
// var check = num.toFixed(2);
// var hello = num.toString(num2);
// let text1 = "Umair";
// let text2 = "Ahmed";
// var hey = text1.concat(" "+text2)
// console.log(hello);
// console.log(hey);
// console.log(check);
// console.log(typeof num);

// var price = 24503;
// var total = price +(price /(100*10) );
// console.log("$"+total.toFixed(3));

// var num = 12.55;
// var num2 = num.toString();


// if (num.charAt(num.length-1) === "5") {
//     num = str.slice(0,num.length-1) + "6";
// }
// num = Number(num)
// console.log(num.toFixed(2));

// var num = 123;
// var an = num.toString();
// var one = an.toFixed();
var text = "Thank you";
var check = text.charAt(3);
var check2 = text.indexOf("n");
console.log(check);
console.log(check2);