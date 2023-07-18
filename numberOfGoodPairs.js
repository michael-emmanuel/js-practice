// Given an array of integers nums, 
// return the number of good pairs

// A pair (i, j) is called good if
// nums[i] == nums[j] and i < j

// input: [1,2,3,1,1,3] output 4
// There are 4 good pairs
// Indices: (0,3) (0,4) (3,4) (2,5)

// return 0 if no good pairs

// Brute Force Solution O(n^2)
function numOfGoodPairs(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        result++
      }
    }
  }
  return result
}

// Big O(n)
function numberOfGoodPairsHash(nums) {
  let pairCount = 0
  const map = {}
  for (let n of nums) {
    map[n] = (map[n] || 0) + 1

    pairCount += map[n] - 1
  }
  return pairCount
}

console.log(numberOfGoodPairsHash([1,2,3,2]))