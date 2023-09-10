//question 1
document.write("<h1>QUESTION NO 1<h1>");
document.write("<br>");

let char = prompt("Enter a character (number or string)");
char = char.charCodeAt(0);
if((char >=65)&&(char <=90)){
    document.write("<h2>Input is uppercase letter</h2>");
}else if((char >=97)&&(char <=112)){
    document.write("<h2>Input is lowercase letter</h2>");
}else{
    document.write("<h2>Input is a number</h2>");
}
document.write("<hr>");

//question 2
document.write("<h1>QUESTION NO 2<h1>");
let integer1 = +prompt("Enter the first integer:");
let integer2 = +prompt("Enter the second integer:");
if((integer1 > integer2)||(integer2 < integer1)){
    document.write(integer1 + "is larger than" + integer2);
}else if((integer2 > integer1)||(integer1 < integer2)){
    document.write(integer2 + "is larger than" + integer1);
}else if(integer1 === integer2){
    document.write(integer1 + "is equal to" + integer2);
}
document.write("<hr>");

//question 3
document.write("<h1>QUESTION NO 3<h1>");
let usernumber = +prompt("Enter the number:");
if(usernumber < 0){
    document.write("<h2>the number is negative</h2>");
}else if(usernumber === 0){
    document.write("<h2>the number is zero</h2>");
}else{
    document.write("<h2>the number is positive</h2>");
}
document.write("<hr>");

//question 4
document.write("<h1>QUESTION NO 4<h1>");
let character = prompt("Enter any alphabet from a to z:");
character = character.toLowerCase();
if((character === "a")||(character === "e")||(character === "i")||(character === "o")||(character === "u")){
    document.write("<h2>True</h2?>");
}else{
    document.write("<h2>False</h2>");
}
document.write("<hr>");

//question 5
document.write("<h1>QUESTION NO 5<h1>");
let correctpassword = "123456";
let userpassword = prompt("Enter your password:");
if (userpassword === ""){
    document.write("<h2>Plz enter your password</h2>");
}else if(correctpassword === userpassword){
    document.write("<h2>Correct! the password you entered match the original password");
}else if(correctpassword !== userpassword){
    document.write("<h2>Incorrect password");
}
document.write("<hr>");

//question 6
document.write("<h1>QUESTION NO 6<h1>");
var greeting;
var hour =13;
if (hour < 18){
    greeting = "Good Day";
    document.write(greeting);
}else{
    greeting = "Good Evening";
    document.write(greeting);
}
document.write("<hr>");

//question 7
document.write("<h1>QUESTION NO 7<h1>");
let time = +prompt("Enter time in 24 hours clock format like:1900 = 7pm");
if((time >= 900)&&(time < 1200)) {
    document.write("<h2>Good Morning</h2>");
}else if((time >= 1200)&&(time < 1700)){
    document.write("<h2>Good Evening</h2>");
}else if((time >= 1700)&&(time < 2100)){
    document.write("<h2>Good Evening</h2>");
}else if((time >= 2100)&&(time <= 2359)){
    document.write("<h2>Good Morning</h2>");
}
document.write("<hr>");














