// create empty results arr
// sort the incoming arr
// loop through and skip duplicates
// set l and r pointers 
// check if arr[i] + arr[l] + arr[r] = zero 
// include else if/else conditions
// return results arr

function threeSum(arr) {
  const results = []
  arr.sort((a,b) => a - b)
  
  for (let i = 0; i < arr.length; i++) {
    if ((i > 0) && (arr[i - 1] === arr[i])) {
      continue
    }
    let l = i + 1
    let r = arr.length - 1
    while (l < r) {
      let sum = arr[i] + arr[l] + arr[r]
      if (sum > 0) {
        r--
      } else if (sum < 0) {
        l++
      } else {
        results.push([arr[i], arr[l], arr[r]])
        l++
      }
      while (l < r && arr[l - 1] === arr[l]) {
        l++
      }
    }
  }
  return results
}

console.log(threeSum([-3, 0, 1, 2, -1, 1, -2]))