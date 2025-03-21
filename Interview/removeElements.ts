function removeElement(nums: number[], val: number): number {
    let k = 0;  // Pointer to track valid elements
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] != val){
            nums[k] = nums[i]
            k++
        }        
        
    }
    return k;  // New length of array
};

let nums = [3,2,2,3]
console.log(removeElement(nums, 0))
console.log(nums)
