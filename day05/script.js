// function toDo(){
//   var doSomething = prompt("What is something you would like to do?");
//   var trimmedDoSomething = doSomething.trim();
//   console.log(typeof(trimmedDoSomething));
//
//   if(!trimmedDoSomething){
//     alert("You must type something.");
//     toDo();
//   }else{
//     alert("You would like to " + trimmedDoSomething + ".");
//     console.log(trimmedDoSomething);
//   }
// }
//
// toDo();



//
// //doesn't work...
// function giveItToMe(){
//   var gotSomething = prompt("Type something.");
//   if(!gotSomthing){
//     alert("You must type something.");
//     giveItToMe();
//   }else{
//     alert("You said you'd like to " + giveItToMe + ".");
//     console.log(gotSomething);
//   }
// }
// giveItToMe();


// var fruit = ['pineapple', 'fig', 'pomegranate', 'blueberry', 'raspberry'];
// console.log(fruit.length);
// fruit.push('apple');
// console.log(fruit);
// console.log(fruit.length);




// var fruitColors = [];
// var cherry = ['cherry', 'red'];
// var pineapple = ['pineapple', 'yellow'];
// var blueberry = ['blueberry', 'blue']
//
// fruitColors.push(cherry);
// fruitColors.push(pineapple);
// fruitColors.push(blueberry);
//
// console.log(fruitColors[0][1]);
// console.log(fruitColors[1][1]);
// console.log(fruitColors[2][1]);


// var fruit = ['pineapple', 'fig', 'pomegranate', 'blueberry', 'raspberry'];
// // var lastFruit = fruit.pop();
// var getFruit = fruit.splice(1,3,'banana', 'apple', 'grapes', 'apple', 'orange');
// console.log(getFruit);
// console.log(fruit);


// //Today's Assignment #1
// function square(){
//   var num = parseInt(prompt("Please enter a number."));
//   if(isNaN(num)){
//     alert("You must enter a number.");
//     square();
//   }else{
//     var squareNum = num * num;
//     alert(squareNum);
//   }
// }
//
// square();


// //Today's Assignment #2
// function sentCap(str){
//   return str[0].toUpperCase() + str.slice(1);
// }
//
// function sentence(){
//   var sent = prompt("Type a sentence.");
//   var trimSent = sent.trim();
//   if(trimSent == "" || !isNaN(trimSent)){
//     alert("You must type a sentence.");
//     sentence();
//   }else{
//     trimSent = sentCap(trimSent);
//     var lastChar = trimSent.slice(-1)
//     if(lastChar === "."){
//       alert(trimSent);
//     }else{
//       var finalSent = trimSent + ".";
//       alert(finalSent);
//     }
//   }
// }
//
// sentence();


//Today's Assignment #3
function flip(){
  
}

flip();
