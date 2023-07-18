// remove all duplicates IN PLACE from a sorted array then return the new array length

// use a set for O(n) time but also o(n) space

// two pointers i, j
// check if i = j
// if arr[i] !== arr[j] -> i = j & j++
// if arr[i] === arr[j] -> del arr[j] then j++ and repeat
// return length of curr arr

// my solution - big O (n^2) time due to splice in while loop
function removeDups(arr) {
  let i = 0
  let j = 1
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i = j
      j++
    } else if (arr[i] === arr[j]) {
      arr.splice(j, 1)
    }
  }
  return arr.length
}


// official solution that bubbles the non dups to the front
function remove_dups(arr) {
  let nextNonDuplicate = 1

  let i = 0;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i]
      nextNonDuplicate += 1
    }
    i += 1
  }
  console.log(arr)
  return nextNonDuplicate
}
// console.log(remove_dups([2,3,3,3,4,4,5,5]))

// Similar question: Given an unsorted array of numbers and a target
// 'key', remove all instances of 'key' in-place and return
// the new length of the array

// input: [2, 11, 2, 2, 1], Key = 2
// output: 2
function remove_element(arr, key) {
  let nextElement = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[nextElement] = arr[i]
      nextElement += 1
    }
  }
  return nextElement
}

console.log(remove_element([1,2,3,4], 4))

