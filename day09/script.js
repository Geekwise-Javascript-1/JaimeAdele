// var myCar = {
//   make: 'Saturn',
//   model: 'Aura',
//   year: 2007,
//   color: 'silver'
// };
//
// var me = {
//   name: 'JaimeAdele',
//   sayName: function(){
//     alert(this.name);
//   }
// };







var fruitList = {
  fruits: ['pineapples','figs','blueberries'],
  displayFruit: function(){
    console.log(this.fruits);
  },
  addFruit: function(fruit){
    this.fruits.push(fruit);
    this.displayFruit();
  },
  changeFruit: function(position, value){
    this.fruits[position] = value;
    this.displayFruit();
  },
  removeFruit: function(position){
    this.fruits.splice(position, 1);
    this.displayFruit();
  }
}
