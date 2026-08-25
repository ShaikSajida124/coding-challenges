function pairElement(str) {
  const basesPairs = {
    A : 'T',
    T : 'A',
    C : 'G',
    G : 'C'
  }
  const basesPairsArray = [];
  for (let i = 0; i < str.length; i++) {
    const currentPair = [str[i], basesPairs[str[i]]];
    basesPairsArray.push(currentPair);
  }
  return basesPairsArray;
}
console.log(pairElement("ATCG"));
