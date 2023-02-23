var missingNumber = function(nums) {
  let sort = nums.sort((a, b) => a-b);
  for (let i = 0; i <= nums.length; i++) {
      if (sort[i] != i)
          return i
  }
};
