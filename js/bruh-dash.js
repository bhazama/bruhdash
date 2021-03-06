var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length - 1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr,match) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === match){
        return i;
      }else if(i === arr.length - 1){
        return -1;
      }
    }
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr,match) {
    for(var i = arr.length -1; i >= 0; i--){
      if(arr[i] === match){
        return i;
      }else if(i === 0){
        return -1;
      }
    }
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i]){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr,start,end) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if(i >= start && i < end){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr,num){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if(i >= num){
        newArr.push(arr[i]);
      }else if(num === undefined){
        arr.shift();
        return arr;
      }
    }
    return newArr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr,num) {
    var newArr = [];
    for(var i = arr.length - 1; i >= 0; i--){
      if(i < arr.length - num){
        newArr.unshift(arr[i]);
      }else if(num === undefined){
        arr.pop();
        return arr;
      }
    }
    return newArr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr,num) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if(i < num){
        newArr.push(arr[i]);
      }else if(num === undefined){
        newArr.push(arr[0]);
        break;
      }
    }
    return newArr;
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr,num) {
    var newArr = [];
    for(var i = arr.length - 1; i >= 0; i--){
      if(i >= arr.length - num){
        newArr.unshift(arr[i]);
      }else if(num === undefined){
        newArr.push(arr[arr.length -1]);
        break;
      }
    }
    return newArr;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr,value,start,end) {
    for(var i = 0; i < arr.length; i++){
      if(i >= start && i < end){
        arr.splice(i,1,value);
      }else if(start === undefined && end === undefined){
        arr.splice(i,1,value);
      }
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr, value1,value2) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] !== value1 && arr[i] !== value2){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr,index) {
    for(var i = arr.length - 1; i >= 0; i--){
      for(var k = 0; k < index.length; k++){
        if(i === index[k]){
          arr.splice(index[k], 1);
        }
      }
    }
    return arr;
  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
