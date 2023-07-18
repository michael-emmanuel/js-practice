// Big O (n^2) solution but uses less memory
function isPangram(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const strArr = str.toLowerCase()

  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false
    }
  }
  return true
}

// Big O (n) time and O (1) memory bc hashset stores 26 at most
function isPangramHashSolution(str) {
  const strArr = str.toLowerCase()
  const alphabetSet = new Set()
  for (let i = 0; i < strArr.length; i++) {
    if (Boolean(strArr[i].match(/^[a-z]/))) {
      alphabetSet.add(strArr[i])
    }
  }
  console.log(alphabetSet.size)
  return alphabetSet.size === 26
}

console.log(isPangramHashSolution("abcdefghijklmnopqrs tuv wxyz"))
