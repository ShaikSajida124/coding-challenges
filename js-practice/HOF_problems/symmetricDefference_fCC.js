function diffArray(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [...arr1.filter((curr) => !set2.has(curr)), ...arr2.filter((curr) => !set1.has(curr))]
  return result;
}
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));
console.log(diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]));
console.log(diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]));
console.log(diffArray([], ["apple", "banana"]));
console.log(diffArray(["apple", "banana"], []));
console.log(diffArray([], []));
