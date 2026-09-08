function steamrollArray(arr) {
  const finalArray = [];
  unpackArray(arr, finalArray);
  return finalArray;
}

function unpackArray(arr, result) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      unpackArray(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
}
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
