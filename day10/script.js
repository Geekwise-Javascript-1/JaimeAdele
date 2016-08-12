var btn = document.querySelectorAll('button'),
    a = document.querySelector('a');

for(var i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', changeColor)
  // btn[i].addEventListener('mouseover', function(){
  //   this.style.color = 'magenta';
  // });
  // btn[i].addEventListener('mouseout', function(){
  //   this.style.color = 'teal';
  // });
}

a.addEventListener('click', removeColor);

function changeColor(){
  //alert(this.dataset.response);
  document.body.style.backgroundColor = this.id;
};

function removeColor(){
  var randNum = Math.floor( (Math.random() * 3) + 1 );
  console.log(randNum);
  btn[randNum].removeEventListener('click', changeColor);
}
