// Design Gurus shortened two point solution
function finalReverseVowels(s) {
  let vowels = "aeiouAEIOU"
  let first = 0
  let last = s.length - 1
  let array = s.split("")

  while (first < last) {
    // increment the start pointer until a vowel is found
    while (first < last && vowels.indexOf(array[first]) === -1) {
      first++
    }
    // decrement the end point until a vowel is found
    while (first < last && vowels.indexOf(array[last]) === -1) {
      last--
    }
    // swap
    ;[array[first], array[last]] = [array[last], array[first]]
    // move pointer towards center
    first++
    last--
  }
  // return the modified string
  return array.join("")
}
console.log(finalReverseVowels("beat"))

// TWO POINTER SOLUTION
function reverseVowels(str) {
  let start = 0
  let next = str.length - 1
  let strArr = str.split("")
  const vowels = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
    A: "A",
    E: "E",
    I: "I",
    O: "O",
    U: "U",
  }
  while (start < next && start < strArr.length) {
    if (strArr[start] in vowels && strArr[next] in vowels) {
      strArr = swap(strArr, start, next)
      start++
      next--
    } else if (!(strArr[start] in vowels) && !(strArr[next] in vowels)) {
      start++
      next--
    } else if (strArr[start] in vowels && !(strArr[next] in vowels)) {
      next--
    } else if (!(strArr[start] in vowels) && strArr[next] in vowels) {
      start++
    }
  }
  return strArr.join("")
}
function swap(arr, idx1, idx2) {
  ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  return arr
}

// BRUTE FORCE
function reverseVowelsBrute(str) {
  const vowels = []
  const reversedVowels = []
  let result = str.split("")

  // collect vowels
  for (let letter of result) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u" ||
      letter === "A" ||
      letter === "E" ||
      letter === "I" ||
      letter === "O" ||
      letter === "U"
    ) {
      vowels.push(letter)
    }
  }

  // reverse collected vowels
  for (let i = vowels.length - 1; i > -1; i--) {
    reversedVowels.push(vowels[i])
  }
  // insert reversed vowels
  let inc = 0
  for (let i = 0; i < result.length; i++) {
    if (
      result[i] === "a" ||
      result[i] === "e" ||
      result[i] === "i" ||
      result[i] === "o" ||
      result[i] === "u" ||
      result[i] === "A" ||
      result[i] === "E" ||
      result[i] === "I" ||
      result[i] === "O" ||
      result[i] === "U"
    ) {
      result[i] = reversedVowels[inc]
      inc++
    }
  }

  return result.join("")
}
