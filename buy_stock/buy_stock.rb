def max_profit(prices)
  buy = 0
  sell = 1
  max_profit = 0

  while sell < prices.length do
    if prices[buy] < prices[sell]
      profit = prices[sell] - prices[buy]
      max_profit = [max_profit, profit].max
    else
      buy = sell
    end
    sell += 1
  end

  max_profit
end