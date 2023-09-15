let arrayofArray = [
    [],
    [],
    []
];

//Question2
document.write(<h3>Question2</h3>)
var mulDiamArray = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
document.write(mulDiamArray[0]+"<br>"+mulDiamArray[1]+"<br>"+mulDiamArray[2]+"<br>");

//Question3
document.write(<h3>Question3</h3>);
for(let index = 1; index <=10 ; index++){
    document.write(index,"<br>");
};
//Question4
document.write(<h3>Question4</h3>)
let tableNumber = +prompt("Enter a number to show its multiplication table:");
let tableLength = +prompt("Enter length multiplication table:");
document.write("Multiplication  table of"+ tableNumber +"<br>");
document.write("length"+ tableLength +"<br>");
for (let i =1 ; i <= tableLength; i++){
    document.write(tableNumber +"x" +  i +"="+tableNumber*i +"<br>");
}
//Question5
document.write(<h3>Question5</h3>)
var fruits = ["apple","banana","mango","orange","strawberry"];
for (let index = 0; index < fruits.length;index++){
    document.write(fruits[index],"<br>");
}
for (let i = 0; i < fruits.length; i++){
    document.write("Element at index"+i+"is"+fruits[i]+"<br>");
}

//Question6
document.write(<h3>Question6</h3>)
//Question6a
document.write(<h3>counting</h3>)
for (let i = 1; i <= 15; i++){
    document.write(i + ",")
}
//6b
for (let i = 10; i >= 1; i--){
    document.write(i + ",")
}
//6c
document.write(<h3>Even</h3>)
for (let i = 0; i <= 20; i+=2){
    document.write(i + ",")
}
//6d
document.write(<h3>Odd</h3>)
for (let i = 1; i < 20; i+=2){
    document.write(i + ",")
}
//6e
document.write(<h3>series</h3>)
for (let i = 2; i <= 20; i+=2){
    document.write(i +"k"+ ",")
}

//Question7
document.write(<h3>Question7</h3>)
let myBakeryItems = ["cake","apple pie","cookies","chips","patties"];
let userInput = prompt("welcome to ABC bakery.what do you want to order sir/ma'ma?");
userInput = userInput.toLowerCase();
let matchFound = false;
let itemindex;
for (let i =0; i < myBakeryItems.length; i++){
    let currentItems = myBakeryItems[i].toLowerCase();
    if (currentItems === userInput){
        matchFound = true;
        itemindex = i;
    }
}
if(matchFound){
    alert(userInput + "is avilable at index"+itemindex+"in our bakery");
}else{
    alert("we are sorry"+userInput+"is not avilable in our bakery")
}

//Question8
document.write(<h3>Question8</h3>)
let A =[24, 53,78,91,12];
let largesNumber = A[0];
document.write("Array items:"+A+"<br>");
for (let i = 0; i < A.length; i++){
    if (A[i]>largesNumber){
        largesNumber = A[i];
    }
}
document.write("the larges number is"+largesNumber);

//Question9
document.write(<h3>Question9</h3>)
let A1 =[24, 53,78,91,12];
let smallestNumber = A1[0];
document.write("Array items:"+A1+"<br>");
for (let i = 0; i < A1.length; i++){
    if (A[i]<smallestNumber){
        smallestNumber = A1[i];
    }
}
document.write("the larges number is"+smallestNumber);

//Question10
document.write(<h3>Question10</h3>)
for (let i =5; i <=100; i+=5){
    document.write(i + ",");
}























