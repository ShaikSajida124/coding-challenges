function bouncer(arr) {
  const final_array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      final_array.push(arr[i])
    }
  }
  return final_array;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(bouncer([]));
