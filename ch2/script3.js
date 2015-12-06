// testing the rest of the "working with functions" section

console.log('testing the rest of the "working with functions" section');

// --- pure function ----------------------------------------------------------------
console.log('testing the pure functions section');
console.log('check the output in the document window');

// function that prints a message to the center of the screen
var printCenter = function(str) {
  var elem = document.createElement("div");
  elem.textContent = str;
  elem.style.position = 'absolute';
  elem.style.top = window.innerHeight / 2 + "px";
  elem.style.left = window.innerWidth / 2 + "px";
  document.body.appendChild(elem);
};
printCenter('hello world');

// pure function that accomplishes the same thing
var printSomewhere = function(str, height, width) {
  var elem = document.createElement("div");
  elem.textContent = str;
  elem.style.position = 'absolute';
  elem.style.top = height;
  elem.style.left = width;
  return elem;
};
document.body.appendChild(
  printSomewhere('hello world',
    (window.innerHeight / 2) + 10 + "px",
    (window.innerWidth / 2) + 10 + "px")
);

var messages = ['Hi', 'Hello', 'Sup', 'Hey', 'Hola'];
messages.map(function(s, i) {
  return printSomewhere(s, 100 + i * 10, 100 + i * 10);
}).forEach(function(element) {
  document.body.appendChild(element);
});


// --- ANONYMOUS FUNCTIONS ---------------------------------------------------------
console.log('now testing anonymous functions');

// The standard way to write anonymous functions
(function() {
  return "hello world"
});

// Anonymous function assigned to variable
var anon = function(x, y) {
  return x + y
};

// Anonymous function used in place of a named callback function,
// this is one of the more common uses of anonymous functions.

// UNCOMMENT THIS TO TEST IT, but it will never stop, fyi
//setInterval(function(){console.log(new Date().getTime())}, 1000);
// Output:  1413249010672, 1413249010673, 1413249010674, ...

// Without wrapping it in an anonymous function, it immediately
// execute once and then return undefined as the callback:
setInterval(console.log(new Date().getTime()), 1000)
// Output:  1413249010671

// --------

function powersOf(x) {
  return function(y) {
    // this is an anonymous function!
    return Math.pow(x, y);
  };
}
powerOfTwo = powersOf(2);
console.log(powerOfTwo(1)); // 2
console.log(powerOfTwo(2)); // 4
console.log(powerOfTwo(3)); // 8

powerOfThree = powersOf(3);
console.log(powerOfThree(2));  // 9
console.log(powerOfThree(10)); // 59049

// --------

var
  obj1 = { value: 1 },
  obj2 = { value: 2 },
  obj3 = { value: 3 };

var values = (function() {
  // anonymous function
  var values = [];
  return function(obj) {
    // another anonymous function!
    if (obj) {
      values.push(obj.value);
      return values;
    }
    else {
      return values;
    }
  }
})(); // make it self-executing

console.log('expected output: [1]');
console.log(values(obj1)); // Returns: [obj.value]
console.log('expected output: [1,2]');
console.log(values(obj2)); // Returns: [obj.value, obj2.value]
console.log(values()); // Returns: [obj.value, obj2.value]


// --- METHOD CHAINS ----------------------------------------------------
console.log('testing the method chains section');
console.log('these should all be the same output');

// Instead of applying the functions one per line...
arr = [1, 2, 3, 4];
arr1 = arr.reverse();
arr2 = arr1.concat([5, 6]);
arr3 = arr2.map(Math.sqrt);
console.log(arr3);

// ...they can be chained together into a one-liner
console.log([1, 2, 3, 4].reverse().concat([5, 6]).map(Math.sqrt));


// parentheses may be used to illustrate
console.log(((([1, 2, 3, 4]).reverse()).concat([5, 6])).map(Math.sqrt));


// --- RECURSION ------------------------------------------------------------
console.log('testing the recursion section');

var foo = function(n) {
  if (n < 0) {
    // base case
    return 'hello';
  }
  else {
    // recursive case
    return foo(n - 1);
  }
}
console.log(foo(5));

function gcd(a, b) {
  if (b == 0) {
    // base case (conquer)
    return a;
  }
  else {
    // recursive case (divide)
    return gcd(b, a % b);
  }
}

console.log(gcd(12, 8));
console.log(gcd(100, 20));
