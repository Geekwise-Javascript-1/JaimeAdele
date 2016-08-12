// var element1 = document.getElementsByTagName('div')[0],
//     element2 = document.getElementsByTagName('ul')[0],
//     element3 = document.getElementsByTagName('li')[0];

//Capturing the Event
function foo(e){
  console.log(this);
}

// //Bubbling Up
// element1.addEventListener('click', foo, false);
// element2.addEventListener('click', foo, false);
// element3.addEventListener('click', foo, false);
//
// //Capturing Down
// element1.addEventListener('click', foo, true);
// element2.addEventListener('click', foo, true);
// element3.addEventListener('click', foo, true);

var input = document.getElementsByTagName('input')[0],
    btn = document.getElementsByTagName('button')[0],
    ul = document.getElementsByTagName('ul')[0],
    li;

btn.addEventListener('click', getItem);
ul.addEventListener('click', deleteItem);

function getItem(){
  createItem(captureText(input));
}

function captureText(item){
  return item.value;
}

function createItem(txt){
  li = document.createElement('li');
  li.textContent = txt;
  ul.appendChild(li);
}

function thisItem(e){
  return e.target;
}

function deleteItem(e){
  e.target.remove();
}
