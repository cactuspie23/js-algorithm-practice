// Write a function called maxSubarraySum which accepts an array of integers and  number called n. The function should calculate the max sum of n consecutive elements in an array.

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null
  }
  let max = -Infinity
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0
    for (let j = 0; j < num; j++) {
      temp += arr[i + j] 
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}

// complexity is O(n^2) for the nested loop

function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

// complexity O(n) two separate loops
// only goes through the array and adds numbers once