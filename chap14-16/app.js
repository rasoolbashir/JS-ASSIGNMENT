//question 1
let student = [];
//question 2
let students = {};
//question 3
let str_Array = ["a","b","c","d"];
//question 4
let num_Array =[1,2,3,4,5];
//question 5
let boolean_Array = [true,false];
//question 6
let mixed_Array = ["abc","def",20,30,true];
//question 7
document.write("<h2>Qualifications</h2>");
let Qualifications =["SSC","HSC","BS","BCOM","MS","M.Phil","PHD"];
document.write("1)",Qualifications[0],"<br>");
document.write("2)",Qualifications[1],"<br>");
document.write("3)",Qualifications[2],"<br>");
document.write("4)",Qualifications[3],"<br>");
document.write("5)",Qualifications[4],"<br>");
document.write("6)",Qualifications[5],"<br>");
document.write("7)",Qualifications[6],"<br>");
document.write("8)",Qualifications[7],"<br>");
document.write("<br>");
//question8
document.write("<h2>QUESTION NO 8");
var student_names =["ali","osama","rasool"];
var student_score =[320,230,480];
var total_marks =500;
var percentage1 =(student_score[0]/total_marks)*100;
document.write("score of "+ student_names[0]+"is"+ student_score[0]+"."+"percentage:"+percentage1 +"%");
document.write("<br>");
var percentage2 =(student_score[0]/total_marks)*100;
document.write("score of "+ student_names[0]+"is"+ student_score[1]+"."+"percentage:"+percentage2 +"%");
document.write("<br>");
var percentage3 =(student_score[0]/total_marks)*100;
document.write("score of "+ student_names[0]+"is"+ student_score[2]+"."+"percentage:"+percentage3 +"%");
document.write("<br>");

//question9
document.write("<h2>QUESTION NO 9");
let colors = ["black","blue","green",];
document.write(colors + "<br>");
//9a
colors.unshift(prompt("which color you want to add at the beginning of array"));
document.write(colors + "<br>");
//9b
colors[colors.length]=prompt("which color you want to add at the end of array");
document.write(colors + "<br>");
//9c
colors.unshift(prompt("add  the color at the beginning again?"),prompt("at one more color at the beginning again?"));
document.write(colors + "<br>");
//9d
colors.unshift();
document.write(colors + "<br>");
//9e
colors.pop();
document.write(colors + "<br>");
//9f
let index_number = prompt("at which index do you want to add color?");
let color_name = prompt(`write the color name you want to add ${index_number}?`);
color_name.splice(index_number,0,color_name);
document.write(colors + "<br>");
//9g
let delete_index = prompt("at which index you want to delete the colors?");
let color_quality = prompt("how many colors you want to delete");
colors.splice(delete_index,color_quality);
document.write(colors + "<br><hr>");
//question 10
document.write("<h2>QUESTION NO 10");
let scores = [320,230,480,120];
document.write("scores of students:"+ scores+"<br>");
let sorted_score = scores.sort();
document.write("ordered scores of students:",+sorted_score+"<br><hr>");
//question 11
document.write("<h2>QUESTION NO 11");
let cities = ["karachi","lahore","islamabad","quetta","peshawar"];
document.write("cities list:"+"<br>");
document.write(cities +"<br>");
document.write("selected cities list:"+"<br>");
document.write(selected_cities+"<br><hr>");
//question12















