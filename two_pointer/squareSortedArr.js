// square all the elements of a sorted array, return result in sorted order

// Input: [-2, -1, 0, 2, 3] => [4, 1, 0, 4, 9]
// Output: [0, 1, 4, 4, 9]

// Brute force 
function sortedSquares(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i]
  }
  return arr.sort((a, b) =>  a - b)
}

// Two Pointer
function make_squares(arr) {
  const n = arr.length;
  let squares = Array(n).fill(0)
  let highestSquareIdx = n - 1
  let left = 0
  let right = n - 1

  while (left <= right) {
    let leftSquare = arr[left] * arr[left]
    let rightSquare = arr[right] * arr[right]
    if (leftSquare > rightSquare) {
      squares[highestSquareIdx] = leftSquare
      left += 1
    } else {
      squares[highestSquareIdx] = rightSquare
      right -= 1
    }
    highestSquareIdx -= 1
  }
  return squares
}

console.log(sortedSquares([-2, -1, 0, 2, 3]))
