/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, index=0) {
  let midpoint = Math.floor(nums.length/2)
  if (nums[midpoint] === target){
      return midpoint+index
  }
  else if(nums[midpoint] < target){
      nums = nums.slice(midpoint+1, nums.length)  
      index+=midpoint+1
  }
  else if(nums[midpoint] > target){
      nums = nums.slice(0, midpoint)
      
  }
  else{
      return -1
  }
  return search(nums, target, index)
};
