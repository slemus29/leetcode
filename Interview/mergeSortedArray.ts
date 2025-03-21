

const merge = (nums1: number[], m: number, nums2: number[], n: number): number[] => {
    let size = m + n - 1
    let mSize = m - 1
    let nSize = n - 1 

   for(let i=size; i >= 0; i--){
     if(nums1[mSize] > nums2[nSize] || nums2[nSize] == undefined) {
        nums1[i] = nums1[mSize]
        mSize--
     } else {
        nums1[i] = nums2[nSize]
        nSize--
     }
     size--
   }
   return nums1
};

console.log(merge([0], 0, [1], 1))