// Write a function to return the indices of the two numbers 
// (i.e. the pair) such that they add up to the given target.

// The array is sorted

// Since array is SORTED we can use the two pointer approach

function pairWithTargetSum(arr, target) {
  let start = 0
  let end = arr.length - 1
  
  while (start < end) {
    if (arr[start] + arr[end] === target) {
      return [start, end]
    }

    if (target > (arr[start] + arr[end])) {
      start++
    } else {
      end--
    }
  }
  return [-1, -1]
}

console.log(pairWithTargetSum([2,4,6,8,10], 10))