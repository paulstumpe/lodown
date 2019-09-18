'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection.
 */
 
function each(collection, action) {
//takes collection
//takes function called action

    //if collection is an array 
    if(Array.isArray(collection)) {
        //loop through the collection
        for(var i = 0; i < collection.length; i++) {
            //call the function with arguments based on this current index of array
            action(collection[i], i, collection);
        }
    //if collection is not an array (object)
    } else {
        //loop through object prop/keys
        for (var key in collection) {
            //call the function with arguments based on current key position
            action(collection[key], key, collection);
        }
    }
};
module.exports.each = each;

/**
 * identity: Designed to take any value and return that value unchanged.
 * 
 * @param {Any Datatype} value: The value to be returned.
 * @return {Any Datatype} value: The value returned unchanged. 
 * 
 */
 
function identity(value) {
 return value; 
};
 
module.exports.identity = identity; 

/**
 * typeOf: Designed to take any value and return value datatype.
 * 
 * @param {Any Datatypes} value: The value of unknown datatype.
 * @return {Any Datatypes} value: The known datatype returned as string.
 * 
 */
 
function typeOf(value) {
//takes any value
//long conditional tests
//iterate from most specific to catch all boolean -> object

    
 //boolean
 if (value === true || value === false) {
     return 'boolean';
 //null
 } else if (value === null) {
     return 'null'; 
 //number
 } else if (value > -Infinity && value < Infinity) {
     return 'number';
 //undefined
 } else if (value === undefined) {
     return 'undefined';
 //string
 } else if (Object.prototype.toString.call(value) == '[object String]') {
     return 'string';
 //array
 } else if (Array.isArray(value)) {
     return 'array';
 //function
 } else if (value instanceof Function) {
     return 'function';
 //object
 } else if (value instanceof Object) {
     return 'object';
 }
 
}
module.exports.typeOf = typeOf;
 
/**
 * first: Designed to take an array and a number
 * and return that number of elements from the beginning of the array.
 * 
 * @param {An Array} array: An array with an unknown number of elements.
 * @param {A Number} number: An unknown number.
 * @return {An Array} array: The returned array with given number of elements 
 * from zero-index of array.
 * 
 */
 
function first(array, number) {
//takes an array
//takes a number

//conditional tests: 
    //test array to see if array is array
    if (!Array.isArray(array) || number < 0) {
       return []; 
    } 
    
    //if number is not a given number or not a number
    //return the first element in array
    //otherwise return that number of elements
    if (number === undefined || Number.isNaN(number) || number === 1) {
        return array[0];
    } else {
        //slice beginning and end 
        return array.slice(0, number);
    }
    
}
module.exports.first = first;

/**
 * last: Designed return the last element of an array, or an array starting from
 * the last element and counting back based on the arguments given. returns
 * an empty array, if given a non-array argument.
 * 
 * @param {An Array} array: The array retrieve from.
 * @param {A Number} number: The length of the array to be returned. if number 
 * is 1, not a number, or not given, will return just return first element.
 * @return {An Array or A Value}: An array or last element in an array.
 */
function last(array, number) {
//takes an array
//takes a number
    if (!Array.isArray(array) || number < 0) {
       return []; 
    } 
    
    //if number is not a given number or not a number
    //return the last element in array
    //otherwise return that number of elements from end
    if (number === undefined || Number.isNaN(number) || number === 1) {
        return array[array.length - 1];
    //else if number is greater than array length 
    //return array
    } else if (number > array.length) {
        return array;
    } else {
        //slice beginning and end 
        return array.slice(array.length - number, array.length);
    }
    
}
module.exports.last = last;

/**
 * indexOf: Designed to return the index or location of a provided value inside 
 * of a provided array.
 * 
 * @param{An Array} array: The array to be searched through for the value.
 * @param{A Value} value: The value to find the index of inside of the array.
 * @return(A Number) x or i: The first index you can find the value at inside of 
 * the array if -1 the value was never found in the provided array.
 * 
 * 
 */

function indexOf(array, value) {
//takes an array
//takes a value

//return the index of array where value exists
//return -1 if value is not in array
//do not use [].indexOf()!
//EDGE: 
    //what if array has multiple occurances?

    
//default variable
let x = -1;
for (let i = 0; i < array.length; i++) {
    //test to see if val exists
    if (value === array[i]) {
        return i;
    } 
}
return x; 
};
module.exports.indexOf = indexOf;
  
/**
 * contains: designed to see if an array contains the provided value, and return
 * true if it is contained
 * 
 * @param {An Array} array: The array to search for value.
 * @param {A Value} value: The value to be searched for.
 * @return{A Boolean} (exists > 0 ? true: false): The boolean true if value was 
 * found in an array, false otherwise.
 */
 
function contains(array, value) {
//takes an array
//takes a value
//EDGE: did you use ===
    //what if no value is given
    
//return true if array contains value
//return false otherwise
//MUST use ternary operator ?
let exists = 0; 
for(let i = 0; i < array.length; i++) {
  //return true if array contains value? true : false otherwise
  if (value === array[i]) {
      //set exists to true
      exists++;
  }
}
//use ternary
return (exists > 0 ? true: false);
    
};
module.exports.contains = contains;

   
/**
 * unique: Designed to take an array, remove duplicates, and return a new array.
 * 
 * @param {An Array} array: The array to remove duplicates from.
 * @return {An Array} newArray: newArray with duplicates removed from given <array>
 */
 
function unique(array) {
//takes an array
//returns a new array of all elements from <array>
//removes duplicates

//loop through array
let newArray = [];
for (let i = 0; i < array.length; i++) {
     if (indexOf(newArray, array[i]) === -1) {
       newArray.push(array[indexOf(array, array[i])]);
     }
   }
  return newArray;
}
module.exports.unique = unique;
 
/**
 * filter: Designed to call a function once for each element of the array, passing
 * the element as the argument to the function, and returns an array with the
 * elements where the function returned true.
 * 
 * @param {An Array} array: The array to test the truethiness of values.
 * @param {An Action} action: The function to test truthiness with.
 * @return(An Array) nA: An array of the elements which returned true.
 */
 function filter(array, action) {
//takes an array
//takes a function
let nA = [];
for (let i = 0; i < array.length; i++) {
    if (action(array[i], i, array) !== true || false) {
      
    } else if (action(array[i], i, array)) {
      nA.push(array[i]);
    } 
  }
return nA; 
};
module.exports.filter = filter;
 
/**
 * reject: Designed to call a function once for each element of the array, passing
 * the element as the argument to the function, and returns an array with the
 * elements where the function returned false.
 * 
 * @param {An Array} array: The array to test the truethiness of values.
 * @param {A Function} action: The function to test truthiness with.
 * @return(An Array) yep: An array of the elements which returned false.
 * 
 */
 
//takes array
//takes function
//output is array
//c must use .filter()
//use _.filter
function reject (array, action){
//this is an array of values i dont want to add to new array
let nope = filter(array, action);
console.log(nope);
let yep = [];
for (let i = 0; i<array.length; i++){
    if (array[i] !== nope[i]){
        yep.push(array[i]);
    }
    
}
for (let i = 0; i < yep.length; i++) {
    if (action(yep[i], i, yep) !== true || false) {
      yep.splice(i-1,1);
    } else if (!action(yep[i], i, yep)) {
      
    } 
  }
return yep;
}
module.exports.reject = reject;
 
/**
 * partition: designed to seperate an array into two arrays, based on the boolean
 * evaluation of the function called on each element of the original array.
 * 
 * @param {An array} array: An array to test the values truthiness of.
 * @param {A function} func: Function to evaluate the truthiness of values.
 * @return {An Array} [trueArray, falseArray]: Returns an array with two values. 
 * The first value is an array for all values that return true. The second is 
 * an array of all values that returned false.
 */
 
//takes array and function
function partition(array, func){
    //
    let trueArray =[];
    let falseArray = [];
    //loop through array
    for(let i = 0; i <array.length; i++){
        //if true
        if (func(array[i],i,array)===true){
            trueArray.push(array[i]);
            
            //if false
        } else if(func(array[i], i, array) === false){
            falseArray.push(array[i]);            
        }
    }
    return [trueArray, falseArray];
}
module.exports.partition = partition;
 
/**
 * map: Designed to take an array or an object and return a new array containing
 * the return of the given <function> called to interact in some way with/upon
 * the given array or object <collection>.
 * 
 * @param {An Array or Object} collection: The collection to be acted upon.
 * @param {A Function} action: The function that will interact in some way 
 * with given <collection>.
 * @return {An Array} nA: New array assigned to the return value of <action>
 */

function map(collection, action) {
//takes a collection
//takes a function
let nA = [];
//call function for each element in collection passing the arguments:
if (Array.isArray(collection)) {
   for (let i = 0; i < collection.length; i++) {
    //if collection is an array
        //the element, its index, collection
      nA.push(action(collection[i], i, collection));
   }
} else if (collection instanceof Object) {
    //if collection is an object
    for (let key in collection) {
//the value, its key, collection
     nA.push(action(collection[key], key, collection));
//save the return value of each function call in a new array
//return the new array
    }
 }
 return nA; 
};
module.exports.map = map;

/**
 * pluck: Designed to return the property values from a given array in a new 
 * array, using the map function within.
 * 
 * @param {An Array} array: The array containing values to be returned.
 * @param {A Property} property: A property/key variable for our array.
 * @return {An Array} _.map(array, a => a[property]);: Returns a new array with 
 * the property values of our given array.
 */
    
//array input is an array of objects
function pluck(array, property) {
//takes an array of objects
//takes a property

//return an array containing:
//the value of property for every element in array

//we can loop through our array
//and then take all of the values of array[i].property
return map(array, a => a[property]);

//you must use map!
};
module.exports.pluck = pluck;

/**
 * every: Designed to take a <collection> and a <function> and return true if 
 * every call of <function> on collection elements returns true, otherwise
 * false. If no function is given, tests truthiness/falsiness of every element
 * and returns true if all are true, otherwise false.
 * 
 * @param {An Array or Object} collection: The collection containing elements 
 * to be tested by function.
 * @param {A Function} action: Function to be tested on collection elements.
 * @return {A Boolean} result: The boolean results of function tested 
 * on collection elements or the truthie/falsie of elements if no function
 * was given.
 * 
 */
 
function every(collection, action) {
//takes a collection
//takes a function

//edge:
//what if function doesn't return a boolean?
//what if function is not given?

if (action === undefined) {

    let result = false;
    if (Array.isArray(collection)) {
        //current element, it's index, collection
    for (let i = 0; i < collection.length; i++) {
    //check if it returns true
      if (collection[i]) {
        result = true; 
     }
     }
    } else if (collection instanceof Object) {
     for (let key in collection) {
    //if collection is an object
    //current value, current key, collection
    //if the return value of calling <function> foor every element is true return true
         if (collection[key]) {
            result = true;
         }
    }
}
 return result;
}
 //else
 //call function for every element of collection w the parameters:
    //if collection is an array: 
    let result = true;
    if (Array.isArray(collection)) {
        //current element, it's index, collection
    for (let i = 0; i < collection.length; i++) {
    //check if it returns true
      if (!action(collection[i], i, collection)) {
        result = false; 
     }
     }
    } else if (collection instanceof Object) {
     for (let key in collection) {
    //if collection is an object
    //current value, current key, collection
    //if the return value of calling <function> foor every element is true return true
         if (!action(collection[key], key, collection)) {
            result = false;
         }
    }
    //edge
     //what if function doesn't return boolean
    }
     return result;
}
module.exports.every = every;
 
/**
 * some: Designed to take a <collection> and a <function> and return true if 
 * any call of <function> on collection elements returns true, otherwise
 * false. If no function is given, tests truthiness/falsiness of every element
 * and returns true if any are true, otherwise false.
 * 
 * @param {An Array or Object} collection: The collection containing elements 
 * to be tested.
 * @param {A Function} action: Function to be tested on elements.
 * @return {A Boolean} result: The boolean result of function test on elements
 * or truthie/falsie of elements if no function was given.
 */
 
function some(collection, action) {
//takes a collection
//takes a function

//call function for every array or object
//if array e, i, c
//if obj v, k, c
//if the return value is true for at least one element, return true
//if false for all elements return false
//if function is not provided return true if at least one element is truthy otherwise return false

if (action === undefined) {

    let result = false;
    if (Array.isArray(collection)) {
        //current element, it's index, collection
    for (let i = 0; i < collection.length; i++) {
    //check if it returns true
      if (collection[i]) {
        result = true; 
     }
     }
    } else if (collection instanceof Object) {
     for (let key in collection) {
    //if collection is an object
    //current value, current key, collection
    //if the return value of calling <function> foor every element is true return true
         if (collection[key]) {
            result = true;
         }
    }
}
 return result;
}
 //else
 //call function for every element of collection w the parameters:
    //if collection is an array: 
    let result = false;
    if (Array.isArray(collection)) {
        //current element, it's index, collection
    for (let i = 0; i < collection.length; i++) {
    //check if it returns true
      if (action(collection[i], i, collection)) {
        result = true; 
     }
     }
    } else if (collection instanceof Object) {
     for (let key in collection) {
    //if collection is an object
    //current value, current key, collection
    //if the return value of calling <function> foor every element is true return true
         if (action(collection[key], key, collection)) {
            result = true;
         }
    }
    //edge
     //what if function doesn't return boolean
    }
     return result;
}
module.exports.some = some;
 
 /**
 * reduce: Designed to take an array, a function, and an optional seed starting 
 * value and iterate through the given <array> performing the function action
 * on each element from starting position to end. Returns the value of
 * the last function call.
 * 
 * @param {An Array} collection: The array to be iterated through and containing
 * elements for function to be called upon.
 * @param {A Function} action: Function to be performed on array.
 * @param {A Value} seed: The optional starting value of iteration.
 * @return {A Value} previousR: Value of last function call stored in variable
 * called previousR. 
 */
 

function reduce(collection, action, seed) {
//an array
//a function
//a seed(?)

//collection is array
//for loop?
//set seed binding 
if (seed !== undefined) {
let previousR = seed;
for (let i = 0; i < collection.length; i++) {
//call the function on every element
  previousR = action(previousR, collection[i], i);
}
return previousR;
} else {
let previousR = collection[0];
  for (let i = 1; i < collection.length; i++) {
//call the function on every element
  previousR = action(previousR, collection[i], i);
  }
  return previousR;
 }
}
module.exports.reduce = reduce;

 /**
 * extend: Designed to take two objects, with optional additional objects, and 
 * add all subsequent object key/value pairs to first given object. Returns 
 * modified <object1>.
 * 
 * @param {An Object} object1: The object to be modified by adding properties of 
 * other given objects.
 * @param {An Object} object2: The first object containing properties to 
 * be added to our <object1>
 * @param {Any number of Objects} ...object3: Optional additional objects 
 * passed in as a rest parameter and treated as an array within the code body
 * to be added to the first object. 
 * @return {An Object} object1: Our modified <object1> with additional 
 * properties.
 */
 
function extend(object1, object2, ...object3) {
//takes two objects
//possibly more objects

//copy properties from object 2 to object 1
for (let prop in object2) {
   object1[prop] = object2[prop];
 }
 
for (let i = 0; i < object3.length; i++) {
 for (let prop in object3[i]) {
  object1[prop] = object3[i][prop];
  }
 }


//if more objects are passed in copy their properties to object 1 as well (in order)
//return the update to object 1
return object1;

}
module.exports.extend = extend;
