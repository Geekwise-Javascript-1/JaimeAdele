//create a function that adds 2 numbers and multiplies the same numbers and returns the results in an array

function num2arr(num1, num2){
  return [num1 + num2, num1 * num2];
}

//console.log(num2arr(2, 3));





//create a function that compares a first number to a second
function numCompare(num1, num2){
  if(num1 > num2){
    return "larger";
  }else if(num1 == num2){
    return "equal";
  }else{
    return "smaller";
  }
}

//var a = parseInt(prompt("Enter a number.")),
//    b = parseInt(prompt("Enter another number."));

//console.log(numCompare(a, b));




//create a function that takes a single character as an input and returns true if the character is capitalized and false if the characteris lowercase.

function capCheck(){
  var getChar = prompt("Please enter a letter – uppercase or lowercase.")
  if(getChar.toUpperCase() === getChar){
    return true;
  }else{
    return false;
  }
}

//console.log(capCheck());




//create a function that takes a string as an input and returns an array of the characters in the string

function string2arr(){
  var arr = [];
  var string = prompt("Please enter a word.");

  for(var i = 0; i < string.length; i++){
    arr.push(string[i]);
  }
  return arr;
}

//console.log(string2arr());




//create a loop that prints 1-100 to the console. If a number is divisible by 3, print "Fizz" instead of the number. If a number is divisible by 5, print "Buzz" instead of the number. If a number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

function fizzBuzz(){
  for(var i = 0; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
      console.log("FizzBuzz");
    }else if(i % 3 == 0){
      console.log("Fizz");
    }else if(i % 5 == 0){
      console.log("Buzz");
    }else{
      console.log(i);
    }
  }
}

//console.log(fizzBuzz());
