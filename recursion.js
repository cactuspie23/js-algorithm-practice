// the call stack data structure
// when JS sees the return keyword or when function ends the compiler will remove(pop)
// recursive functions keep pushing new functions onto call stack
// the base case is when the function ends

function countDown(num) {
  if(num <= 0) {
    console.log('All Done!')
    return
  }
  console.log(num)
  num--
  countDown(num)
}

countDown(5)

function factorial(num) {
  if(num === 1) return 1
  return num * factorial(num-1)
}

console.log(factorial(5))

// helper method recursion
// outter function has inner helper function that calls itself

function collectOdds(nums){
  let result = []
  function helper(helperInput){
    if(helperInput.length === 0) return
    if(helperInput[0] % 2 !== 0){
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(nums)
  return result
}

console.log(collectOdds([1,2,3,4,5,6,7,8,9]))

// Pure Recursion!
// the same problem as above, but without helper function

function collectOddValues(arr){
  let newArr = []
  if(arr.length === 0) return newArr
  if(arr[0] % 2 !== 0){
    newArr.push(arr[0])
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)))
  return newArr
}

console.log(collectOddValues([1,2,3,4,5]))


// Practice recursion //

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. 

function power(base, exp){
  if(exp === 0) return 1
  return base * power(base, exp -1)
}

power(2,0) // 1
power(2,2) // 4
power(2,4) // 16

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(num){
  if(num === 0) return 1
  return num * factorial(num - 1)
}

factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
console.log(factorial(7)) // 5040

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr){
  if(arr.length === 0) return 1
  return arr[0] * productOfArray(arr.slice(1))
}

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num){
  if(num === 0) return 0
  return num + recursiveRange(num - 1)
}

recursiveRange(6) // 21
recursiveRange(10) // 55 

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

