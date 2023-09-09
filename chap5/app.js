//  question1
document.write("<h2>QUESTION NO 1</h2>");
document.write("<br>")

var num1 = 10;
var num2 = 20;
var result = num1 + num2;
//console.log(result)
document.write("sum of" + num1 + "and" + num2 + "is" + result );
document.write("<br>");
document.write("<hr>")

//  question2
document.write("<h2>QUESTION NO 2</h2>");
document.write("<br>")
var subtract = num1 - num2;
document.write("<br>");
document.write("subtraction of" + num1 + "and" + num2 + "is" +subtract);
document.write("<br>");
var multiply = num1 * num2;
document.write("<br>");
document.write("Multiplication of" + num1 + "and" + num2 + "is" +multiply);
document.write("<br>");
var multiply = num1 / num2;
document.write("<br>");
document.write("Division of" + num1 + "and" + num2 + "is" +divide);
document.write("<br>");
var multiply = num1 * num2;
document.write("<br>");
document.write("Modulus of" + num1 + "and" + num2 + "is" +modulus);
document.write("<br>");
document.write("<br>");
document.write("<hr>")
//  question3
document.write("<h2>QUESTION NO 3</h2>");
document.write("<br>")

//question 3a
let number;
//question 3b
document.write("value after variable decleration is :" + number);
document.write("<br>")
//question 3c
number = 5;
//question 3d
document.write("Initial value:" + number);
document.write("<br>")
//question 3e
number ++;
//question 3f
document.write("value after increment is:" + number);
document.write("<br>")
//question 3g
number +=7;
//question 3h
document.write("value after addition is:" + number);
document.write("<br>")
//question 3i
number --;
//question 3j
document.write("value after deccrement is:" + number);
document.write("<br>")
//question 3k
let reminder = number%3;
//question 3L
document.write("the reminder is:" + reminder);
document.write("<br>")
document.write("<hr>")
//  question4
document.write("<h2>QUESTION NO 4</h2>");
document.write("<br>")
  
let ticket_price = 6000;
let total_ticket = 5;
let total_cost = ticket_price*total_ticket;
document.write("total cost to buy",total_ticket,"ticket to a movie is:",total_cost,"PKR");
document.write("<br>")
document.write("<hr>")
//  question5
document.write("<h2>QUESTION NO 5</h2>");
document.write("<br>")
let tablenumber =4;
document.write("table of" +tablenumber);
document.write("<br>")
for (let i = 1; i <= 10; i++){
    document.write("4 x ",i,"=",i*4);
    document.write("<br>");
}
document.write("<br>")

//  question6
document.write("<h2>QUESTION NO 6</h2>");
document.write("<br>")
//6a
let celcius = 25;
//6b
let cTof = (celcius * 9/5) + 32;
document.write(celcius,"&degC","is",cTof,"&degF");
document.write("br>")
//6c
let fahrenhite = 70;
//6d
let fToc = (fahrenhite -32)*5/9;
document.write(fahrenhite,"&degF","is",fToc,"&degC");
document.write("<br>");
document.write("<br>");
document.write("<hr>")

//question7
//  question7
document.write("<h2>QUESTION NO 7</h2>");
document.write("<br>")
//7a
document.write("<h2>shopping card</h2>");
document.write("<br>");
var priceItem1 = 650;
document.write("price of Item1 is:",quantityItem1);
document.write("<br>");

//7b
var quantityItem1 = 3;
document.write("quality of Item1 is:",quantityItem1);
document.write("<br>");

//7c
var priceItem2 = 100;
document.write("price of Item2 is:",priceItem2);
document.write("<br>");
//7d
var quantityItem2 = 7;
document.write("Quality of Item2 is:",quantityItem2);
document.write("<br>");

//7e
var shippingcharges = 100;
document.write("shipping charges is:",shippingcharges);
document.write("<br>");
var totalcostcart = (priceItem1*quantityItem1)+(priceItem2*quantityItem2)+shippingcharges;
document.write("total cost of your order is:",totalcostcart);
document.write("<br>");
document.write("<hr>")

//  question8
document.write("<h2>QUESTION NO 8</h2>");
document.write("<br>")


document.write("<h2>Mark sheet</h2>");
document.write("<br>");
let totalMarks = 1000;
document.write("Total Marks:",totalMarks);
document.write("<br>");
let marksobtained =980;
document.write("marks obtained:",marksobtained);
document.write("<br>");
let percentage = marksobtained/totalMarks*100;
document.write("percentage",percentage,"&");
document.write("br>");

//  question9
document.write("<h2>QUESTION NO 9</h2>");
document.write("<br>")

document.write("<h2>currency in PKR </h2>");
document.write("<hr>");
let dollars = 10;
let saudiriyals = 25;
let totalcurrencyPKR = (dollars*104.80)+(saudiriyals*28);
document.write("<hr>");
document.write("total currency in PKR is:",totalcurrencyPKR);
document.write("<hr>");

//question 10
document.write("<h2>QUESTION NO 10</h2>");
document.write("<br>")
document.write("<h2>arithmetic operation in single expression</h2>");
document.write("<br>");
let somenumber = 10;
let calculations = [(somenumber + 5)*10]/2;
//console.log(calculations)
document.write("total calculation is:",calculations);
document.write("<hr>");

//question 11
document.write("<h2>QUESTION NO 11</h2>");
document.write("<br>")
//question 11
document.write("<h2>age calculator</h2>");
document.write("<br>");

//question 11a
var currentyear =2023
document.write("current year",currentyear);
document.write("<br>");

//question 11b
var birthyear =2003
document.write("birth year",birthyear);
document.write("<br>");

//question 11c
var age =currentyear -birthyear
//console.log(age)
document.write("your are is:",age);
document.write("<hr>");

//question 12
document.write("<h2>QUESTION NO 12</h2>");
document.write("<br>")

document.write("<h2>the geomtrizer</h2>");
document.write("<br>");
//12a
let radius = 20;
document.write("radius of circle",radius);
document.write("<br>");
//12b
let pie = 3.142;
let circumference = 2*pie*radius;
document.write("the circumference is:",circumference);
document.write("<br>");
//12c
let area = pie*radius**2;
document.write("the area is:",area);
document.write("<hr>");

//question 13
document.write("<h2>QUESTION NO 13</h2>");
document.write("<br>")

document.write("<h2>the lifetime supply calculator</h2>");
document.write("<br>");
//13a
var favouriteSnack = "chocolates chop";
document.write("favourite Snake:",favouriteSnack);
document.write("<br>");
//13b
var currentage =15;
document.write("current age:",currentage);
document.write("<br>");
//13c
var maxAge =65
document.write("Estimated Maximum Age:",maxAge);
document.write("<br>");
//13d
var SnackPerDay = 3;
document.write("Amount of snack per day:",SnackPerDay);
document.write("<br>");
//13e
var totalEast = (maxAge-currentage)*SnackPerDay;
document.write9("you will need",totalEast," ",favouriteSnack,"to last you until the ipe old age of",maxAge);
document.write("<hr>")


















































































