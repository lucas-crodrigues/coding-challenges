/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  nums.sort((a, b) => a - b)
  let i = 0;
  while (i <= nums.length) {
      if (nums[i] !== i) return i;
      i++
  }
};
