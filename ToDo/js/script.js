var input = document.getElementById('input'),
    button = document.getElementById('button'),
    taskList = document.getElementById('htmlTaskList'),
    //taskList = [],
    form = document.getElementById('form'),
    inputValue,
    li,
    i,
    item;


form.addEventListener('submit', function(evt){
  evt.preventDefault();
  inputValue = input.value;
  if(!inputValue){
    alert("You must enter a task.");
  }else{
    //taskList.push(inputValue);
    form.reset();
    var newli = createLI(inputValue);
    taskList.appendChild(newli);
  }

})
taskList.addEventListener('mouseover', hover);
taskList.addEventListener('mouseout', hoverout);

function hover(event){
  //console.log(event);
  var item = event.target;
  item.firstChild.addEventListener('click', removeTask);
  //console.log(item.firstChild);
  //taskList.addEventListener('click', removeTask);
}

function hoverout(event){
  var item = event.target;
  item.removeEventListener('click', removeTask);
  console.log("hover out");
}

function createLI(string){
  li = document.createElement('li'),
  i = li.appendChild(document.createElement('i'));
  i.setAttribute('class', "glyphicon glyphicon-ok done-button");
  li.appendChild(document.createTextNode(string));
  return li;
}

//li = getElementsByTagName('li');
// li.addEventListener('mouseover', hover(), false);
// li.addEventListener('mouseout', function () {
//     li.removeEventListener('mouseover');
//     li.removeEventListener('mouseout');
// }, false);
//li.addEventListener('mouseout', removeEventListener('mouseover', hover());


function removeTask(e){
  // console.log(e);
  // console.log(e.target);
  // console.log(this);
  this.parentElement.remove();
    //e.target.parentNode.remove();
  //e.target.parentNode.remove();
}
