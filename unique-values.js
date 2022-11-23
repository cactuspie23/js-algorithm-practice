// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. 

function countUniqueValues(arr) {
  if (arr.length === 0) return 0
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i ++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

// O(n) complexity because it only loops once

console.log(countUniqueValues([1,1,1,2,3,3,4,4,5,6]))