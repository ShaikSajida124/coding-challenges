//Longest Word Finder O(N) TIME AND SPACE COMPLEXITY 
function findLongestWordLength(sentence) {
  const splitted_sentence = sentence.split(" ");
  let maxLength = 0;
  for (const word of splitted_sentence) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("Googling do a barrel roll"));

//Longest Word Finder O(N) TIME O(1) SPACE COMPLEXITY 
function findLongestWordLength(sentence) {
  let maxLength = 0;
  let currentLength = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
      currentLength = 0;
    } else {
      currentLength++;
      }
  }
  return maxLength > currentLength ? maxLength : currentLength;
}
