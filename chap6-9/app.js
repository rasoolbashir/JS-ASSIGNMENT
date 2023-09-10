// question 1
document.write("<h2>QUESTION NO 1</H2>");
document.write("<br>");
let num =10;
//consol.log(num)
document.write("Result:");
document.write("<br>");
document.write("The value is:",num);
document.write("<br><br>");
++num;
//consol.log(num)
document.write("The value of ++a is:",num);
document.write("<br>");
document.write("The value of a is:",num);
document.write("<br><br>");
document.write("The value of a++ is:",num);
document.write("<br>");
++num;
//consol.log(num)
document.write("Now The value of a is:",num);
document.write("<br><br>");
--num;
//consol.log(num)
document.write("The value of --a is:",num);
document.write("<br>");
document.write("The value of a is:",num);
document.write("<br><br>");
document.write("The value of a-- is:",num);
document.write("<br>");
num--;
//consol.log(num)
document.write("Now The value of a is:",num);
document.write("<br><br>");

//question 2
document.write("<h2>QUESTION NO 2</H2>");
document.write("<br>");

var a = 2;
document.write("a is:",a);
document.write("<br>");

var b = 1;
document.write("b is:",b);
document.write("<br>");
           //1  - 0    +  1  +  1
var result = --a - --b + ++b + b--;
document.write("result is:",result);
document.write("<br><br>");

//consol.log(result)
//result = 1 + ++b
//consol.log (result)
//result =2 + b--;

//question3
document.write("<h2>QUESTION NO 3</H2>");
document.write("<br>");
 
var username = prompt("Enter your name:");
document.write("Hello",username);
document.write("<br>");

//question 4
document.write("<h2>QUESTION NO 4</H2>");
document.write("<br>");
var question = "Enter Number ?";
var defaultAnswer = 5;
var usernumber = +prompt(question,defaultAnswer);
let i = 1;
if (usernumber===defaultAnswer){
    for(let i = 1; i<=10; i++){
        document.write(usernumber,"x",i,"=",i*usernumber)
        document.write("<br>")
    }
}else {
    for(let i = 1; 1<=10; i++){
        document.write(usernumber,"x",i,"=",i*usernumber)
        document.write("<br>")
    }
}
//console.log(usernumber)
document.write("<br><br>");

//question6
document.write("<h2>QUESTION NO 6</H2>");
document.write("<br>");

let subject1 = prompt("Enter the first subject name:");
console.log("first subject:",subject1);
document.write("first subject:",subject1);
document.write("<hr>");

let subject2 = prompt("Enter the first subject name:");
console.log("first subject:",subject2);
document.write("first subject:",subject2);
document.write("<hr>");

let subject3 = prompt("Enter the first subject name:");
console.log("first subject:",subject3);
document.write("first subject:",subject3);
document.write("<hr>");

let totalmarks = 100;

let obtainedmarkssubject1 = +prompt(`Enter the ${subject1} marks out of 100:`);
console.log(`${subject1} obtained marks:`,obtainedmarkssubject1);
document.write(`${subject1} obtained marks:`,obtainedmarkssubject1);
document.write("<hr>");

let obtainedmarkssubject2 = +prompt(`Enter the ${subject2} marks out of 100:`);
console.log(`${subject2} obtained marks:`,obtainedmarkssubject2);
document.write(`${subject2} obtained marks:`,obtainedmarkssubject2);
document.write("<hr>");

let obtainedmarkssubject3 = +prompt(`Enter the ${subject3} marks out of 100:`);
console.log(`${subject3} obtained marks:`,obtainedmarkssubject3);
document.write(`${subject3} obtained marks:`,obtainedmarkssubject3);
document.write("<hr>");

let totalmarksallsubjects = totalmarks + totalmarks + totalmarks;
console.log("Total marks all subjects:",totalmarksallsubjects);
document.write("Total marks all subjects:",totalmarksallsubjects);
document.write("br>");

let totalobtainedmarksallsubjects = obtainedmarkssubject1 + obtainedmarkssubject2 + obtainedmarkssubject3;
console.log("Total obtained marks:",totalobtainedmarksallsubjects);
document.write("Total obtained marks:",totalmarksallsubjects);
document.write("hr>");

let percentagesubject1 =(obtainedmarkssubject1 * 100)/100;
console.log(`${subject1}percentage:`,percentagesubject1,"%");
document.write(`${subject1}percentage:`,percentagesubject1,"%");
document.write("<hr>");

let percentagesubject2 =(obtainedmarkssubject2 * 100)/100;
console.log(`${subject2}percentage:`,percentagesubject2,"%");
document.write(`${subject2}percentage:`,percentagesubject2,"%");
document.write("<hr>");

let percentagesubject3 =(obtainedmarkssubject3 * 100)/100;
console.log(`${subject3}percentage:`,percentagesubject3,"%");
document.write(`${subject3}percentage:`,percentagesubject3,"%");
document.write("<hr>");


let totalpercentage =(percentagesubject1 + percentagesubject2 + percentagesubject3)/3;
console.log("Total percentage:",totalpercentage,"%");
document.write("Total percentage:",totalpercentage,"%");
document.write("<hr>");












