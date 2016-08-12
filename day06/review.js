// //Challenge #1 | Square Number
//
// var getNum = parseInt(prompt("Please enter a number.")); //You can actually multiply a number string, but this is best practice.
// function square(num){
//   if(!num){
//     alert("You must enter a number.");
//     square();
//   }else{
//     return num * num;
//     alert(num);
//   }
// }
//
// alert(square(getNum));


// //Challenge #2 | Capitalize and Punctuate
//
// var getStr = prompt("Type a sentence.");
// var res = capPeriodStr(getStr);
//
// function capPeriodStr(str){
//   var upped = str.charAt(0).toUpperCase() + str.slice(1);
//   var lastChar = upped.slice(-1);
//   if(lastChar !== "."){
//     return upped + ".";
//   }
//   return upped;
// }
//
// alert(res);


// //Challenge #3 | Flip String
//
// var getStr = prompt("Type a sentence. Or random words. Or word. Or letters... Whatever suits you.");
// var flipped = flipStr(getStr);
//
// function flipStr(str){
//   if(!str){
//     return "";
//   }else if(str.length % 2 !== 0){
//     var calc = Math.ceil(str.length / 2);
//     var firstHalf = str.substring(0,str.length/2);
//     var secondHalf = str.substring(calc);
//     return secondHalf + str.charAt(str.length/2) + firstHalf;
//   }else{
//     var firstHalf = str.substring(0,str.length/2);
//     var secondHalf = str.substring(str.length/2);
//
//     return secondHalf + firstHalf;
//   }
// }
//
// alert(flipped);


//Challenge #4 | Average
var a = parseInt(prompt("Enter a number."));
var b = parseInt(prompt("Enter a number."));
var c = parseInt(prompt("Enter a number."));
var d = parseInt(prompt("Enter a number."));
var getArr = [a, b, c, d];
var res = average(getArr);

function average(arr){
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
      total += arr[i];
  }
  var avg = total / arr.length;
  return avg;
}

alert(res);
