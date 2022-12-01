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