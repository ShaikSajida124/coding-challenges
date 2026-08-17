from collections import Counter

n = [2, 3, 2, 2, 3, 2]
def majorityElement(nums): #O(N)TIME & O(1)SPACE COMPLEXITY
  candidate = None
  count = 0
  for num in nums:
    if count == 0:
      candidate = num
      count += 1
    elif num == candidate:
      count += 1
    else:
      count -= 1
  return candidate

def majorityElement(nums): #O(N) TIME & SPACE COMPLEXITY 
  counterObject = Counter(nums)
  maxElement = None
  for element in counterObject:
    if not maxElement:
      maxElement = element 
    elif counterObject[element] > counterObject[maxElement]:
      maxElement = element
  return maxElement

def majorityElement(nums):
  maxElement = max(clt:=Counter(nums), key=clt.get)
  return maxElement   
  
