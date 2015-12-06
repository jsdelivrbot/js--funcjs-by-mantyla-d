// testing the accumulator functions
console.log('testing the accumulator functions');
// these objects are not in the book because it's trivial, but needed for testing:
var
  obj1 = { value: 1 },
  obj2 = { value: 2 },
  obj3 = { value: 3 };

// now begins the code in the books:
console.log('part 1');

var values = [];
function accumulate(obj) {
  values.push(obj.value);
}
accumulate(obj1);
accumulate(obj2);
console.log('expected output: [1,2]');
console.log(values); // Output: [obj1.value, obj2.value]


// --- next accumalate funciont in the example ---------
// NOTE: the function needs to be renamed because of housting

console.log('part 2');

function accumulate2(obj) {
  var values = [];
  values.push(obj.value);
  return values;
}
console.log("expected output: [1] ");
console.log(accumulate2(obj1)); // Returns: [obj1.value]
console.log("expected output: [2] ");
console.log(accumulate2(obj2)); // Returns: [obj2.value]
console.log("expected output: [3] ");
console.log(accumulate2(obj3)); // Returns: [obj3.value]

var ValueAccumulator = function(obj) {
  var values = []
  var accumulate = function() {
    values.push(obj.value);
  };
  accumulate();
  return values;
};


// ----- next func in axample --------------
console.log('part 3');

var ValueAccumulator = function() {
  var values = [];
  var accumulate = function(obj) {
    if (obj) {
      values.push(obj.value);
      return values;
    } else {
      return values;
    }
  };
  return accumulate;
};

//This allows us to do this:
var accumulator = ValueAccumulator();
accumulator(obj1);
accumulator(obj2);
console.log('expected output: [1,2]');
console.log(accumulator());
// Output: [obj1.value, obj2.value]

// --- next section --------------------------------
console.log('now the section on higher-order function');

// using forEach() to iterate through an array and call a
// callback function, accumulator, for each item
var accumulator2 = ValueAccumulator();
var objects = [obj1, obj2, obj3]; // could be huge array of objects
objects.forEach(accumulator2);

console.log('expected output: [1,2,3]');
console.log(accumulator2());
