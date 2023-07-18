// Given an array of strings "words" and two diff strings that already exist 
// in the array word1 & word2, return the shortest distance between the two words 

// input ["a", "c", "d", "b", "a"] word1 = a, word2 = b ------- output 1
// input ["a", "b", "c", "d", "e"] word1 = a, word2 = e ------- output 4
// input ["a", "b", "c", "b", "e"] word1 = e, word2 = b ------- output 1


// loop through the entire arr
function wordDistance(words, word1, word2) {
  const wordCount = {}

  for (let i = 0; i < words.length; i++) {
    wordCount[words[i]] = (wordCount[words[i]] || 0) + 1
  }

  if (wordCount[word1] === 1 && wordCount[word2] === 1) {
    const word1Idx = words.indexOf(word1)
    const word2Idx = words.indexOf(word2)
  
    let result = Math.max(word1Idx-word2Idx, word2Idx-word1Idx)
    return result
  }
}

function wordDistanceTwoPointer(words, word1, word2) {
  let wordOneIdx = -1
  let wordTwoIdx = -1
  let shortestDistance = words.length

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) wordOneIdx = i
    if (words[i] === word2) wordTwoIdx = i

    if (wordOneIdx !== -1 && wordTwoIdx !== -1) {
      shortestDistance = Math.abs(Math.min(shortestDistance, wordOneIdx - wordTwoIdx))
    }
  }
  return shortestDistance
}

console.log(wordDistanceTwoPointer([1,2,3,4], 1, 4))