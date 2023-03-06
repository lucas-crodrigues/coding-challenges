var maxProfit = function(prices) {
  let profit = 0;
  let current;
  while (prices.length != 0) {
      current = prices.shift()
      prices.map(e => {
          let potencial = e - current;
          if (potencial > profit)
              profit = potencial;
      })
  }

  return profit;
};
