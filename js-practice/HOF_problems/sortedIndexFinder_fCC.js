function getIndexToIns(arr, num) {
  if (arr.length === 0) {
    return 0;
  }
  const result = arr.sort((a,b) => a-b).findIndex(curr => curr >= num); 
  return result === -1 ? arr.length : result;
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
