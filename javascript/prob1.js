/**
 * Problem 1: Multiples of 3 and 5
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
*/

var num = 1000;
var result = 0;

function isMultiple(x, n) {
  return x % n === 0 ? true : false;
}

for (var i = 1; i < num; i++) {
  if (isMultiple(i, 3) || isMultiple(i, 5)) {
    result += i;
  }
}

console.log(result);
