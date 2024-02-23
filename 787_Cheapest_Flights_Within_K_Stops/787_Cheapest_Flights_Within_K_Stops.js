/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  let prices = [...Array(n).fill(Infinity)];
  prices[src] = 0;

  for (let i = 0; i <= k; i++) {
      let temp = [...prices];
      for (const [s, d, p] of flights) {
          if (prices[s] !== Infinity) temp[d] = Math.min(temp[d], prices[s] + p)
      }
      prices = temp
  }
  return prices[dst] === Infinity ? -1 : prices[dst];
};
