var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    let i = nums.indexOf(target);
    return i;
  } else {
    for (let f = 0; f < nums.length; f++) {
      if (target < nums[f]) {
        return f;
        break;
      } else if (target > nums[nums.length - 1]) {
        return nums.length;
        break;
      }
    }
  }
};
