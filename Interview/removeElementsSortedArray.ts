function removeDuplicates(nums: number[]): number {
    let k = 0

    for (let i = 0; i < nums.length; i++) {
        if(k < 2 || nums[i] != nums[k-2]){
            nums[k] = nums[i]
            k++
        }
        
    }
};

let nums = [0,1,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(nums))
console.log(nums)