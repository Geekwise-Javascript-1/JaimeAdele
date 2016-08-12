var goBtn = document.getElementById('goBtn'),
    dupOut = document.getElementById('dupOut'),
    form = document.getElementById('form');
goBtn.onclick = getInputs; //remember not to include the parentheses for a functon REFERENCE


//this function creates an array from input fields
function getInputs(){
  var formArr = [],
      formLen = form.elements.length;

  for(var i = 0; i < formLen; i++){
    formArr.push(form.elements[i].value);
  }
  checkForDups(formArr);
}

function checkForDups(arr){
  var sortArr = arr.slice().sort(),
  dupsArr = [];

  for(var i = 0; i < arr.length; i++)
    if(sortArr[i + 1] == sortArr[i]){
      dupsArr.push(sortArr[i]);
  }
  outputDups(dupsArr);
}

function outputDups(arr){
  dupOut.innerHTML = arr.join(", ");
}
