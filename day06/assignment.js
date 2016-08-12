// RUN FUNCTION ON BUTTON CLICK

var input1 = document.getElementById('input1'),
    input2 = document.getElementById('input2'),
    input3 = document.getElementById('input3'),
    input4 = document.getElementById('input4'),
    input5 = document.getElementById('input5'),
    btn = document.getElementById('btn'),
    span = document.getElementById('span');


btn.onclick = handleGoBtnClick;

function handleGoBtnClick(){

  //console.log(input1.value);

  var val2 = input2.value;
  if(val1 === "" || val2 === ""){
    return '';
  }
  input1.value = 'Hello Javascript!';
  var val1 = input1.value;
  var userInput = input1.value;
  alert(val1);
  span.innerHTML = val2;
  //updateOutput(input2.value);
}




//assignment
//5 inputs
//go button
//onclick grab values of the inputs
//push into array
//check for duplicates
// if/else if/else
