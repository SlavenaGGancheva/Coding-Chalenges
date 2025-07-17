/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let cache = {}
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (cache[target - n] !== undefined){
            return [cache[target - n], i]
        }
        cache[n] = i
    }
    return [];
};