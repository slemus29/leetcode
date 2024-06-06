//https://leetcode.com/problems/two-sum/submissions/

const twoSum = (nums, target) => {
    const result = [];
    for(let i=0; i <= nums.length -1; i++) {
        for(let j=i+1; j <= nums.length - 1; j++) {
            if(nums[i] + nums[j] === target) {
                result.push(i)
                result.push(j)
                return result
            }
        }
    }
    return result
}

console.log(twoSum([2,5,5,11], 10))