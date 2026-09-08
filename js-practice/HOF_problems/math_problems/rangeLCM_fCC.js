function smallestCommons(arr) {
  const start = arr[0] < arr[1] ? arr[0] : arr[1];
  const stop = arr[0] > arr[1] ? arr[0] : arr[1];
  let gcd = arr[0];
  let lcm = arr[0];
  for (let i = start; i <= stop; i++) {
    gcd = findGCD(lcm, i);
    lcm = (lcm * i) / gcd;
  }
  return lcm;
}
function findGCD(a,b) {
  let divisor = a < b ? a : b;
  let dividend = a > b ? a : b;
  let temp = dividend % divisor;
  while (temp >= 1) {
    dividend = divisor;
    divisor = temp;
    temp = dividend % divisor;
  }
  return divisor;
}
console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]) );
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
