// using an already sorted(increasing order) ONE index array 
// return the indices of the two numbers (ADDED BY ONE) that
// sum to the target

function two_sum_II(arr, target) {
  // use two pointer method here 
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum > target) {
      right--
    } else {
      left++
    }
  }
  return -1
}

console.log(two_sum_II([2,7,11,15], 9))