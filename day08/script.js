var a = document.createElement("a");
a.textContent = "This is a link to Google";
//a.setAttribute("href", "http://www.google.com");
a.href = "http://www.google.com";

//console.log(a);

//document.body.appendChild(a);

setTimeout(function(){
  //document.body.removeChild(a);
}, 2000)

//a.setAttribute("style", "background-color: teal; color: white; padding: 10px;");

//a.style.backgroundColor = "purple";





// //add child element to h1 tag ...or anything
// var h1 = document.querySelector("h1");
// var a = document.createElement("a");
// a.textContent = "Click Here";
// a.href = "http://jaimeadele.com";
// a.target = "_blank";
// h1.appendChild(a);



// .appendChild()    adds an element
// .removeChild()    removes an element






function e(elementType, text, attributes, styles){
  var element = document.createElement(elementType);
  element.textContent = text;

  for(var i = 0; i < attributes.length; i++){
    var attr = attributes[i];
    element.setAttribute(attr[0], attr[1]);
  }

//remember to use a different increment variable
  for(var j = 0; j < styles.length; j++){
    var style = styles[j];
    element.style[style[0]] = style[1];
  }
  return element;
}

var a = e("a", "link to google", [['href', "http://www.google.com"], ['target', "_blank"]], [['color', "red",], ['fontSize', "22pt"]]);

document.body.appendChild(a);
