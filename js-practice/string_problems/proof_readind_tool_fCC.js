//Build a Proof Reading Tool ~freeCodeCamp
function isPalindrome(word) {
  let reverse_string = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverse_string += word[i];
  }
  return reverse_string.toLowerCase() === word.toLowerCase();
}

function findPalindromeBreaks(words) {
  if (words.length === 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const is_palindrome = isPalindrome(words[i]);
    if (!is_palindrome) {
      result.push(i);
    }
  }
  return result;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }
  const phrases_count = {};
  const result = [];
  for (let i = 0; i <= words.length - phraseLength; i++) {
    const word_sequence = words.slice(i, i+phraseLength).join(" ");
    if (!phrases_count.hasOwnProperty(word_sequence)) {
      phrases_count[word_sequence] = 0;
    }
    phrases_count[word_sequence] += 1;
  }

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const word_sequence = words.slice(i, i+phraseLength).join(" ");
    if (phrases_count[word_sequence] > 1) {
      result.push(i);
    }
  }
  return result;
}

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < texts.length; i++) {
    const current_object = {};
    current_object['repeatedPhrases'] = findRepeatedPhrases(texts[i], phraseLength);
    current_object['palindromeBreaks'] = findPalindromeBreaks(texts[i], phraseLength);
    result.push(current_object);
  }
  return result;
}

const arr = [["samas", "level", "samas", "level"], ["a", "b", "c", "a", "b"], ["racecar", "ror", "racecar", "ror"], ["apple", "banana", "pop"]];

const analyze_texts = analyzeTexts(arr, 2);
console.log(analyze_texts);
