'use strict';
console.log('Good Morning!');
//array for object storage
var allItems = [];

//object with constructor function
function Item(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  allItems.push(this);
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
  var randomIndex = Math.floor(Math.random() * allItems.length);
  return allItems[randomItem].filepath;
}
randomItem();
//
//
//
//
//
//
// function images() {
//   if (surveyLength > 24) {
//     surveyEnd();
//   }
//   lastIndex = [];
//
//  lastIndex.push(randomIndex1);
//   lastIndex.push(randomIndex2);
//   lastIndex.push(randomIndex3);
//
//  //reassigning the variables foreach picture
//   randomIndex1 = Math.floor(Math.random() * itemArray.length);
//   randomIndex2 = Math.floor(Math.random() * itemArray.length);
//   randomIndex3 = Math.floor(Math.random() * itemArray.length);
//
//  //while loop to stop items doubling up or diplaying right after another
//
//  while (randomIndex1 === lastIndex[0] || randomIndex1 === lastIndex[1] || randomIndex1 === lastIndex[2] || randomIndex2 === lastIndex[0] || randomIndex2 === lastIndex[1] || randomIndex2 === lastIndex[2] || randomIndex3 === lastIndex[0] || randomIndex3 === lastIndex[1] || randomIndex3 === lastIndex[2] || randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3 || randomIndex2 === randomIndex3) {
//
//    randomIndex1 = Math.floor(Math.random() * itemArray.length);
//     randomIndex2 = Math.floor(Math.random() * itemArray.length);
//     randomIndex3 = Math.floor(Math.random() * itemArray.length);
//   }
//
//  //image sources
//   leftImg.src = itemArray[randomIndex1].filePath;
//   centerImg.src = itemArray[randomIndex2].filePath;
//   rightImg.src = itemArray[randomIndex3].filePath;
//
//  //adds 1 to times displayed for each object
//
//  itemArray[randomIndex1].timesDisplayed += 1;
//   itemArray[randomIndex2].timesDisplayed += 1;
//   itemArray[randomIndex3].timesDisplayed += 1;
//
// }
