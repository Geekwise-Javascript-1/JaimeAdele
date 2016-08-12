// CONSOLE LOG NUMBERS 1-10


// // While Loop
//
// var num = 1;
// while(num <= 10){
//   console.log(num);
//   num++;
// }



// // Do / While Loop
//
// var num = 1;
// do{
//   console.log(num);
//   num++;
// }while(num <= 10);



// // For Loop
// for(var i = 0; i < 10; i++){
//   console.log(i + 1);
// }



// // CONTINUE KEYWORD | console log numbers 1-10, but skip 5 and 7
//
// var num = 1;
//
// while(num <= 10){
//   if(num === 5 || num === 7){
//       num++;
//       continue;
//   }
//   console.log(num);
//   num++;
// }



// // BREAK KEYWORD | stop loop at 6
//
// for(var i = 0; i < 10; i++){
//   console.log(i);
//   if(i === 6){
//     break;
//   }
// }



// console log each item of an array separately
var fruit = ["apple", "grape", "orange", "banana", "cherry"];

for(var i = 0; i < fruit.length; i++){
  console.log(fruit[i]);
}
