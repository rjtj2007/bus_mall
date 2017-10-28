'use strict';
console.log('Good Morning!');
//array for object storage
var allItem = [];

//object with constructor function
function Item(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  allItem.push(this);
}

// //make new instance of items for above function
new Item('bag', 'images/bag.jpg');
new Item('banana', 'images/banana.jpg');
new Item('bathroom', 'images/bathroom.jpg');
new Item('boots', 'images/boots.jpg');
new Item('breakfast', 'images/breakfast.jpg');
new Item('bubblegum', 'images/bubblegum.jpg');
new Item('chair', 'images/chair.jpg');
new Item('thing', 'images/cthulhu.jpg');
new Item('duck-dog', 'images/duck-dog.jpg');
new Item('dragon', 'images/dragon.jpg');
new Item('pen', 'images/pen.jpg');
new Item('pet-sweep', 'images/pet-sweep.jpg');
new Item('scissors', 'images/scissors.jpg');
new Item('shark', 'images/shark.jpg');
new Item('sweep', 'images/sweep.png');
new Item('tauntaun', 'images/tauntaun.jpg');
new Item('unicorn', 'images/unicorn.jpg');
new Item('usb', 'images/usb.gif');
new Item('water-can', 'images/water-can.jpg');
new Item('wine-glass', 'images/wine-glass.jpg');

// //event listener
var imgEl = document.getElementById('Item');
imgEl.addEventListener('click', randomItem);

//display picture randomly
function randomItem() {
  var randomIndex = Math.floor(Math.random() * allItem.length);
  return allItem[randomIndex].filepath;
}
randomItem();

//
var leftImg.src = itemArray[randomItem()].filePath;
var centerImg.src = itemArray[randomItem()].filePath;
var rightImg.src = itemArray[randomItem()].filePath;
