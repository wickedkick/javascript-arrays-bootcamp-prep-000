var chocolateBars = [ 'snickers', 'hundred', 'grand', 'kitkat', 'skittles' ];

<<<<<<< HEAD
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

// function accessElementInArray() {
//  var person = ["Imran", "Is", "29", "years", "old"];
//  return(person[2]);
// }

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array) {
    return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
 // return array.pop();
array.pop();
return array;
}

function removeElementFromEndOfArray(array) {
 return array.slice(0, array.length - 1);
}
=======
function addElementTobeginningOfArray(array, element) {
  var myArray = [ array, ...element ]
  return myArray
}
>>>>>>> a6e36bd9dd4597615acb80241689d161056e0695
