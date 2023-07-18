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

console.log(insertionSort([8, 4, 3, 1, 5, 2]))
