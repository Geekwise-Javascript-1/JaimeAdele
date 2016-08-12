//review assignment
var tech = ["HTML", "CSS", "Javascript", "PHP", "WordPress"];
console.log(tech);
var button = document.querySelector("button");

function printTech(){
  alert(tech);
}

button.onclick = printTech;
