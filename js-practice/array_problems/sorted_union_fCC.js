function uniteUnique() {
  const unique_elements_set = new Set();
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      unique_elements_set.add(arguments[i][j]);
    }
  }
  return [...unique_elements_set];
}

console.log(uniteUnique([1, 7], [9, 7, 5], [7, 5]));


