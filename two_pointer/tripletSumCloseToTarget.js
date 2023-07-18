// Given an arr of unsorted nums & target num
// find a triplet in arr whose sum is as close to target # as possible

// return the sum of the triplet, if more than one triplet, 
// return the sum of the triplet with the smallest sum

// use solution from tripletSumToZero and instead of
// target = arr[i] + arr[l] + arr[r]
// check if sum for target - 1 exist or if sum for target + 1 exist
// if target - 1 exist return that, if neither the decrement again
// check if sum for target - 2 exist or target - 2, return if exist or 
// keep decrementing until target is found

function tripletSumCloseToTarget(arr, target) {
  const result = [] 

  for (let i = 0; i < arr.length; i++) {
    let l = i + 1
    let r = arr.length - 1
    let positiveInc = 1
    let negativeInt = -1
    while (l < r) {
      if (target + positiveInc === arr[i] + arr[l] + arr[r]) {
        return target + positiveInc
      } else if (target + positiveInc > arr[i] + arr[l] + arr[r]) {
        l++
        positiveInc++
      } else {
        r--
        positiveInc++
      }
      if (target + negativeInt === arr[i] + arr[l] + arr[r]) {
        return target + negativeInt
      } else if (target + negativeInt > arr[i] + arr[l] + arr[r]) {
        l++
        negativeInt--
      } else {
        r--
        negativeInt--
      }
    }
  }
 }

 console.log(tripletSumCloseToTarget([-1, 0, 2, 3], 3))