var merge = function (nums1, m, nums2, n) {
    var size = m + n - 1;
    var mSize = m - 1;
    var nSize = n - 1;
    for (var i = size; i >= 0; i--) {
        console.log('entre', size, nums1[mSize], nums2[nSize]);
        if (nums1[mSize] > nums2[nSize] || nums2[nSize] == undefined) {
            nums1[i] = nums1[mSize];
            mSize--;
        }
        else {
            nums1[i] = nums2[nSize];
            nSize--;
        }
        size--;
    }
    return nums1;
};
console.log(merge([0], 0, [1], 1));
