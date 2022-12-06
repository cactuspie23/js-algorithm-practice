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