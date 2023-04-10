// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
//  and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (map.has(diff)) {
        return [map.get(diff), i];
      }
      map.set(nums[i], i);
    }
  };

let nums = [2,7,11,15]
let target = 9
console.log(twoSum(nums,target))