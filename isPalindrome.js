// lowercase entire str
// strip all non alpha char
// two pointer approach towards center
// check if first === last

function isPalindrome(s) {
  const strippedLetters = []
  for (let letter of s.split("")) {
    const lowerCaseOnly = /^[a-z0-9]+$/g
    let lowercasedLetter = letter.toLowerCase()
    if (lowerCaseOnly.test(lowercasedLetter)) {
      strippedLetters.push(lowercasedLetter)
    }
  }
  let first = 0
  let last = strippedLetters.length - 1

  while (first < last) {
    if (strippedLetters[first] !== strippedLetters[last]) return false
    first++
    last--
  }

  return true
}

// Memory efficient O(n) time solution O(1) memory
function isPalindromes(s) {
  let i = 0
  let j = s.length - 1 // initialize two pointers, one at start, one at end

  while (i < j) { // continue until the two pointers cross over
    while (i < j && !s[i].match(/^[a-z0-9]+$/i)) { // move i forward until a letter is found
      i++
    }
    while (i < j && !s[j].match(/^[a-z0-9]+$/i)) { // mode j forward until a letter is found
      j--
    }

    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false
    i++
    j--
  }
  return true
}


console.log(isPalindromes("123454321"))
