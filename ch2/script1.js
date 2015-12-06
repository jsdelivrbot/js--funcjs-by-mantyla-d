// P1
console.log('testing 2d array merging');

var array2d = [[1, 2], [3, 4]];
function merge2dArrayIntoOne(arrays) {
  var count = arrays.length;
  var merged = new Array(count);
  var c = 0;
  for (var i = 0; i < count; ++i) {
    for (var j = 0, jlen = arrays[i].length; j < jlen; ++j) {
      merged[c++] = arrays[i][j];
    }
  }
  return merged
}

console.log(merge2dArrayIntoOne(array2d).toString());

var merge2dArrayIntoOne2 = function(arrays) {
  return arrays.reduce(function(p, n) {
    return p.concat(n);
  });
};

console.log(merge2dArrayIntoOne2(array2d).toString());


// =============================================================================

console.log("testing the imperitive method of fibonacci sequence");
console.log("expected output: 34");
var fibonacci = function(n) {
  if (n < 2) {
    return 1;
  }
  else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}
console.log(fibonacci(8));
// Output: 34

console.log("now testing the functional example using Lazy.js");
var fibonacci2 = Lazy.generate(function() {
  var x = 1,
    y = 1;
  return function() {
    var prev = x;
    x = y;
    y += prev;
    return prev;
  };
}());

console.log("expected output: 'undefined'");
console.log(fibonacci2.length());
// Output: undefined

console.log("expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]");
console.log(fibonacci2.take(12).toArray());
// Output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

var fibonacci3 = Lazy.generate(function() {
  var x = 1,
    y = 1;
  return function() {
    var prev = x;
    x = y;
    y += prev;
    return prev;
  };
}());
console.log("expected output: [34]");
console.log(fibonacci3.take(9).reverse().first(1).toArray());
// Output: [34]


// =============================================================================
// sadly for me, but I can't create test at jsperf - it block next code
console.log('if you need the first four words that only contain letters out of some text, they could naively be written like this');
var myString = "this 1s a t3st 1234 hope 1t works!!";

var words = [], count = 0;
text = myString.split(' ');
for (i = 0; count < 4, i < text.length; i++) {
  if (!text[i].match(/[0-9]/)) {
    words = words.concat(text[i]);
    count++;
  }
}
console.log(words);

var words = [];
var words = myString.split(' ').filter(function(x) {
  return (!x.match(/[1-9]+/));
}).slice(0, 4);
console.log(words);
