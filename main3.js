function getSum(a, b) {
  const resultArr = []

  if (a === b) {
    return a
  }

  if (a < b) {
    for (let i = a; i <= b; i++) {
      resultArr.push(i)
    }
  }

  if (a > b) {
    for (let i = a; i >= b; i--) {
      resultArr.push(i)
    }
  }
  console.log(resultArr)
  return resultArr.reduce((total, item) => total + item)
}

console.log(getSum(5, 10))
