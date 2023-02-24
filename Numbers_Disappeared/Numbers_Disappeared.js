var findDisappearedNumbers = function(nums) {
  let arr = [];
  let numsArr = Array.from({length: nums.length}, (_, i) => i + 1);
  numsArr.forEach(num => {
      if(!nums.includes(num)){
          arr.push(num);
      }
  })
  return arr;
};
