function largestOfAll(input) {
  const largestNumbers = [];
  for (let i = 0; i < input.length; i++) {
    let largestNumber = input[i][0];
    for (let j = 0; j < input[i].length; j++) {
      const currentNumber = input[i][j];
      if (currentNumber > largestNumber) {
        largestNumber = currentNumber;
      }
    }
    largestNumbers.push(largestNumber);
  }
  return largestNumbers;
}
