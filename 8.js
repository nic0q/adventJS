const pricesDoge = [18, 15, 12, 11, 9, 7]

const maxProfit = (prices) => {
  let max = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (i === j) {
        continue
      } else {
        if (prices[j] - prices[i] > max) {
          max = prices[j] - prices[i]
        }
      }
    }
  }
  if(max=== 0){
    return -1
  }
  return max
}

console.log(maxProfit([18, 15, 12, 11, 9, 7] ))
