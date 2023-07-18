// Big O (log n)
// memort O(1)

function sqrt(n) {
  if (n < 2) return n

  let low = 2
  let high = n

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (mid * mid === n) {
      return mid
    } else if (mid * mid < n) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return high
}

console.log(sqrt(100))
