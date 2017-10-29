'use strict';
console.log('Good Morning!');
//array for object storage
var allItems = [];
var clickItems = [];
var parentImageNode = document.getElementById('Item');
console.log(allItems);
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

//initialize image object
var imgEl = {};

//display picture randomly

function randomNumber() {
  return Math.floor(Math.random() * allItems.length);
}

function randomItem() {
  //hodl parent element in a variable
  var parentElem = document.getElementById('Item');
  //loop 3 times for 3 images
  for (var i = 0; i < 3; i++) {
    //check if imgEl object is empty (it will be on initial load) if it has items in it, clear them
    if(Object.keys(imgEl).length > 0){
      removeElement(parentImageNode, imgEl[i]);
    }
    //create image attribut object for each image
    var attributes = new function() {
      this.random = allItems[randomNumber()];
      this.imageSource = this.random.filepath;
      this.id = this.random.name;
    };
    //creat a new image element for the DOM
    var img = document.createElement('IMG');
    img.src = attributes.imageSource;
    img.id = attributes.id;
    parentElem.appendChild(img);
  }
  //store new images to attach event listener to.
  imgEl = document.getElementById('Item').children;
  handleClick();
}

randomItem();
//event listener
//loop through the imgEl object which should only have 3 images
function handleClick() {
  for (var i = 0; i < imgEl.length; i++) {
    imgEl[i].addEventListener('click', function(e) {
      clickItems.push(this.id);
      console.log(clickItems);

      randomItem();
    });
  }
}
function removeElement(parent, node){
  //prevent memory leak by removing eventListener if needed.
  parent.removeChild(node);
}
//
//I need to display random images, non repeating from previously or current 3

//
//I need something that tracks number of clicks on select item and number of times item is displayed

//
//I need let the random display function run 25 times and then turn off

//
//After the 25th round turn off event listener and display results in a string
//                                                    '# of votes for item name'

//
//
//
// function images() {
//   if (surveyLength > 24) {
//     surveyEnd();
//   }
//   lastIndex = [];
//
