'use strict';

console.log('Good Morning!');

var catalogueImages = [];
var catalogue = document.getElementById('catalogue');
var imgEl1 = document.getElementById('image1');
var imgEl2 = document.getElementById('image2');
var imgEl3 = document.getElementById('image3');
var status = document.getElementById('status');
var holdingArray = [];
var pageTotalClicks = 0;

//constructor funciton
function MakeCatalogue(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.shown = 0;
  this.clicks = 0;
  catalogueImages.push(this);
}

//constructor call
function MakeItem() {
  new Item('bag', 'images/bag.jpg');
  new Item('banana', 'images/banana.jpg');
  new Item('bathroom', 'images/bathroom.jpg');
  new Item('boots', 'images/boots.jpg');
  new Item('breakfast', 'images/breakfast.jpg');
  new Item('bubblegum', 'images/bubblegum.jpg');
  new Item('chair', 'images/chair.jpg');
  new Item('cthulhu', 'images/cthulhu.jpg');
  new Item('duck-dog', 'images/dog-duck.jpg');
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
}

imgEl1.addEventListener('click', totalClicks1);
imgEl2.addEventListener('click', totalClicks2);
imgEl3.addEventListener('click', totalClicks3);

//use for all instances of random number
function randomNumber() {
  return Math.floor(Math.random() * catalogueImages.length);
}

for (var i = 0; i < catalogueImages.length; i++) {
  var num1 = randomNumber();
  var num2 = randomNumber();
  var num3 = randomNumber();

  while (num1 !== num2 || num1 !== num3 || num2 !== num3) {
  }
  imgEl.src = catalogueImages(num1);
}

function totalClicks1() {
  holdingArray[randomIndex1].clicks++;
  pageTotalClicks++;
  console.log(pageTotalClicks);
  executeImages();
  makeList();
}

function totalClicks2() {
  holdingArray[randomIndex2].clicks++;
  pageTotalClicks++;
  console.log(pageTotalClicks);
  executeImages();
  makeList();
}

function totalClicks3() {
  holdingArray[randomIndex3].clicks++;
  pageTotalClicks++;
  console.log(pageTotalClicks);
  executeImages();
  makeList();
}

function randomImage1() {
  var randomIndex1 = randomNumber();
  if (pageTotalClicks > 24) {
    imgEl1.removeEventListener('click', totalClicks1);
  }
  var previousIndex1 = holdingArray[0];
  previousIndex1 = catalogueImages.indexOf(previousIndex1);

  var previousIndex2 = holdingArray[1];
  previousIndex2 = catalogueImages.indexOf(previousIndex2);

  var previousIndex3 = holdingArray[2];
  previousIndex3 = catalogueImages.indexOf(previousIndex3);

  while (randomIndex1 === previousIndex1 || randomIndex1 === previousIndex2 || randomIndex1 === previousIndex3) {
    randomIndex1 = Math.floor(Math.random() * catalogueImages.length);
  }
  holdingArray[0].shown += 1;
  imgEl1.src = catalogueImages[randomIndex1].filePath;
}

// function randomImage2() {
//   if (pageTotalClicks > 24) {
//     imgEl2.removeEventListener('click', totalClicks2);
//   }
//   var randomIndex2 = Math.floor(Math.round() * holdingArray.length);
//   while (randomIndex2 === randomIndex1 || randomIndex2 === previousIndex1 || randomIndex2 === previousIndex2 || randomIndex2 === previousIndex3) {
//     randomIndex2 = Math.floor(Math.random() * holdingArray.length);
//   }
//   holdingArray[randomIndex2].timesShown += 1;
//   ingEl2.src = holdingArray[randomIndex2].filePath;
// }
//
// function randomImage3() {
//   if (pageTotalClicks > 24) {
//     imgEl3.removeEventListener('click', totalClicks3);
//   }
//   var randomIndex3 = Math.floor(Math.round() * holdingArray.length);
//
//   while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2 || randomIndex3 === previousIndex1 || randomIndex3 === previousIndex2 || randomIndex3 === previousIndex3) {
//
//     imgEl3.src = holdingArray[randomIndex3].filePath;
//     holdingArray[randomIndex3].timesShown += 1;
//   }
// }

// function executeImages() {
//   randomImage1();
//   randomImage2();
//   randomImage3();
//   previousIndex1 = randomIndex1;
//   previousIndex2 = randomIndex2;
//   previousIndex3 = randomIndex3;
// }
// executeImages();

// function makeList() {
//   if (pageTotalClicks === 25) {
//     console.log('test');
//     var ulEl = document.getElementById('list');
//     for (var i = 0; i < holdingArray.length; i++) {
//       var liEl = document.createElement(li);
//       liEl.textContent = holdingArray[i].name + 'was selected ' + holdingArray[i].totalClicks + ' times.';
//       ulEl.appendChild(liEl);
//     }
//   }
// }
