const sumPairs = (numbers, result) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (j === i) {
        continue
      } else {
        if (numbers[j] + numbers[i] === result) {
          return [numbers[i], numbers[j]]
        }
      }
    }
  }
  return null
}

console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))
