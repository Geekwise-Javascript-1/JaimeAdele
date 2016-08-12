var button = document.createElement('button'),
    body = document.querySelector('body');


body.appendChild(button);
button.textContent = 'Click Me!';

function getPhone(){
  var phoneNum = prompt('Enter your phone number.');
  console.log(phoneNum);
}

button.onclick = getPhone;
