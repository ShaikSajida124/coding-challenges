def sumAll(arr):
  start = arr[0] if arr[0] < arr[1] else arr[1]
  stop = arr[0] if arr[0] > arr[1] else arr[1]
  sum = 0
  for i in range(start, stop+1):
    sum += i
  return sum
