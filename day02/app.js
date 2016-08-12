var firstName = prompt("What is your first name?");
console.log(firstName);
var lastName = prompt("What is your last name?");
console.log(lastName);
confirm("Your name is recorded as " + firstName + " " + lastName + ". If that is correct, please continue by clicking \"OK\".");
alert("You've confirmed that your name is " + firstName + " " + lastName + ".")
var favColor = prompt("What is your favorite color?");
console.log(favColor);
var age = prompt("How old are you?");
console.log(age + 1);

var bday = 1 + +age;
console.info(bday, typeof bday); // convert to number

confirm("You're claiming to be " + age + ". Please confirm that this is indeed true in order to continue.");
var friend = prompt("Who is your best friend?");
console.log(friend);
var car = prompt("State the make and model of a vehicle you think is cool.");
console.log(car);
var place = prompt("Where is one place you've always wanted to visit?");
console.log(place);

document.write("Your next birthday will be the best one you’ve ever had. On the day you turn " + bday + ", You’ll be hanging out with " + friend + ", and sometime during your time together, they will take you outside to surprise you with a brand new " + favColor + " " + car + ". Of course, you’ll be overjoyed, repeating “Thank you!” a million times, but " + friend + " will say, \“That’s not all, we’re going somewhere.\” Then you’ll hop in your new " + car + " and drive to the airport. When you park the car, " + friend + " will pull out two tickets to " + place + " for two weeks.");
