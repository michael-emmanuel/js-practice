// Pseudocode
// Start by picking the second element of the arr
// Now compare the second element to the one before it and swap if necessary
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the ele in correct place
// Repeat until the array is sorted

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    let j
    for (j = i - 1; j > -1 && currentVal < arr[j]; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}

console.log(insertionSort([4, 5, 3, 2, 1]))
