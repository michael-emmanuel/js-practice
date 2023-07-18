function validAnagram(strOne, strTwo) {
  if (strOne.length !== strTwo.length) return false

  const strOneLetterCount = {}
  const strTwoLetterCount = {}

  for (let letter of strOne) {
    if (strOneLetterCount[letter]) {
      strOneLetterCount[letter]++
    } else {
      strOneLetterCount[letter] = 1
    } 
    
  }

  for (let letter of strTwo) {
    if (strTwoLetterCount[letter]) {
      strTwoLetterCount[letter]++
    } else {
      strTwoLetterCount[letter] = 1
    }
  }

  for (let key in strOneLetterCount) {
    if (strTwoLetterCount[key] !== strOneLetterCount[key]) return false
  }

  for (let key in strTwoLetterCount) {
    if (strOneLetterCount[key] !== strTwoLetterCount[key]) return false
  }

  return true
}

// design guru solution O(n) time, O(1) space since max is 26, # of letters in alphabet
function isAnagramGuru(s, t) {
  if (s.length !== t.length) return false

  // Create an obj to store the frequency of character in both strings.
  let freqMap = {}
  for (let i = 0; i < s.length; i++) {
    // Increment the frequency of the char in string s.
    freqMap[s[i]] = (freqMap[s[i]] || 0) + 1
    // Decrement the frequency of the char in string t.
    freqMap[t[i]] = (freqMap[t[i]] || 0) - 1
  }

  // Check if the frequency of all characters is 0.
  for (let char in freqMap) {
    if (freqMap[char] !== 0) {
      return false
    }
  }

  // If all characters have a freq of 0, this means that 't' is an anagram of s.
  return true
}

console.log(isAnagramGuru('listen', 'silent'))