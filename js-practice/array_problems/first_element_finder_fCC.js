function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return;
}

//Another way to solve
function findElement(arr, func) {
  return arr.find(func);
}
