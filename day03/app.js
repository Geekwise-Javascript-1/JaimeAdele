/*
var firstName = prompt("Please enter your first name.");
var lastName = prompt ("Please enter your last name.");
console.log(firstName);
alert(lastName);
var conf = confirm("Please confirm that your name is " + firstName + " " + lastName);
alert(conf);
*/


//var firstNumber = prompt("Type a random number.");
//var secondNumber = prompt ("Type another random number.")
//var sum = parseInt(firstNumber) + parseInt(secondNumber);
//alert("The sum of your numbers is " + sum);

/*
var a, b, c, d, e, f, g;
a = prompt('type a number');
b = prompt('type another number');
c = parseInt(a);
d = parseInt(b);
e = c + d;
f = "JaimeAdele"
*/

/*
var age = parseInt(prompt("enter your age"));
var gender = prompt("enter your gender")
if(age < 18 && gender === "female"){
  alert("girl");
}else if(age < 18 && gender === "male"){
  alert("boy");
}else if(age >=18 && age <=65 && gender === "female"){
  alert("lady");
}else if(age >=18 && age <=65 && gender === "male"){
  alert("man");
}else if(age >65 && gender === "female"){
  alert("old woman");
}else{
  alert("old man");
}
*/

var age = prompt("enter your age");
var gender = prompt("enter your gender")

switch(age){
  case(age < 18 && gender === "female"):
    alert("girl");
    break;
  case(age < 18 && gender === "male"):
    alert("boy");
    break;
  case(age >=18 && age <=65 && gender === "female"):
    alert("lady");
    break;
  case(age >=18 && age <=65 && gender === "male"):
    alert("man");
    break;
  case(age >65 && gender === "female"):
    alert("old woman");
    break;
  default:
    alert("old man");
}
