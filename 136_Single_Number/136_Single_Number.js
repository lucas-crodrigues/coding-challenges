/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort((a, b) => a - b)
  let i = 0
  while (i <= nums.length) {
      if (nums[i] === nums[i+1]) i += 2
      else return nums[i]
  }
};
