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

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false
  }
  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}

console.log(validAnagram('anagram', 'nagaram'))