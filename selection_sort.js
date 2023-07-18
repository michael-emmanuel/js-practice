function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    let j
    for (j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j
      }
    }
    let temp = arr[lowest]
    arr[lowest] = arr[i]
    arr[i] = temp
  }
  return arr
}

console.log(selectionSort([7, 4, 6, 5, 4, 3, 2, 1]))
