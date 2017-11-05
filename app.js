'use strict';

var allItem = [];
var queue = [];
// var catalogue = document.getElementById('catalogue');
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var totalClicks = 0;
// var status = document.getElementById('status');
// var holdingArray = [];
// var counter = 0;
// var pageTotalClicks = 0;
// var votes = [];
// var imgIds = [];

//constructor funciton
function Item(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.shown = 0;
  this.clicked = 0;
  allItem.push(this);
}

//constructor call
function makeItem() {
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
};
makeItem();

//use for all instances of random number
function randomNumber() {
  return Math.floor(Math.random() * 20);
  console.log('run some random numbers');
}

for (var i = 0; i < 6; i++) {
  queue.push(randomNumber());
}

function random3Numbers() {
  //first random number
  var number1 = randomNumber();
  while (queue.indexOf(number1) >= 0) {
    number1 = randomNumber();
  }
  queue.push(number1);
  queue.shift();
  console.log('new queue with number1 ' + queue);

  //second random number
  var number2 = randomNumber();
  while (queue.indexOf(number2) >= 0) {
    number2 = randomNumber();
  }
  queue.push(number2);
  queue.shift();
  console.log('new queue with number2 ' + queue);

  //third random number
  var number3 = randomNumber();
  while (queue.indexOf(number3) >= 0) {
    number3 = randomNumber();
  }
  queue.push(number3);
  queue.shift();
  console.log('new queue with number3 ' + queue);
}
random3Numbers();

//make 3 seperate images for display
function make3Images() {
  var firstImageFilePath = allItem[queue[3]].filePath;
  allItem[queue[3]].shown++;
  var secondImageFilePath = allItem[queue[4]].filePath;
  allItem[queue[4]].shown++;
  var thirdImageFilePath = allItem[queue[5]].filePath;
  allItem[queue[5]].shown++;
  image1.src = firstImageFilePath;
  image2.src = secondImageFilePath;
  image3.src = thirdImageFilePath;
}
make3Images();

if (totalClicks > 3) {
  image1.removeEventListener('click', image1Click);
  image2.removeEventListener('click', image2Click);
  image3.removeEventListener('click', image3Click);
}

//add event listener for 1 2 3
function image1Click() {
  allItem[queue[3]].clicked++;
  totalClicks++;
  console.log('image 1 ' + allItem[queue[3]].name + allItem[queue[3]].clicked);
  random3Numbers();
  make3Images();
  console.log('totalClicks ' + totalClicks);
}
image1.addEventListener('click', image1Click);

function image2Click() {
  allItem[queue[4]].clicked++;
  totalClicks++;
  console.log('image 2 ' + allItem[queue[4]].name + allItem[queue[4]].clicked);
  random3Numbers();
  make3Images();
}
image2.addEventListener('click', image2Click);

function image3Click() {
  allItem[queue[5]].clicked++;
  totalClicks++;
  console.log('image 3 ' + allItem[queue[5]].name + allItem[queue[5]].clicked);
  random3Numbers();
  make3Images();
}
image3.addEventListener('click', image3Click);

//
// function totalClicks1() {
//   holdingArray[randomIndex1].clicks++;
//   pageTotalClicks++;
//   console.log(pageTotalClicks);
//   executeImages();
//   makeList();
// }
//
// function totalClicks2() {
//   holdingArray[randomIndex2].clicks++;
//   pageTotalClicks++;
//   console.log(pageTotalClicks);
//   executeImages();
//   makeList();
// }
//
// function totalClicks3() {
//   holdingArray[randomIndex3].clicks++;
//   pageTotalClicks++;
//   console.log(pageTotalClicks);
//   executeImages();
//   makeList();
// }
//
// function randomImage1() {
//   var randomIndex1 = randomNumber();
//   if (pageTotalClicks > 24) {
//     imgEl1.removeEventListener('click', totalClicks1);
//   }
//   var previousIndex1 = holdingArray[0];
//   previousIndex1 = catalogueImages.indexOf(previousIndex1);
//
//   var previousIndex2 = holdingArray[1];
//   previousIndex2 = catalogueImages.indexOf(previousIndex2);
//
//   var previousIndex3 = holdingArray[2];
//   previousIndex3 = catalogueImages.indexOf(previousIndex3);
//
//   while (randomIndex1 === previousIndex1 || randomIndex1 === previousIndex2 || randomIndex1 === previousIndex3) {
//     randomIndex1 = Math.floor(Math.random() * catalogueImages.length);
//   }
//   holdingArray[0].shown += 1;
//   imgEl1.src = catalogueImages[randomIndex1].filePath;
// }
//
// function randomImage2() {
//   if (pageTotalClicks > 24) {
//     imgEl2.removeEventListener('click', totalClicks2);
//   }
//   var previousIndex1 = holdingArray[0];
//   var previousIndex1 = catalogueImages.indexOf(previousIndex2);
//
//   var previousIndex2 = holdingArray[1];
//   previousIndex2 = catalogueImages.indexOf(previousIndex2);
//
//   var previousIndex3 = holdingArray[2];
//   previousIndex3 = catalogueImages.indexOf(previousIndex3);
//
//   while (randomIndex2 === randomIndex1 || randomIndex2 === previousIndex1 || randomIndex2 === previousIndex2 || randomIndex2 === previousIndex3) {
//     randomIndex2 = Math.floor(Math.random() * catalogueImages.length);
//   }
//   holdingArray[1].shown += 1;
//   ingEl2.src = catalogueImages[randomIndex2].filePath;
// }
//
// function randomImage3() {
//   if (pageTotalClicks > 24) {
//     imgEl3.removeEventListener('click', totalClicks3);
//   }
//   var previousIndex1 = holdingArray[0];
//   var previousIndex1 = catalogueImages.indexOf(previousIndex2);
//
//   var previousIndex2 = holdingArray[1];
//   previousIndex2 = catalogueImages.indexOf(previousIndex2);
//
//   var previousIndex3 = holdingArray[2];
//   previousIndex3 = catalogueImages.indexOf(previousIndex3);
//
//   while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2 || randomIndex3 === previousIndex1 || randomIndex3 === previousIndex2 || randomIndex3 === previousIndex3) {
//
//     imgEl3.src = holdingArray[randomIndex3].filePath;
//     catalogueImages[randomIndex3].shown += 1;
//   }
// }
//
// // function executeImages() {
// //   randomImage1();
// //   randomImage2();
// //   randomImage3();
// //   previousIndex1 = randomIndex1;
// //   previousIndex2 = randomIndex2;
// //   previousIndex3 = randomIndex3;
// // }
// // executeImages();
//
// // function makeList() {
// //   if (pageTotalClicks === 25) {
// //     console.log('test');
// //     var ulEl = document.getElementById('list');
// //     for (var i = 0; i < holdingArray.length; i++) {
// //       var liEl = document.createElement(li);
// //       liEl.textContent = holdingArray[i].name + 'was selected ' + holdingArray[i].totalClicks + ' times.';
// //       ulEl.appendChild(liEl);
// //     }
// //   }
// // }
