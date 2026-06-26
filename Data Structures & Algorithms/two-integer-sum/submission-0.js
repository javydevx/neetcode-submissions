class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    twoSum(nums, target) {
        let map = new Map();
        
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (map.has(complement)) {
                return [map.get(complement), i];
            }
            map.set(nums[i], i);
        }
    }

    /*
    twoSum(nums, target) {
        const hashmap = {}

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i] 

            if (hashmap.hasOwnProperty(complement)) {
                return [hashmap[complement], i]
            }

            hashmap[nums[i]] = i
        }

        return []
    }
    */

    /*
    // Brute Force
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) 
                    return [i, j]
            }
        }
        return []
    }
    */
}
