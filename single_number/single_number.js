var singleNumber = function(nums) {
  let numbers = {};

  for (let i = 0; i < nums.length; i++){
    let number = nums[i];
    numbers[number] = 0;
  } 


  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    numbers[number] += 1;
  }

  for (const n in numbers) {
    if (numbers[n] === 1) {
          return n
    } 
  }
};
