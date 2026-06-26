class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    /*
    // Brute force
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            let numToFind = target - nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] === numToFind) {
                    return [i, j];
                }
            }
        }
        return null;
    }
    */

    /*
    // Sorting
    twoSum(nums, target) {
        let A = [];
        for (let i = 0; i < nums.length; i++) {
            A.push([nums[i], i]);
        }

        A.sort((a, b) => a[0] - b[0]);

        let i = 0, j = nums.length - 1;
        while (i < j) {
            let cur = A[i][0] + A[j][0];
            if (cur === target) {
                return [Math.min(A[i][1], A[j][1]), 
                        Math.max(A[i][1], A[j][1])];
            } else if (cur < target) {
                i++;
            } else {
                j--;
            }
        }
        return [];
    }
    */

    /*
    // Hash Map
    twoSum(nums, target) {
        const obj = {};

        for (let i = 0; i < nums.length; i++) {
            let numToFind = target - nums[i];

            if (numToFind in obj) {
                return [obj[numToFind], i];
            }
            
            obj[[nums[i]]] = i;
        }
        
        return null;
    }
    */

     // Hash Map (One Pass)
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let numToFind = target - nums[i];

            if (map.has(numToFind)) {
                return [map.get(numToFind), i];
            }
            
            map.set(nums[i], i);
        }
        
        return [];
    }
}
