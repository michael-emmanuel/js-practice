// Triplet Sum to Zero
// Given an unsorted arr of numbers, find ALL 
// UNIQUE triplets in it that add up to zero

// UNIQUE - skip any duplicate number

// input [-3, 0, 1, 2, -1, 1, -2]
// output [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
// Apparently this is the wrong solution
function threeSum(arr) {
  const results = [];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          results.push([arr[i], arr[j], arr[k]])
        }
      }
    }
  }
  return results
}

// console.log(threeSum([-3, 0, 1, 2, -1, 1, -2]))
// Two Pointer
function searchTriplets(arr) {
  arr.sort((a ,b) => a - b)
  const triplets = []

  for (let i = 0; i < arr.length; i++) {
    // skip same element to avoid duplicate triplets
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue
    }
    searchPair(arr, -arr[i], i + 1, triplets)
  }
  return triplets
} 

function searchPair(arr, targetSum, left, triplets) {
  let right = arr.length - 1
  while (left < right) {
    const currentSum = arr[left] + arr[right]
    if (currentSum === targetSum) { // found the triplet
      triplets.push([-targetSum, arr[left], arr[right]])
      left += 1
      right -= 1
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1 // skip same element to avoid duplicate triplets
      }
      while (left < right && arr[right] === arr[right - 1]) {
        right -= 1 // skip same element to avoid duplicate triplets
      }
    } else if (targetSum > currentSum) {
      left += 1
    } else {
      right -= 1
    }
  }
}

// console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]))

// My solution after watching neetCode and doing two sum II
// O(n^2)
function my_solution(arr) {
  if (arr.length < 3) {
    return 
  }
  const result = []
  arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    // prevent dups
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue
    }
    let l = i + 1
    let r = arr.length - 1
    while (l < r) {
      let tripleSum = arr[i] + arr[l] + arr[r]
      if (tripleSum > 0) {
        r -= 1
      } else if (tripleSum < 0) {
        l += 1
      } else {
        result.push([arr[i], arr[l], arr[r]])
        l += 1
        // prevent dups
        while (l < r && arr[l] == arr[l - 1]) {
          l += 1
        }
      }
    }
  }
  return result
}
console.log(my_solution([-3, 0, 1, 2, -1, 1, -2]))