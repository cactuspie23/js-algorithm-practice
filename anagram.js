// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman.

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  let counter1 = {}
  let counter2 = {}
  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1
  }
  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1
  }
  console.log(counter1, counter2)
  for (let key in counter1) {
    if (!(counter1[key] === counter2[key])) {
      return false
    }
  }
  return true
}

console.log(anagram('rat', 'tar'))