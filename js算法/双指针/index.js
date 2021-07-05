/**合并两个有序数组，使之成为一个有序数组, 双指针解法 */

const nums1 = [1,2,3,4,5,6]

const nums2 = [2,5,5]

// 输出 [1,2,2,3,4,5,5,6,8]

function conactTwoArr(nums1, nums2) {
  let i = nums1.length - 1, j = nums2.length - 1, k = i + j + 1;

  while(j>=0) {
    if (i < 0) {
      nums1[k--] = nums2[j--]
      continue
    }

    nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--]
  }

  console.log(nums1)
}

conactTwoArr(nums1, nums2)