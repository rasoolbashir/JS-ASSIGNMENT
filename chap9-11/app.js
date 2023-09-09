              // chapter 9---11
//QUESTION NO 1
document.write("<h2>QUESTION NO 1</h2>")
let city= prompt("Enter your city name");
if (city === "karachi") {
    console.log ("welcome to city of light");
    document.write("welcome to city of light");
}
else if(city === "islamabad") {
    console.log ("whelcome to green city of Pakistan ");
    document.write("whelcome to green city of pakistan ");
}
else if(city ==="lahore"){
    console.log("whelcome to city of garden");
    document.write("whelcome to city of garden");
}
else if (city ==="baltistan"){
    console.log("welcome to the city of ati baltiyul");
    document.write("welcome to the city of ati baltiyul");
}
document.write("<hr>");
//QUESTION NO 2
document.write("<h2>QUESTION NO 2</h2>")
let gender =prompt("Enter your gender");
if (gender==="male"){
    console.log("Good Morning Sir");
    document.write("Good Morning Sir");
}
else if (gender==="female"){
    console.log("Good Morning ma'am");
    document.write("Good Morning ma'am");
    document.write("<hr>");
}
//QUESTION NO 3
document.write("<h2>QUESTION NO 3</h2>")


let color = prompt("enter color for rode trafic signal");
if (color ==="red"){
    console.log("must stop");
    document.write("must stope");
}
else if (color ==="yellow"){
    console.log ("ready to move");
    document.write("ready to move");
}
else if (color ==="green"){
    console.log("move now");
    document.write("move now");
}else{
    console.log ("plz enter right answer")
}
document.write("<hr>");

//QUESTION NO 4
document.write("<h2>QUESTION NO 4</h2>")
let fuel = +prompt("Enter remaning fuel in a car(in liter):");
if(fuel<0.25){
    console.log("please refill the fuel in your car");
    document.write("please refill the fuel in your car");
}
document.write("<hr>");
//QUESTION 5
//5a
document.write("<h2>QUESTION NO 5A</h2>");
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
    document.write("given condition for variable a is true");
}
//5b
document.write("<h2>QUESTION NO 5B</h2>");
var b = 82;
if (b++ === 83){
    alert("given condition for vaiable b is true");
}
//5c
document.write("<h2>QUESTION NO 5C</h2>");
var c = 12;
if(c++ === 13){
    alart("condition 1 is true");
}
if(c === 13){
    alart("condition 2 is true");
    document.write("condition 2 is true");
}
if(++c < 14){
    alart("condition 3 is true");
}
if(c === 14){
    alart("condition 4 is true");
    document.write("condition 4 is true");
}
//5d
document.write("<h2>QUESTION NO 5D</h2>");
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alart("The cost equals");
    document.write("The cost equals");
}
//5e
document.write("<h2>QUESTION NO 5E</h2>");
if (true){
    alert("true");
    document.write("True");
}
if (false){
    alert("False");
}
//5f
document.write("<h2>QUESTION NO 5F</h2>");
if ("car"<"cat"){
    alart("car is smaller than cat");
    document.write("car is smaller than cat");
}
//QUESTION NO 6 
document.write("<h2>QUESTION NO 6</h2>")
document.write("<h2>Marks Sheet</h2>");
let totalMarks =+prompt("total Marks:");
document.write("<h2> total Marks:</h2>"+ totalMarks);
let obtainMarks = +prompt("Enter marks obtained in three subjects:");
document.write("<h2>Marks obtained :</h2?" + obtainMarks);
let percentage =(obtainMarks/totalMarks)*100;
//percentege =percentage *100;
document.write("<h2>percentage :</h2>" +percentage + "<h2>%</h2>");
if (percentage >=80){
    document.write("<h2>Grade: A-One</h2>");
    document.write("<h2>Remarks : Excellent</h2>");
}
else if (percentage >=70){
    document.write("<h2>Grade: A</h2>");
    document.write("<h2>Remarks : Good</h2>");
}
else if (percentage >=60){
    document.write("<h2>Grade: B</h2>");
    document.write("<h2>Remarks : average</h2>");
}
else if (percentage >=50){
    document.write("<h2>Grade: Fail</h2>");
    document.write("<h2>Remarks : You need to improve</h2>");
}
document.write("<hr>");
//QUESTION NO 7
document.write("<h2>Question no 7</h2>")
document.write("<h2>Guess Game");
let secretNumber =5;
let guessNumber = +prompt("Enter the number ranging from 1 to 10");
if (secretNumber===guessNumber){
    document.write("<h2>Bingo! correct Answer<h2>");
}else if(++secretNumber ===guessNumber){
    document.write("<h2> close enough to the correct number</h2>");
}else {
    document.write("<h2> Wrong Answer");
}
document.write("<hr>");
//QUESTION NO 8
document.write("<h2>Question no 8</h2>")
let givenNumber = +prompt("Enter the Number:");
if (givenNumber % 3 === 0){
    document.write("The number is divisible  by 3");
}else{
    document.write("the number is not divisible by 3");
}
document.write("hr>");

//QUESTION NO 9
document.write("<h2>Question no 10</h2>")
let inputNumber = +prompt("Enter the number");
if(inputNumber % 2 === 0){
    document.write("<h2>Even number");
}else{
    document.write("<h2>Odd number</h2>");
}
document.write("hr>");
//QUESTION NO 10
document.write("<h2>Question no 10</h2>")
let temperature = +prompt("Enter the temperature");
if (temperature > 40){
    document.write("<h2> It is to hot outside</h2>");
}
else if (temperature > 30){
    document.write("<h2>The weather today is normal</h2>");
}else if (temperature > 20){
    document.write("<h2> Today weather is cool</h2>");
} else if (temperature > 10){
    document.write("<h2> OMG! Today weather is so cool</h2>");
}
document.write("<hr>");
//QUESTION NO 11
document.write("<h2>Question no 11</h2>")
let firstNumber = +prompt("Enter the firstNumber");
let secondNumber =+prompt("Enter the secondNumber");
let operator = prompt("Enter any one operator from following +,-,*,/,%");
if(operator ==="+"){
    let results = firstNumber + secondNumber;
    document.write("Result:" + results);
}
else if(operator ==="-"){
    let results = firstNumber + secondNumber;
    document.write("Result:" + results);
}
else if(operator ==="*"){
    let results = firstNumber + secondNumber;
    document.write("Result:" + results);
}
else if(operator ==="/"){
    let results = firstNumber + secondNumber;
    document.write("Result:" + results);
}
else if(operator ==="+%"){
    let results = firstNumber + secondNumber;
    document.write("Result:" + results);
}
document.write("<hr>");







































