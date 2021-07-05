const arr = [1,2,3,4,5]
const target = 8

/**
 * 在数组中找到两个数加起来等于target
 * 解题思路：遍历arr，将target-arr[i]和arr[i]存在map中，之后的元素如在map找的到,说明这个元素和之前的arr[i]，就是加起来为target的两个元素
 */

function findTwoNum (arr, target) {
  const mapObj = new Map()

  for (let i = 0; i<arr.length; i++) {
    const key = target - arr[i]
    if (mapObj.has(key)) {
      return [key, arr[i]]
    }
    mapObj.set(arr[i], key)
  }
  return '没找到'
}

console.log(findTwoNum(arr, target))



/***三数之和的问题
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 */

const arr1 = [0,1,2,3,4,5,6,7,8,9]

function findThreeNum (arr) {
  const res = []
  // 排除异常情况
  if( arr.length < 3 || arr[0] > 0 || arr[arr.length - 1] < 0) {
    return res;
  }
  for (let i = 0; i<arr.length; i++) {
    // 因为数组是递增的，arr[i]>0了，后面的数都会大于0
    if (arr[i] > 0) {
      break
    }

    let left = i+1, right = arr.length - 1
    while(left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum > 0) {
        right--
      } else if (sum === 0){
        res.push([arr[i],  arr[left], arr[right]]);
        left++;
        right--;
      } else {
        left++
      }
    }
  }
  return res
}