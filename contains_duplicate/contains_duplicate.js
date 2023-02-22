var containsDuplicate = function(nums) {
    let nums2 = [... new Set(nums)];
    if(nums2.length === nums.length)
        return false;
    else
        return true;
};
