def pairElement(string):
  basePairs = {
    'A' : 'T',
    'T' : 'A',
    'G' : 'C',
    'C' : 'G'
  }
  basePairsArray = []
  for i in string:
    basePair = [i, basePairs[i]]
    basePairsArray.append(basePair)
  return basePairsArray
