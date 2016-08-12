/*
var doSomething = prompt("What would you like to do?");
var trimmedDoSomething = doSomething.trim();
console.log(trimmedDoSomething);

if(trimmedDoSomething === ""){
  alert("You need to type something.");
}else{
  alert(trimmedDoSomething);
  console.log(trimmedDoSomething);
}
*/

/*
var a = parseInt(prompt("Enter a number."));
var b = parseInt(prompt("Enter another number."));

if(isNaN(a) || isNaN(b)){
  alert("You must enter numbers.")
}else{
  alert(a * b);
  alert(a / b);
}
*/


/*
var a = "pineapple, fig, pomegranate, blueberry, raspberry";
console.log(a.slice(28, 38));
*/


/*
var randNum = Math.random();
var multi = randNum * 11;
var round = Math.floor(multi);
console.log(randNum);
console.log(multi);
console.log(round);

var randomNumber = Math.floor(Math.random() * 11);
*/


/*
Math.round
Math.floor
Math.ceil
Math.random
*/


/*
function helloWorld(){
  console.log("Hello World!");
}

helloWorld();
*/



function capitalize(str){
  return str[0].toUpperCase() + str.slice(1);
  //return str.toLowerCase();
  //return str.charAt(0).toUpperCase() + str.slice(1); //capitalize only first letter of string
}

function hello(name){
  var name = prompt("Enter your name.");
  name = capitalize(name);
  alert("Hello " + name + "!");
}

hello();
