/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let start = 0;
  let tank = 0;

  if (gas.reduce((a, b) => a + b, 0) < cost.reduce((a, b) => a + b, 0)) return -1;

  for (let i = 0; i < gas.length; i++) {
      tank = tank + (gas[i] - cost[i])
      if (tank < 0) {
          tank = 0;
          start = i + 1;
      }
  }
  return start;
};
