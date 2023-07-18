// split str into arr
// sort arr
// conver arr to str
// return str

function insertionSort(inputArr) {
  let arrLength = inputArr.length
  for (let i = 1; i < arrLength; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i]
    // The last element of our sorted subarray
    let j = i - 1
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j]
      j--
    }
    inputArr[j + 1] = current
  }
  return inputArr
}

console.log(insertionSort([5, 6, 3, 2, 1]))
