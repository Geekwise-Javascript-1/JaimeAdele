function foo(){
  var a = "inside function foo";
  return a;
}

//console.log(a); - does not work
//console.log(foo()); - does work



// var name = 'jaime';
// function capitalize(){
//   return name[0].toUpperCase() + name.slice(1); //get the first letter of the "array"
// }
//
// var capitalizedName = capitalize();
// console.log(capitalizedName);
// //this works



// var capitalize = function(str){
//   return str[0].toUpperCase() + str.slice(1);
// }
//
// console.log(capitalize('hi there!'))
// //this works



// logName("Jaime");
//
// function logName(name){
//   console.log(name);
// }
// //this works



// logAgain("Jaime");
//
// var logAgain = function(name){
//   console.log(name);
// }
// //this doesn't work



// var name = "Adam";
// function alertName(){
//   alert(name);
//
//   var name = "Eve";
//   alert(name);
// }
//
// alertName();
// //this doesn't really work because of HOISTING and SCOPE



// var h1 = document.getElementById("h1");
// var hasClass = h1.hasAttribute('class');
// h1.setAttribute('rel', 'whatever');
// console.log(h1);
//
// h1.removeAttribute('rel');
// console.log(h1);




var anchors = document.querySelectorAll('ul li a');
console.log(anchors.item(1));
for(var i = 0; i < anchors.length; i++){
  var anchor = anchors.item(i);
  console.log(anchor);
}
